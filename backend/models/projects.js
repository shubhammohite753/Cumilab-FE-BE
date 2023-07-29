const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,

    },
    logo: {
        type: String,
        default: '../uploads/'
    },
    projectadmin: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "User",
    },
    users: [
        {
            type: mongoose.Types.ObjectId,
            required: true,
            ref: "User",
        },
    ],
    status: {
        type: String,
        default: 'under review',
    }

}, { timestamp: true });

module.exports = mongoose.model("project", projectSchema);
