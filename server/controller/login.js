const User = require("../model/User");
const jwt = require("jsonwebtoken");
const { compare } = require("bcrypt");


const JWT_SECRET = process.env.JWT_SECRET;

const userLogin = async (req, res) => {
    const { username, password } = req.body;

    if(!username || !password) {
        return res.json({
            satus: "fail",
            message: "username and password are required"
        });
    }

    const user = await User.findOne({username});
    if(! user) {
        return res.json({
            status: "fail",
            message: `${username} does not exists`
        });
    }

    if(! await compare(password, user.password) ) {
        return res.json({
            status: "fail",
            message: "Incorrect password"
        });
    }

    if(! user.isVerified) {
        return res.json({
            status: "fail",
            message: "Account is not verified"
        });
    }

    const { _id } = user;
    const token = await jwt.sign({ _id }, JWT_SECRET, { expiresIn: "15m" });

    res.cookie("token", `Bearer ${token}`, { expiresIn: "15m", httpOnly: true })
    .json({
        status: "success"
    });
}

module.exports = { userLogin };