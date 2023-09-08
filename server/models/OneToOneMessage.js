const { model, Schema  } = require("mongoose");

const schema = new Schema({
    participients: [
        {
            type: Schema.ObjectId,
            ref: "User"
        }
    ],

    messages: [
        {

            from: {
                type: Schema.ObjectId,
                ref: "User"
            },

            to: {
                type: Schema.ObjectId,
                ref: "User"
            },

            type: {
                type: String,
                enum: ["Text", "Media", "Document", "Link"]
            },

            createdAt: {
                type: Date,
                default: Date.now()
            },

            text: {
                type: String
            }
        },
    ]
});

module.exports = model("OneToOneMessage", schema);