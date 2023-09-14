const User = require("../models/User");
const FriendRequest = require("../models/FriendRequest");
const OneToOneMessage = require("../models/OneToOneMessage");

const requestSocket = (io, socket) => {
  socket.on("send_friend_request", async (data, callback) => {
    const toUser = User.findById(data.to, {
      socket_id: true,
      username: true,
    });
    const fromUser = User.findById(data.from, {
      socket_id: true,
      username: true,
    });

    const newRequest = await FriendRequest.create({
      sender: data.from,
      recipient: data.to,
    });

    await newRequest.save();

    if (newRequest) {
      callback({ isSent: true });
      io.to(fromUser.socket_id).emit("friend_request_recieved", {
        severity: "info",
        message: "New friend request recieved",
      });
    } else {
      callback({ isSent: false });
    }
  });

  socket.on("accept_friend_request", async (data) => {
    const request = await FriendRequest.findById(data.requestId);

    const sender = await User.findById(request.sender);
    const recipient = await User.findById(request.recipient);

    sender.friends.push(request.recipient);
    recipient.friends.push(request.sender);

    await sender.save();
    await recipient.save();

    const newChat = await OneToOneMessage.create({
      participients: [sender._id, recipient._id],
    });

    await newChat.save();
    await FriendRequest.findByIdAndDelete(data.requestId);

    io.to(sender.socket_id).emit("friend_request_accepted", {
      severity: "success",
      message: "Friend request accepted",
    });

    io.to(recipient.socket_id).emit("friend_request_accepted", {
      severity: "success",
      message: "Friend request accepted",
    });
  });
};

module.exports = requestSocket;
