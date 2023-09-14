const requestSocket = require("./requestSocket");
const User = require("../models/User");
const chatSocket = require("./chatSocket");

const initSocket = async (io) => {
  io.on("connection", async (socket) => {
    const socket_id = socket.id;
    const _id = socket.handshake.query._id;
    console.log("user connected = ", socket_id);

    if (_id) await User.findByIdAndUpdate(_id, { socket_id, status: "online" });

    requestSocket(io, socket);
    chatSocket(io, socket);

    socket.on("disconnect", async () => {
      await User.findByIdAndUpdate(_id, { status: "offline" });
      console.log("User disconnected = ", socket_id);
      socket.disconnect(0);
    });
  });
};

module.exports = initSocket;
