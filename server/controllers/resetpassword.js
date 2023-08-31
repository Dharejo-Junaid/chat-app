const jwt = require("jsonwebtoken");
const User = require("../models/user");

const JWT_SECRET = process.env.JWT_SECRET;

const resetpassword = async (req, res) => {
    const { token, password } = req.body;

    if(! token) return res.json({
        status: "fail",
        message: "Inssue in changing the password"
    });

    try {
        const verify = jwt.verify(token, JWT_SECRET);
        // TODO: reset password;
        // get _id from token and change to given password;
    }

    catch(err) {
        return res.json({
            status: "fail",
            message: "Inssue in changing the password"
        });
    }
}

module.exports = resetpassword;