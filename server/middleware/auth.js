const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;

const auth = async (req, res, next) => {
    
    if(req.cookies?.token) {
        let token = req.cookies.token.split(" ");
        if(token.length == 2) {
            if( await jwt.verify(token[1], JWT_SECRET) ) {
                return next();
            }
        }
    }

    res.redirect("/auth/login");
}

module.exports = auth;