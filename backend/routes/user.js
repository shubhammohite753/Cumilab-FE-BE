const express = require("express");
const router = express.Router();

const userControllers = require("../controllers/user");
const isAuth = require("../middlewares/is-auth");
const upload = require("../middlewares/file-upload");

router.get("/profile", isAuth, userControllers.getProfile);

router.get("/search/:term", isAuth, userControllers.search);

router.post("/conversation/create", isAuth, userControllers.createConversation);

router.get("/conversations", isAuth, userControllers.getConversations);

router.get(
  "/conversation/:conversationId",
  isAuth,
  userControllers.getConversation
);

router.get(
  "/conversation/:conversationId/:lastMessageId",
  isAuth,
  userControllers.getConversationScrollable
);

router.post(
  "/avatar",
  isAuth,
  upload.single("image"),
  userControllers.avatar
);


router.delete("/avatar", isAuth, userControllers.deleteAvatar);

//OTP Routes

router.post("/ verify", userControllers.verifyOTP);
router.post("/send-otp", userControllers.sendOTP);

// project Routes

router.post("/createproject", isAuth, userControllers.createProject);
router.get("/getprojects", isAuth, userControllers.getProjects);

//group Routes
router.post("/createGroup", isAuth, userControllers.createGroup);




module.exports = router;

