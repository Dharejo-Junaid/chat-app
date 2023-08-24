const User = require("../models/user");
const { hash } = require("bcrypt");
const jwt = require("jsonwebtoken");
const { sendEmail } = require("../helper/sendEmail");

const JWT_PRIVATE_KEY = process.env.JWT_SECRET;

const createAccount = async (req, res) => {

    const { username, email, password } = req.body;
    console.log("username, email, password = ", username, email, password);
    
    if(!username || !email || !password) {
        return res.json({
            status: "fail",
            message: "username, email and password is required"
        });
    }

    // if email exists;
    let user = await User.findOne({email}, { email: true });
    console.log("User found = ", user);
    if(user) {
        return res.json({
            status: "fail",
            message: "Account already exists"
        });
    }

    // creating hash of the password to store in database;
    const hashPassword = await hash(password, 10);

    const newUser = await User.create({
        username, email, password: hashPassword, isVerified: true
    });

    const { _id } = newUser;
    const token = await jwt.sign({id: _id}, JWT_PRIVATE_KEY, { expiresIn: "15m" });

    const isSent = await sendEmail(email, token);
    if(! isSent) {

        console.log("Delete = ", await User.findByIdAndDelete(_id));

        res.json({
            status: "fail",
            message: "Issue in create your account"
        });
    }

    res.json({
        status: "success",
        message: "Account has been created succressfully,\nPlease verify your email"
    });
}

module.exports = { createAccount };