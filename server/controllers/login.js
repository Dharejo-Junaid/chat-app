const User = require("../models/user");
const jwt = require("jsonwebtoken");
const { compare } = require("bcrypt");
const { sendEmail } = require("../helper/sendEmail");

const JWT_SECRET = process.env.JWT_SECRET;

const userLogin = async (req, res) => {
    const { email, password } = req.body;

    if(!email || !password) {
        return res.json({
            satus: "fail",
            message: "username and password are required"
        });
    }

    const user = await User.findOne({email});
    if(! user) {
        return res.json({
            status: "fail",
            message: "Account does not exists"
        });
    }

    if(! await compare(password, user.password) ) {
        return res.json({
            status: "fail",
            message: "Incorrect password"
        });
    }

    // generate token;
    const { _id } = user;
    const token = jwt.sign({ _id }, JWT_SECRET, { expiresIn: "15m" });

    if(! user.isVerified) {

        await sendEmail(user.email, token);

        return res.json({
            status: "fail",
            message: "Account is not verified"
        });
    }

    res.cookie("token", token, { expiresIn: "15m", httpOnly: true })
    .json({
        status: "success",
        message: "Loged in successfully"
    });
}

module.exports = { userLogin };