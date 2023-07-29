const crypto = require("crypto");

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  avatar: {
    type: String,
  },
  about: {
    type: String,
    default: "Hey There! I'm using Chatapp",
  },
  lastSeen: {
    type: Date,
    default: Date.now,
  },
  passwordChangedAt: {
    // unselect
    type: Date,
  },
  passwordResetToken: {

    type: String,
  },
  passwordResetExpires: {
    // unselect
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    // unselect
    type: Date,
  },
  verified: {
    type: Boolean,
    default: false,
  },
  otp: {
    type: String,
  },
  otp_expiry_time: {
    type: Date,
  },
  conversations: [
    {
      cId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "Conversation",
      },
      with: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "User",
      },
    },
  ],
});

/* 
  conversations: [
    {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "Conversation",
    },
  ],
  withWhom: [
    {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "User",
    },
  ],

    conversations: [
    {
      [{
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "User",
      }]: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "Conversation",
      },
    },
  ],
  
*/

userSchema.methods.correctOTP = async function (candidateOTP, userOTP) {
  return await bcrypt.compare(candidateOTP, userOTP);
};


//to generate a password reset Token
userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");

  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

module.exports = mongoose.model("User", userSchema);
