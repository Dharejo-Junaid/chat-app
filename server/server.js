const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

const signupRoute = require("./routes/auth/signup");
const loginRoute = require("./routes/auth/login");

const port = process.env.PORT || 5000;
const URI = process.env.MONGODB_URI;

app.use(express.json());

app.use("/auth/signup", signupRoute);
app.use("/auth/login", loginRoute);

app.get("/", (req, res) => {
    res.send("Hello: This is server");
});

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