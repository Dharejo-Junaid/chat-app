const { verify } = require("jsonwebtoken");
const User = require("../models/user");
const verificationSuccessHtml = require("../views/verificationSuccessHtml");

const JWT_SECRET = process.env.JWT_SECRET;

const verifyUser = async (req, res) => {
    const { token } = req.params;

    // verify token and grab id;
    try{
        const payload = verify(token, JWT_SECRET);
        const { _id } = payload;

        if(!_id) throw Error();

        // update user account to verified=true;
        await User.findByIdAndUpdate(_id, {isVerified: true});
        res.send(verificationSuccessHtml("http://localhost:5173/auth/login"));
    }

    // in case verification fails;
    catch(err) {
        return res.json({
            status: "fail",
            message: "Unable to authenticate the user"
        });
    }
}

module.exports = { verifyUser };