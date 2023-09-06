const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const User = require("./models/user");

const signupRouter = require("./routers/auth/signup");
const loginRouter = require("./routers/auth/login");
const resetpasswordRouter = require("./routers/auth/resetpassword");
const forgetpasswordRouter = require("./routers/auth/forgetpassword");
const verifyRouter = require("./routers/auth/verify");
const usersRouter = require("./routers/dashboard/users");

const port = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

// middlewares;
app.use(express.static("./views"));

app.use("/auth", express.json());
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
    credentials: true
}));

// routers;
app.use("/auth/signup", signupRouter);
app.use("/auth/login", loginRouter);
app.use("/auth/resetpassword", resetpasswordRouter);
app.use("/auth/forgetpassword", forgetpasswordRouter);
app.use("/auth/verify", verifyRouter);
app.use("/dashboard/users", usersRouter);

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

// database connection;
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then( () => {
    console.log("Database connected...");

    // on successfull connection of DB => server listens;
    server.listen(port, () => {
        console.log(`Server is listening on port: ${port}`);
    });
})
.catch( (err) => {
    console.log("Connection fail");
    console.log(err);
});