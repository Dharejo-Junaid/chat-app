const User = require("../models/user");
const { hash, compare } = require("bcrypt");
const verificationSuccessHtml = require("../views/verificationSuccessHtml");
const { 
    sendEmail, sendResetPasswordEmail
} = require("../helper/sendEmail");
const { createToken, verifyToken } = require("../helper/token");

const JWT_SECRET = process.env.JWT_SECRET;


const signup = async (req, res) => {

    const { username, email, password } = req.body;
    
    if(!username || !email || !password) return res.json({
        severity: "error",
        message: "username, email and password is required"
    });

    // if email exists;
    let user = await User.findOne({email}, { email: true });
    if(user) return res.json({
        severity: "error",
        message: "Account already exists"
    });
    
    // creating hash of the password to store in database;
    const hashPassword = await hash(password, 10);

    const newUser = await User.create({
        username, email, password: hashPassword
    });

    // generate token;
    const { _id } = newUser;
    const token = createToken(_id);

    // send email
    const isSent = await sendEmail(email, token);

    if(! isSent) {    
        await User.findByIdAndDelete(_id);

        return res.json({
            severity: "error",
            message: "Issue in create your account"
        });
    }

    res.json({
        severity: "info",
        message: "Account has been created succressfully, Please verify your email" 
    });
}


const login = async (req, res) => {
    const { email, password } = req.body;

    if(!email || !password) {
        return res.json({
            severity: "error",
            message: "username and password are required"
        });
    }

    const user = await User.findOne({email});
    if(! user) {
        return res.json({
            severity: "error",
            message: "Account does not exists"
        });
    }

    if(! await compare(password, user.password) ) {
        return res.json({
            severity: "error",
            message: "Incorrect password"
        });
    }

    // generate token;
    const { _id } = user;
    const token = createToken(_id);

    if(! user.isVerified) {

        await sendEmail(user.email, token);

        return res.json({
            severity: "error",
            message: "Account is not verified"
        });
    }

    res.cookie("token", token, { expiresIn: "15d", httpOnly: true })
    .json({
        severity: "success",
        message: "Loged in successfully"
    });
}


const forgetPassword = async (req, res) => {
    const { email } = req.body;

    console.log(email);

    if(!email) return res.json({
        severity: "error",
        message: "Email is required"
    });

    const user = await User.findOne({email}, {email: true});

    if(!user) return res.json({
        severity: "error",
        message: "Account does not exist"
    });

    // generate token;
    const { _id } = user;
    const token = createToken(_id);

    // send email to change password;
    const isSent = await sendResetPasswordEmail(email, token);
    if(!isSent) return res.json({
        severity: "error",
        message: "Issue in sending email, please try after a while."
    });

    res.json({
        severity: "info",
        message: "Email has been sent to reset the password"
    });
}


const resetPassword = async (req, res) => {
    const { token, password } = req.body;

    if(! token) return res.json({
        severity: "error",
        message: "Inssue in changing the password"
    });

    try {
        const verify = verifyToken(token);
        // TODO: reset password;
        // get _id from token and change to given password;
    }

    catch(err) {
        return res.json({
            severity: "error",
            message: "Inssue in changing the password"
        });
    }
}


const verifyAccount = async (req, res) => {
    const { token } = req.params;
    console.log({token});

    // verify token and grab id;
    try{
        const { _id } = verifyToken(token);
        if(!_id) throw Error();

        // update user account to verified=true;
        await User.findByIdAndUpdate(_id, {isVerified: true});
        res.send(verificationSuccessHtml("http://localhost:5173/auth/login"));
    }

    // in case verification fails;
    catch(err) {
        return res.json({
            severity: "error",
            message: "Unable to authenticate the user"
        });
    }
}


module.exports = { signup, login, forgetPassword, resetPassword, verifyAccount };