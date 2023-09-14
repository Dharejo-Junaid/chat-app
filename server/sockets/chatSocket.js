const User = require("../models/User");
const OneToOneMessage = require("../models/OneToOneMessage");

const getAllChats = async (_id) => {
  return await OneToOneMessage.find(
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

const getChat = async (chatId) => {
  return ({ messages } = await OneToOneMessage.findById(chatId, {
    _id: false,
    messages: true,
  }));
};

const chatSocket = (io, socket) => {
  socket.on("get_all_chats", async ({ _id }, callback) => {
    const allChats = await getAllChats(_id);
    callback(allChats);
  });

  socket.on("start_conversation", async ({ from, to }) => {
    const conversation = OneToOneMessage.find({
      participients: { $all: [from, to] },
    }).populate("participients", "_id username avatar status email");

    socket.emit("start_chat", conversation);
  });

  socket.on("get_chat", async (data, callback) => {
    const messages = await getChat(data.chatId);
    callback(messages);
  });

  socket.on("text_message", async (data) => {
    console.log("data = ", { ...data });
    const { chatId, from, to, text } = data;

    const chat = await OneToOneMessage.findById(chatId);
    chat.messages.push({
      from,
      to,
      type: "text",
      text,
    });

    await chat.save();

    const toUser = await User.findById(to);
    const fromUser = await User.findById(from);

    io.to(toUser.socket_id).emit("new_message", { chatId, text });
    io.to(fromUser.socket_id).emit("new_message", { chatId, text });
  });
};

module.exports = chatSocket;
