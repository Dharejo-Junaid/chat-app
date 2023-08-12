const User = require("../model/User");
const { hash } = require("bcrypt");
const jwt = require("jsonwebtoken");
const { sendEmail } = require("../helper/sendEmail");

const JWT_PRIVATE_KEY = process.env.JWT_SECRET;

const createAccount = async (req, res) => {
    const { username, email, password } = req.body;
    console.log(username, email, password);
    
    if(!username || !email || !password) {
        return res.json({
            status: "fail"
        });
    }

    // if username || email exists;
    let user = await User.findOne({$or: [ {username}, {email} ]}, { username, email: true });
    console.log(user);
    if(user) {

        if(user.email === email) {
            return res.json({
                status: "fail",
                message: "Account already exist"
            });
        }

        return res.json({
            status: "fail",
            message: `${username} is not available`
        });
    }

    // creating hash of the password to store in database;
    const hashPassword = await hash(password, 10);

    const newUser = await User.create({
        username, email, password: hashPassword, isVerified: false
    });

    const { _id } = newUser;
    const token = await jwt.sign({id: _id}, JWT_PRIVATE_KEY, { expiresIn: "15m" });

    const isSent = await sendEmail(email, token);
    if(! isSent) {
        res.json({
            status: "fail",
            message: "Issue in create your account"
        });
    }

    res.json({
        status: "success",
        message: "Account has been created succressfully"
    });
}

module.exports = { createAccount };