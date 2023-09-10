const cors = require("cors");
const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true
}

const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server, {
    cors: corsOptions
});
const cookieParser = require("cookie-parser");
const User = require("./models/User");
const FriendRequest = require("./models/FriendRequest");
const OneToOneMessage = require("./models/OneToOneMessage");
require("dotenv").config();

const authMiddleware = require("./middlewares/auth");
const connectDB = require("./helper/connectDB");
const authRouter = require("./routers/authRouter");
const usersRouter = require("./routers/usersRouter");

// middlewares;
app.use(cors(corsOptions));
app.options(cors(corsOptions));
app.use(express.static("./views"));

app.use("/auth", [
    express.json(),
    express.urlencoded({ extended: true })
]);

app.use("/users", [
    cookieParser(),
    authMiddleware
]);

// routers;
app.use("/auth", authRouter);
app.use("/users", usersRouter);

// sockets;
io.on("connection", async (socket) => {
    const socket_id = socket.id;
    const _id = socket.handshake.query._id;

    if(_id) await User.findByIdAndUpdate(_id, { socket_id, status: "online" });

    socket.on("send_friend_request", async (data, callback) => {

        const toUser = User.findById(data.to, { socket_id: true, username: true });
        const fromUser = User.findById(data.from, { socket_id: true, username: true });

        const newRequest = await FriendRequest.create({
            sender: data.from, recipient: data.to
        });

        await newRequest.save();

        if(newRequest) {
            io.to(toUser.socket_id).emit("recieve_friend_request", {
                severity: "info",
                message: "New friend request recieved"
            });

            callback({ isSent: true });
        }

        else {
            callback({ isSent: false });
        }
    });

    socket.on("accept_friend_request", async (data, callback) => {
        const request = await FriendRequest.findById(data.requestId);

        const sender = await User.findById(request.sender);
        const recipient = await User.findById(request.recipient);

        sender.friends.push(request.recipient);
        recipient.friends.push(request.sender);
        
        await sender.save();
        await recipient.save();

        const newChat = await OneToOneMessage.create({
            participients: [
                sender._id, recipient._id
            ]
        });

        await newChat.save();
        await FriendRequest.findByIdAndDelete(data.requestId);
        
        callback();
    });

    socket.on("get_all_chats", async ({ _id }, callback) => {
        const conversations = await OneToOneMessage.find({
            participients: { $all: [_id] }
        }).populate("participients", "_id username avatar status email");
        
        callback(conversations);
    });

    socket.on("start_conversation", async ({ from, to}) => {
        const conversation = OneToOneMessage.find({
            participients: { $all: [from, to] }
        }).populate("participients", "_id username avatar status email");
        
        socket.emit("start_chat", conversation);
    });

    socket.on("get_messages", async(data, callback) => {
        const messages = await OneToOneMessage.findById(data.conversationId, { messages: true });
        callback(messages);
    });

    socket.on("text_message", async (data) => {
        console.log(data);

        const { conversationId, from, to, message } = data;
        
        const chat = await OneToOneMessage.findById(conversationId);
        chat.messages.push({
            from, to, type: "Text", text: message
        });

        await chat.save();

        const toUser = await User.findById(to);
        const fromUser = await User.findById(from);

        io.to(toUser.socket_id).emit("new_message", { conversationId, message });
        io.to(fromUser.socket_id).emit("new_message", { conversationId, message });
    });

    socket.on("disconnect", async () => {
        await User.findByIdAndUpdate(_id, { status: "offline" });
        console.log("User disconnected = ", socket_id);
        socket.disconnect(0);
    });
});

connectDB(server);