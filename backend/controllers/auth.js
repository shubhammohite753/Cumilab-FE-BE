const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const transporter = require("../services/mailer");
const otpGenerator = require("otp-generator");
const path = require('path');
const User = require("../models/user");
const TokenBl = require("../models/tokenbl");
const HttpError = require("../http-error");

exports.signup = async (req, res, next) => {
  // const errors = validationResult(req);
  // if (!errors.isEmpty()) {
  //   const error = new HttpError(
  //     "Validation failed, entered data is incorrect"+ {...errors},
  //     422
  //   );
  //   return next(error);
  // }
  const { name, email, password, mobileNo } = req.body;

  let existingUser;

  try {
    existingUser = await User.findOne({ email }).select({ email: 1 }).lean();
  } catch (err) {
    const error = new HttpError("Signing up failed #a", 500);
    return next(error);
  }

  if (existingUser) {
    const error = new HttpError("Email exists already", 422);
    return next(error);
  }

  let hashedPassword;
  try {
    hashedPassword = await bcrypt.hash(password, 12);
  } catch (err) {
    const error = new HttpError("Could not create user. Please try again", 500);
    return next(error);
  }

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
    mobileNo,
  });

  try {
    await newUser.save();
  } catch (err) {
    const error = new HttpError("Signing up failed #b"+err, 500);
    return next(error);
  }

  let token;
  try {
    token = jwt.sign(
      { userId: newUser.id, email: newUser.email },
      process.env.JWT
    );
  } catch (err) {
    const error = new HttpError("Signing up failed #c", 500);
    return next(err);
  }

  res.status(201).json({
    token,
    redirect:'/'
  });
};


exports.login = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new HttpError(
      "Validation failed, entered data is incorrect",
      422
    );
    return next(error);
  }
  const { email, password } = req.body;

  let existingUser;

  try {
    existingUser = await User.findOne({ email })
      .select({ password: 1, id: 1, email: 1 })
      .lean();
  } catch (err) {
    const error = new HttpError("Logging in failed #a", 500);
    return next(error);
  }

  if (!existingUser) {
    const error = new HttpError(
      "Could not find any user with the particular email id",
      400
    );
    return next(error);
  }

  let isValidPassword = false;

  try {
    isValidPassword = await bcrypt.compare(password, existingUser.password);
  } catch (err) {
    const error = new HttpError("Something went wrong please try again", 500);
    return next(error);
  }

  if (!isValidPassword) {
    const error = new HttpError("Password Incorrect", 403);
    return next(error);
  }

  let token;
  try {
    token = jwt.sign(
      { userId: existingUser._id, email: existingUser.email },
      process.env.JWT
    );
  } catch (err) {
    const error = new HttpError("Logging in failed #b", 500);
    return next(error);
  }

  res.json({
    token,
    redirect:"/dashboard"
  });
};

exports.logout = async (req, res, next) => {
  const token = req.token;
  let existingToken;

  try {
    existingToken = await TokenBl.findOne({ token }).select({ id: 1 }).lean();
  } catch (err) {
    const error = new HttpError("Logout failed #a", 500);
    return next(error);
  }

  if (existingToken) {
    const error = new HttpError("Logout already executed for this User", 401); //aka TOKEN
    return next(error);
  }

  const newToken = new TokenBl({
    token,
  });

  try {
    await newToken.save();
  } catch (err) {
    const error = new HttpError("Logout failed #b", 500);
    return next(error);
  }

  res.status(200).json({ message: "Logout Successful" });
};



exports.forgotPassword = (async (req, res, next) => {
  // 1) Get user based on POSTed email
  const email = req.body.email;
  const user = await User.findOne({ email: email });
  if (!user) {
    return res.status(404).json({
      status: "error",
      message: "There is no user with email address.",
    });
  }

  // 2) Generate the random reset token
  const resetToken = user.createPasswordResetToken();
  await user.save({ validateBeforeSave: false });

  // 3) Send it to user's email
  try {
    const resetURL = `http://localhost:3000/auth/new-password?token=${resetToken}`;
    // TODO => Send Email with this Reset URL to user's email address



    // const transporter = nodemailer.createTransport({
    //   service: 'gmail',
    //   auth: {
    //     user: process.env.GOOGLE_EMAIL,
    //     pass: process.env.GOOGLE_EMAIL_PASSWORD
    //   }
    // })

    const mailoptions = {
      from: process.env.GOOGLE_EMAIL,
      to: email,
      subject: 'Cumilab passwordreset Token',
      text: `Click on below link to reset your password\n${resetURL}`,
    }
    transporter.sendMail(mailoptions);



    res.status(200).json({
      status: "success",
      message: "Token sent to email!",
    });
  } catch (err) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false });

    return res.status(500).json({
      message: "There was an error sending the email. Try again later!" + err,
    });
  }
});
