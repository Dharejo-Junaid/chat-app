const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const cors = require("cors");
const cookieParser = require("cookie-parser");
const User = require("./models/user");
require("dotenv").config();

const authMiddleware = require("./middlewares/auth");
const connectDB = require("./helper/connectDB");
const authRouter = require("./routers/authRouter");
const usersRouter = require("./routers/usersRouter");

const corsOptions = {
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
    credentials: true
}

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
    const user_id = socket.handshake.query("user_id");

    console.log(`user connected = ${socket_id}`);

    if(user_id) await User.findByIdAndUpdate(user_id, { socket_id });

    socket.on("friend_request", (data) => {
        console.log({data});

        const to = User.findById(data.to);
        console.log({to});

        io.to(to.socket_id).emit("new_friend_request", {

        });
    });
});

connectDB(server);