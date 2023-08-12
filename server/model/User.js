const mongoose = require("mongoose");

const User = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },

    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    isVerified: {
        type: Boolean
    }
});

module.exports = mongoose.model("User", User);