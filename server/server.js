const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const signupRouter = require("./routers/auth/signup");
const loginRouter = require("./routers/auth/login");
const resetpasswordRouter = require("./routers/auth/resetpassword");
const forgetpasswordRouter = require("./routers/auth/forgetpassword");
const verifyRouter = require("./routers/auth/verify");

const port = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

app.use(express.static("./views"));

app.use("/auth", express.json());
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
    credentials: true
}));

app.use("/auth/signup", signupRouter);
app.use("/auth/login", loginRouter);
app.use("/auth/resetpassword", resetpasswordRouter);
app.use("/auth/forgetpassword", forgetpasswordRouter);
app.use("/auth/verify", verifyRouter);

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then( () => {
    console.log("Database connected...");

    app.listen(port, () => {
        console.log(`Server is listening on port: ${port}`);
    });
})
.catch( (err) => {
    console.log("Connection fail");
    console.log(err);
});