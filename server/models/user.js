const { Schema, model } = require("mongoose");

const User = new Schema({
    username: {
        type: String,
        trim: true,
        required: true
    },

    avatar: {
        type: String
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

module.exports = model("User", User);