const ObjectId = require("mongoose").Types.ObjectId;
const cloudinary = require("cloudinary").v2;
const fs = require("fs");
const { validationResult } = require("express-validator");
const User = require("../models/user");
const projects = require("../models/projects");
const Conversation = require("../models/conversation");
const io = require("../socket");
const { findUserByUserId } = require("../roomActions");
const HttpError = require("../http-error");
const { MONTH, isToday, isYesterday } = require("../utils");
const transporter = require("../services/mailer");
const otpGenerator = require("otp-generator");
const path = require('path');
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

exports.getProfile = async (req, res, next) => {
  const { userId } = req;
  let user;

  try {
    user = await User.findById(userId)
      .select({
        name: 1,
        email: 1,
        username: 1,
        avatar: 1,
        about: 1,
      })
      .lean();

    res.status(200).json({
      name: user.name,
      email: user.email,
      username: user.username,
      avatar: user.avatar,
      about: user.about,
    });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

exports.search = async (req, res, next) => {
  const { term } = req.params;

  let users;

  // try {
  //   users = await User.find(
  //     {
  //       username: { $regex: new RegExp(term), $options: "i" },
  //     },
  //     "username avatar about id"
  //   )
  //     .limit(20)
  //     .lean();
  // } catch (err) {
  //   const error = new HttpError("Could not perform search #a", 500);
  //   return next(error);
  // }

  // const filteredUsers = users.filter((user) => user._id != req.userId);

  // res.status(200).json(filteredUsers);

  try {
    users = await User.aggregate([
      {
        $match: {
          $and: [
            {
              username: new RegExp(term, "i"),
            },
            {
              _id: {
                $ne: new ObjectId(req.userId),
              },
            },
          ],
        },
      },
      {
        $project: {
          conversation: {
            $filter: {
              input: "$conversations",
              as: "item",
              cond: {
                $eq: ["$$item.with", new ObjectId(req.userId)],
              },
            },
          },
          isConvo: {
            $in: [new ObjectId(req.userId), "$conversations.with"],
          },
          about: 1,
          username: 1,
          avatar: 1,
        },
      },
      {
        $lookup: {
          from: "conversations",
          localField: "conversation.cId",
          foreignField: "_id",
          as: "convo",
        },
      },
      {
        $unwind: {
          path: "$convo",
          preserveNullAndEmptyArrays: true, //true
        },
      },
      {
        $project: {
          _id: 0,
          about: 1,
          username: 1,
          avatar: 1,
          id: "$convo._id",
          status: "$convo.status",
          lastMessage: {
            $slice: ["$convo.messages", -1],
          },
          isConvo: 1,
        },
      },
    ]);
  } catch (err) { }

  const mappedUsers = users.map((user) => {
    let userStatus = {},
      otherUserStatus = {},
      lastMessage = [];
    if (user.isConvo) {
      [userStatus] = user.status.filter(
        (status) => status.id.toString() == req.userId
      );

      [otherUserStatus] = user.status.filter(
        (status) => status.id.toString() != req.userId
      );

      lastMessage = user.lastMessage.map((message) => {
        let status;

        if (message.sender == req.userId) {
          status = otherUserStatus.status;
        } else {
          status = null;
        }

        return {
          content: message.message,
          date: message.date,
          status,
        };
      });
    }

    return {
      about: user.about,
      username: user.username,
      avatar: user.avatar,
      id: user.id,
      lastMessage: user.isConvo ? lastMessage[0] : null,
      unread: user.isConvo ? userStatus.totalCount : null,
    };
  });

  res.status(200).json({ users: mappedUsers });
};

exports.createConversation = async (req, res, next) => {
  const { username } = req.body;
  const { userId } = req;

  let otherUser, isConvoAlreadyCreated;

  try {
    otherUser = await User.findOne({ username }).select({
      id: 1,
      conversations: 1,
    });
  } catch (err) { }

  // const allConversations = otherUser.conversations.map((conversation) =>
  //   Object.keys(conversation)
  // );

  // isConvoAlreadyCreated = allConversations.findIndex(
  //   (conversation) => conversation == userId
  // );

  // if (isConvoAlreadyCreated !== -1) {
  //   const conversationId =
  //     otherUser.conversations[isConvoAlreadyCreated][userId];

  //   return res
  //     .status(200)
  //     .json({ redirect: `Redirect user to /chat/${conversationId}` });
  // }

  isConvoAlreadyCreated = otherUser.conversations.find(
    (conversation) => conversation.with == userId
  );

  if (isConvoAlreadyCreated) {
    const conversationId = isConvoAlreadyCreated.cId;

    return res
      .status(200)
      .json({ redirect: `Redirect user to /chat/${conversationId}` });
  }

  let user;
  try {
    user = await User.findById(userId).select({ id: 1, conversations: 1 });
  } catch (err) { }

  const newConversation = new Conversation({
    messages: [],
    status: [
      {
        id: user._id,
        singleCount: 0,
        totalCount: 0,
        status: "read",
      },
      {
        id: otherUser._id,
        singleCount: 0,
        totalCount: 0,
        status: "read",
      },
    ],
    users: [user._id, otherUser._id],
  });

  // user.conversations.push({ [otherUser._id]: newConversation.id });
  // otherUser.conversations.push({ [user._id]: newConversation.id });

  user.conversations.push({ cId: newConversation.id, with: otherUser._id });
  otherUser.conversations.push({ cId: newConversation.id, with: user._id });

  try {
    await Promise.all([newConversation.save(), user.save(), otherUser.save()]);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Something went wrong" });
  }

  // return res
  //   .status(200)
  //   .json({ redirect: `Redirect user to /chat/${newConversation.id}` });

  return res.status(201).json({ id: newConversation.id });
};

exports.getConversations = async (req, res, next) => {
  let convos;

  try {
    convos = await User.aggregate([
      {
        $match: {
          _id: new ObjectId(req.userId),
        },
      },
      {
        $lookup: {
          from: "conversations",
          localField: "conversations.cId",
          foreignField: "_id",
          as: "conversation",
        },
      },
      {
        $unwind: {
          path: "$conversation",
          preserveNullAndEmptyArrays: false,
        },
      },
      {
        $addFields: {
          lastMessage: {
            $slice: ["$conversation.messages", -1],
          },
        },
      },
      {
        $project: {
          otherUser: {
            $filter: {
              input: "$conversation.users",
              as: "item",
              cond: {
                $ne: ["$$item", new ObjectId(req.userId)],
              },
            },
          },
          status: "$conversation.status",
          lastMessage: "$lastMessage",
          id: "$conversation._id",
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "otherUser",
          foreignField: "_id",
          as: "other",
        },
      },
      {
        $unwind: {
          path: "$other",
          preserveNullAndEmptyArrays: false, //true
        },
      },
      {
        $project: {
          status: "$status",
          lastMessage: "$lastMessage",
          id: "$id",
          about: "$other.about",
          username: "$other.username",
          avatar: "$other.avatar",
          _id: 0,
        },
      },
      {
        $sort: {
          "lastMessage.date": -1,
        },
      },
    ]);
  } catch (err) { }

  const conversations = convos.map((convo) => {
    let [userStatus] = convo.status.filter(
      (status) => status.id.toString() == req.userId
    );

    let [otherUserStatus] = convo.status.filter(
      (status) => status.id.toString() != req.userId
    );

    const lastMessage = convo.lastMessage.map((message) => {
      let status;

      if (message.sender == req.userId) {
        status = otherUserStatus.status;
      } else {
        status = null;
      }

      return {
        content: message.message,
        date: message.date,
        status,
        image: message.image,
      };
    });

    return {
      about: convo.about,
      username: convo.username,
      avatar: convo.avatar,
      id: convo.id,
      lastMessage: lastMessage[0],
      unread: userStatus.totalCount,
      typing: false,
    };
  });

  res.status(200).json({ conversations });
};

exports.getConversationScrollable = async (req, res, next) => {
  const { conversationId, lastMessageId } = req.params;

  let conversation;

  try {
    conversation = await Conversation.aggregate([
      {
        $match: {
          _id: new ObjectId(conversationId),
        },
      },
      {
        $addFields: {
          index: {
            $indexOfArray: ["$messages._id", new ObjectId(lastMessageId)],
          },
          totalMessages: {
            $size: "$messages",
          },
        },
      },
      {
        $addFields: {
          newMessages: {
            $cond: {
              if: {
                $gte: ["$index", 20],
              },
              then: {
                $slice: [
                  "$messages",
                  {
                    $subtract: ["$index", 20],
                  },
                  20,
                ],
              },
              else: {
                $slice: ["$messages", 0, "$index"],
              },
            },
          },
        },
      },
      {
        $project: {
          newMessages: 1,
          myStatus: {
            $filter: {
              input: "$status",
              as: "item",
              cond: {
                $eq: ["$$item.id", new ObjectId(req.userId)],
              },
            },
          },
          otherUserStatus: {
            $filter: {
              input: "$status",
              as: "item",
              cond: {
                $ne: ["$$item.id", new ObjectId(req.userId)],
              },
            },
          },
          totalMessages: 1,
          index: 1,
        },
      },
    ]);
  } catch (err) { }

  if (!conversation || conversation.length === 0) {
    return res.status(404).json({ message: "Invalid Conversation Id #a" });
  }

  if (!conversation[0].myStatus || conversation[0].myStatus.length === 0) {
    return res.status(404).json({ message: "Invalid Conversation Id #b" });
  }

  const messagesToSend = {};

  const lastMessageIdNew =
    conversation[0].newMessages.length > 0
      ? conversation[0].newMessages[0]._id
      : null;

  let { myStatus, otherUserStatus, totalMessages, newMessages, index } =
    conversation[0];

  otherUserStatus = otherUserStatus[0];
  myStatus = myStatus[0];

  let count, doubleCount, singleCount, difference;

  if (myStatus.totalCount < otherUserStatus.totalCount) {
    difference = totalMessages - index; //no of messages that has been sent.
    if (otherUserStatus.totalCount > difference) {
      count = otherUserStatus.totalCount - difference;
      if (otherUserStatus.singleCount > difference) {
        singleCount = otherUserStatus.singleCount - difference;
        doubleCount = count - singleCount;
      } else {
        doubleCount = count;
      }
    }
  }

  let tillWhen = newMessages.length + 1;

  if (count) {
    tillWhen = newMessages.length - 1 - count;
  }

  newMessages.forEach((message, index) => {
    const sender = message.sender == req.userId ? 0 : 1;

    let status;

    if (count && index > tillWhen) {
      if (doubleCount > 0) {
        status = "double";
        doubleCount -= 1;
      } else {
        status = "sent";
      }
    } else {
      status = "read";
    }

    const newMessage = {
      content: message.message,
      sender,
      time: message.date,
      status,
      id: message._id,
      image: message.image,
    };

    const date = new Date(message.date);
    const isT = isToday(new Date(date));
    const isY = isYesterday(new Date(date));

    const key = isT
      ? "Today"
      : isY
        ? "Yesterday"
        : `${MONTH[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;

    if (messagesToSend[key]) {
      messagesToSend[key].push(newMessage);
    } else {
      messagesToSend[key] = [];
      messagesToSend[key].push(newMessage);
    }
  });

  res.status(200).json({ messages: messagesToSend, mId: lastMessageIdNew });
};

exports.getConversation = async (req, res, next) => {
  const { conversationId } = req.params;

  let conversation;

  try {
    // conversation = await Conversation.findById(conversationId).lean();

    conversation = await Conversation.aggregate([
      {
        $match: {
          _id: new ObjectId(conversationId),
        },
      },
      {
        $addFields: {
          myStatus: {
            $filter: {
              input: "$status",
              as: "item",
              cond: {
                $eq: ["$$item.id", new ObjectId(req.userId)],
              },
            },
          },
          otherUserStatus: {
            $filter: {
              input: "$status",
              as: "item",
              cond: {
                $ne: ["$$item.id", new ObjectId(req.userId)],
              },
            },
          },
        },
      },
      {
        $unwind: {
          path: "$myStatus",
          preserveNullAndEmptyArrays: false,
        },
      },
      {
        $unwind: {
          path: "$otherUserStatus",
          preserveNullAndEmptyArrays: false,
        },
      },
      {
        $addFields: {
          newMessages: {
            $cond: {
              if: {
                $gt: ["$myStatus.totalCount", 20],
              },
              then: {
                $slice: [
                  "$messages",
                  {
                    $subtract: [
                      "$myStatus.totalCount",
                      {
                        $multiply: ["$myStatus.totalCount", 2],
                      },
                    ],
                  },
                ],
              },
              else: {
                $slice: ["$messages", -20],
              },
            },
          },
          totalMessages: {
            $size: "$messages",
          },
        },
      },
      {
        $project: {
          myStatus: 1,
          otherUserStatus: 1,
          newMessages: 1,
          totalMessages: 1,
        },
      },
    ]);
  } catch (err) { }

  // if (!conversation) {
  //   return res.status(404).json({ message: "Invalid Conversation Id #a" });
  // }

  if (!conversation || conversation.length === 0) {
    return res.status(404).json({ message: "Invalid Conversation Id #a" });
  }

  if (!conversation[0].myStatus) {
    return res.status(404).json({ message: "Invalid Conversation Id #b" });
  }

  let otherUserDetails;
  const { myStatus, otherUserStatus, totalMessages, newMessages } =
    conversation[0];

  try {
    otherUserDetails = await User.findById(otherUserStatus.id)
      .select({
        username: 1,
        avatar: 1,
        about: 1,
        lastSeen: 1,
        name: 1,
        _id: 0,
      })
      .lean();
  } catch (err) { }

  let count, doubleCount;

  if (myStatus.totalCount < otherUserStatus.totalCount) {
    count = otherUserStatus.totalCount;
    doubleCount = otherUserStatus.totalCount - otherUserStatus.singleCount;
  }

  let tillWhen = newMessages.length + 1;

  if (count) {
    tillWhen = newMessages.length - 1 - count;
  }

  const messagesToSend = {};

  const lastMessageId = newMessages.length > 0 ? newMessages[0]._id : null;

  newMessages.forEach((message, index) => {
    const sender = message.sender == req.userId ? 0 : 1;
    let status;

    if (count && index > tillWhen) {
      if (doubleCount > 0) {
        status = "double";
        doubleCount -= 1;
      } else {
        status = "sent";
      }
    } else {
      status = "read";
    }

    const newMessage = {
      content: message.message,
      sender,
      time: message.date,
      // status: count && index > tillWhen ? status : "read",
      status,
      id: message._id,
      image: message.image,
    };

    const date = new Date(message.date);
    const isT = isToday(new Date(date));
    const isY = isYesterday(new Date(date));

    const key = isT
      ? "Today"
      : isY
        ? "Yesterday"
        : `${MONTH[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;

    if (messagesToSend[key]) {
      messagesToSend[key].push(newMessage);
    } else {
      messagesToSend[key] = [];
      messagesToSend[key].push(newMessage);
    }
  });

  if (myStatus.totalCount > 0) {
    try {
      await Conversation.updateOne(
        {
          _id: new ObjectId(conversation[0]._id),
          "status.id": new ObjectId(req.userId),
        },
        {
          $set: {
            "status.$.status": "read",
            "status.$.singleCount": 0,
            "status.$.totalCount": 0,
          },
        }
      );
    } catch (err) { }

    const otherUserOnline = findUserByUserId(otherUserStatus.id);

    if (otherUserOnline) {
      if (otherUserOnline.currPage.conversationId == conversation[0]._id) {
        io.getIO().to(otherUserOnline.socketId).emit("messageReadChat", {
          convoId: conversation[0]._id,
          status: "read",
        });
      }

      io.getIO().to(otherUserOnline.socketId).emit("messageReadMain", {
        convoId: conversation[0]._id,
        status: "read",
      });
    }
  }

  res.status(200).json({
    messages: messagesToSend,
    total: totalMessages,
    userDetails: { ...otherUserDetails },
    mId: lastMessageId,
  });
};

exports.avatar = async (req, res, next) => {
  let media;

  await cloudinary.uploader.upload(
    req.file.path,
    { width: 200, height: 200, gravity: "face", crop: "thumb" },
    (err, image) => {
      if (err) {
        const error = new HttpError("Could not update avatar", 500);
        return next(error);
      }
      fs.unlinkSync(req.file.path);
      // res.json(image);
      media = image.secure_url;
    }
  );

  let user;
  try {
    user = await User.updateOne(
      { _id: req.userId },
      { $set: { avatar: media } },
      { upsert: true }
    );
  } catch (err) {
    const error = new HttpError("Could not update avatar #a", 500);
    return next(error);
  }

  if (!user.nModified) {
    throw new Error("Could not update avatar #b");
  }

  res.status(201).json({ avatar: media });
};

exports.deleteAvatar = async (req, res, next) => {
  let user;

  try {
    user = await User.findById(req.userId).select({ avatar: 1 });
  } catch (err) {
    const error = new HttpError("Could not delete avatar #a", 500);
    return next(error);
  }

  if (!user.avatar) {
    const error = new HttpError("Avatar Already Deleted", 422);
    return next(error);
  }

  const splitImg = user.avatar.split("/");
  const publicId = splitImg[splitImg.length - 1].split(".")[0];

  await cloudinary.uploader.destroy(publicId, (err) => {
    if (err) {
      const error = new HttpError(
        "Something went wrong while deleting avatar",
        500
      );
      return next(error);
    }
  });

  //https://support.cloudinary.com/hc/en-us/articles/202520352-I-have-deleted-an-image-and-though-it-has-been-removed-from-the-media-library-it-is-still-available-via-URL-

  user.avatar = null;

  try {
    await user.save();
  } catch (err) {
    const error = new HttpError("Could not delete avatar #b", 500);
    return next(error);
  }

  res.status(201).json({ avatar: null });
};

exports.createProject = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new HttpError(
      "Validation failed, entered data is incorrect",
      422
    );
    return next(error);
  }
  console.log(req);
  const { name, description, logo, userid } = req.body;

  let existingProject;

  try {
    existingProject = await projects.findOne({ name }).select({ name: 1 }).lean();
  } catch (err) {
    const error = new HttpError("project creation failed", 500);
    return next(error);
  }

  if (existingProject) {
    const error = new HttpError("project already exists", 422);
    return next(error);
  }
  const newProject = new projects({
    name: name,
    description: description,
    logo: logo,
  });
  newProject.users.push(userid);

  try {
    await newProject.save();
    const folderName = newProject.name;

    const parentFolderPath = path.join(__dirname, '..');
    const newFolderPath = path.join(parentFolderPath, 'uploads', 'Projects', folderName);

    fs.mkdir(newFolderPath, { recursive: true }, (err) => {
      if (err) {
        console.error('Error creating folder:', err);
      } else {
        console.log('Folder created successfully.');
      }
    });
  } catch (err) {
    const error = new HttpError("project creation faied #b" + err, 500);
    return next(error);
  }
  res.status(201).json({ project: newProject });
};




// Assuming you have the 'projects' model properly defined and imported.

exports.getProjects = async (req, res, next) => {
  const { userId } = req.query;
  let user;

  try {
    // Find a project that contains the provided userId in the users array
    fetchProject = await projects.findOne({ users: userId }).exec();

    // Find all projects that contain the provided userId in the users array

    console.log("User found:", fetchProject);


    if (!fetchProject) {
      return res.status(200).json({ message: "no projects found" });
    }

    res.status(200).json(fetchProject);
  } catch (err) {
    console.error("Error while fetching projects:", err);
    res.status(500).json({ message: "Something went wrong" });
  }
};



exports.createGroup = async (req, res, next) => {
  const { name, description, users, groupAvtar, userId } = req.body;

  const validJsonArray = users.replace(/'/g, "\"");

  // Parse the JSON string to get the JavaScript array
  let array;
  try {
    array = JSON.parse(validJsonArray);
    if (!Array.isArray(array) || array.length < 2) {
      const error = new HttpError("Group must have at least two users", 422);
      return next(error);
    }
  } catch (err) {
    const error = new HttpError("Invalid 'users' array format", 422);
    return next(error);
  }

  let existingGroup;

  try {
    existingGroup = await Conversation.findOne({ name }).select({ name: 1 }).lean();
    console.log(existingGroup);
  } catch (err) {
    const error = new HttpError("Group creation failed", 500);
    return next(error);
  }

  if (existingGroup) {
    const error = new HttpError("Group already exists", 422);
    return next(error);
  }

  const newGroup = new Conversation({
    description: description,
    group: {
      isGroup: true,
      name: name,
      avatar: groupAvtar,
      group_admin: userId,
    },
    users: array, // Assuming users is an array containing user IDs of group members
    status: array.map((userId) => ({
      id: userId,
      singleCount: 0,
      totalCount: 0,
      status: "sent",
    })),
  });

  try {
    await newGroup.save();
  } catch (err) {
    const error = new HttpError("Group creation failed #b" + err, 500);
    return next(error);
  }

  res.status(201).json({ group: newGroup });
};

exports.sendOTP = (async (req, res, next) => {
  const { userId } = req.body;
  const new_otp = otpGenerator.generate(6, {
    upperCaseAlphabets: false,
    specialChars: false,
    lowerCaseAlphabets: false,
  });

  const otp_expiry_time = Date.now() + 10 * 60 * 1000; // 10 Mins after otp is sent

  const user = await User.findByIdAndUpdate(userId, {
    otp_expiry_time: otp_expiry_time,
  });
  user.otp = new_otp.toString();
  const email = user.email;
  await user.save({ new: true, validateModifiedOnly: true });

  console.log(new_otp);

  const mailoptions = {
    from: process.env.GOOGLE_EMAIL,
    to: email,
    subject: 'Cumilab Verification',
    text: `Your otp for verification is ${new_otp}`,
  }
  transporter.sendMail(mailoptions);

  res.status(200).json({
    status: "success",
    message: "OTP Sent Successfully!",
  });
  const { userdata } = req;
  req.userdata = userdata;
  next();
});


exports.verifyOTP = (async (req, res, next) => {
  // verify otp and update user accordingly
  const { email, otp } = req.body;
  const user = await User.findOne({
    email,
    otp_expiry_time: { $gt: Date.now() },
  });

  if (!user) {
    return res.status(400).json({
      status: "error",
      message: "Email is invalid or OTP expired",
    });
  }

  if (user.verified) {
    return res.status(400).json({
      status: "error",
      message: "Email is already verified",
    });
  }

  if (!(await user.correctOTP(otp, user.otp))) {
    res.status(400).json({
      status: "error",
      message: "OTP is incorrect",
    });

    return;
  }

  // OTP is correct

  user.verified = true;
  user.otp = undefined;
  await user.save({ new: true, validateModifiedOnly: true });
  const { userdata } = req;
  sendToken(userdata, 200, res);

});

