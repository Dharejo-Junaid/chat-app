const User = require("../models/user");
const { sign } = require("jsonwebtoken");
const { sendResetPasswordEmail } = require("../helper/sendEmail");

const JWT_SECRET = process.env.JWT_SECRET;

const forgetpassword = async (req, res) => {
    const { email } = req.body;

    if(!email) return res.json({
        status: "fail",
        message: "Email is required"
    });

    const user = await User.findOne({email}, {email: true});

    if(!user) return res.json({
        status: "fail",
        message: "Account does not exist"
    });

    // get id;
    let { _id } = user;
    _id = String(_id);

    const token = sign({_id}, JWT_SECRET, { expiresIn: "2d" });
    const isSent = await sendResetPasswordEmail(email, token);
    if(!isSent) return res.json({
        status: "fail",
        message: "Issue in sending email, please try after a while."
    });

    res.json({
        status: "success",
        message: "Email has been sent to reset the password"
    });
}

module.exports = forgetpassword;