const { model, Schema } = require("mongoose");

const OneToOneMessage = new Schema({
  participients: [
    {
      type: Schema.ObjectId,
      ref: "User",
    },
  ],

  messages: [
    {
      from: {
        type: Schema.ObjectId,
        ref: "User",
      },

      to: {
        type: Schema.ObjectId,
        ref: "User",
      },

      type: {
        type: String,
        enum: ["text", "media", "document"],
      },

      text: {
        type: String,
      },

      media: {
        type: String,
      },

      document: {
        type: String,
      },

      time: {
        type: Date,
        default: Date.now(),
      },
    },
  ],
});

module.exports = model("OneToOneMessage", OneToOneMessage);


OneToOneMessage.methods.getAllChats = async function (_id) {
  return await this.find(
    {
      participients: { $all: [_id] },
    },
    { _id: true, participients: true }
  ).populate({
    path: "participients",
    match: { _id: { $ne: _id } },
    select: "_id username avatar email status",
  });
};

OneToOneMessage.methods.getChat = async function (chatId) {
  return ({ messages } = await this.findById(chatId, {
    _id: false,
    messages: true,
  }));
};
