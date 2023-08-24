const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const signupRouter = require("./routers/auth/signup");
const loginRouter = require("./routers/auth/login");
const resetpassword = require("./routers/auth/resetpassword");

const port = process.env.PORT || 5000;
const URI = process.env.MONGODB_URI;

app.use(express.json());
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
    credentials: true
}));

app.use("/auth/signup", signupRouter);
app.use("/auth/login", loginRouter);
app.use("/auth/resetpassword", resetpassword);

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
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