const { model, Schema } = require("mongoose");

const schema = new Schema({
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

module.exports = model("OneToOneMessage", schema);
