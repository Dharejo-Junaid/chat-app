const { Schema, model } = require("mongoose");

const friendRequest = new Schema({
    sender: {
        type: Schema.ObjectId,
        ref: "User"
    },

    recipient: {
        type: Schema.ObjectId,
        ref: "User"
    },

    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = model("FriendRequest", friendRequest);