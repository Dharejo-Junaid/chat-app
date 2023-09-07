const { sign, verify } = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

const createToken = (_id) => {
    return sign({ _id }, JWT_SECRET, { expiresIn: "7d" });
}

const verifyToken = (token) => {
    try {
        const payload = verify(token, JWT_SECRET);
        return payload;
    }

    catch(err) {
        return undefined;
    }
}

module.exports = { createToken, verifyToken };