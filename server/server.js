const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server, {
  cors: corsOptions,
});
const cookieParser = require("cookie-parser");
require("dotenv").config();

const authMiddleware = require("./middlewares/auth");
const connectDB = require("./helper/connectDB");
const authRouter = require("./routers/authRouter");
const usersRouter = require("./routers/usersRouter");
const initSocket = require("./sockets");

// middlewares;
app.use(cors(corsOptions));
app.options(cors(corsOptions));
app.use(express.static("./views"));
app.use("/auth", [express.json(), express.urlencoded({ extended: true })]);
app.use("/users", [cookieParser(), authMiddleware]);

// routers;
app.use("/auth", authRouter);
app.use("/users", usersRouter);

const port = process.env.PORT || 5000;

connectDB().then(() => {
  server.listen(port, async () => {
    await initSocket(io);
    console.log(`Server is listening on port: ${port}`);
  });
}).catch((e) => {
  console.log("DB connection fail", e);
});