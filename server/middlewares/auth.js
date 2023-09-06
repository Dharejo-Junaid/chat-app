const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;

const auth = async (req, res, next) => {
    
    try {
        if(req.cookies?.token) {

            const { _id } = jwt.verify(token, JWT_SECRET);

            if(token &&  _id) {
                req._id = _id;
                return next();
            }
        }

        res.redirect("/auth/login");
    }

    catch(err) {
        res.redirect("/auth/login");
    }
}

module.exports = auth;