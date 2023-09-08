const { verifyToken } = require("../helper/token");

const auth = async (req, res, next) => {
    
    try {
        const token = req.cookies.token;
        const { _id } = verifyToken(token);

        if(_id) {
            req._id = _id;
            return next();
        }
    }

    catch(err) {
        return res.json({
            severity: "error",
            message: "token not found"
        });
    }

    
}

module.exports = auth;