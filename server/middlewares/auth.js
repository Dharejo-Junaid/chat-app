const jwt = require("jsonwebtoken");
const { verifyToken } = require("../helper/token");

const JWT_SECRET = process.env.JWT_SECRET;

const auth = async (req, res, next) => {

    if(req.cookies?.token) {
        const { _id } = verifyToken(token);

        if(_id) {
            req._id = _id;
            return next();
        }
    }

    return res.json({
        status: "fail",
        message: "token not found"
    });
}

module.exports = auth;