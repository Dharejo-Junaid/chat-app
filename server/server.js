const cors = require("cors");
const corsOptions = {
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
    credentials: true
}

const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server, {
    cors: corsOptions
});
const cookieParser = require("cookie-parser");
const User = require("./models/user");
const FriendRequest = require("./models/friendRequest");
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

    if(_id) await User.findByIdAndUpdate(_id, { socket_id });

    socket.on("send_friend_request", async (data) => {
        console.log({data});

        const toUser = User.findById(data.to, { socket_id: true, username: true });
        const fromUser = User.findById(data.from, { socket_id: true, username: true });

        const newRequest = await FriendRequest.create({
            sender: data.from, recipient: data.to
        });


        if(newRequest) {
            io.to(toUser.socket_id).emit("recieve_friend_request", {
                severity: "info",
                message: "New friend request recieved"
            });

            io.to(fromUser.socket_id).emit("is_sent_friend_request", {
                severity: "info",
                message: "Your request has been sent successfully"
            });
        }

        else {
            io.to(fromUser.socket_id).emit("is_sent_friend_request", {
                severity: "error",
                message: "Issue in sending your friend request"
            });
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

        await FriendRequest.findByIdAndDelete(data.requestId);

        io.to(recipient.socket_id).emit("is_accepted_request", {
            severity: "info",
            message: "Friend request accepted"
        });

        io.to(sender.socket_id).emit("is_accepted_request", {
            severity: "info",
            message: "Friend request accepted"
        });

        io.on("test", (data) => {
            console.log("\n\n\ntest is = ", {data}, "\n\n\n");
        })
    });

    socket.on("disconnect", () => {
        console.log("connection disconnected");
        socket.disconnect(0);
    });
});

connectDB(server);