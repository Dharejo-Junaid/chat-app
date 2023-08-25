const nodemailer = require("nodemailer");
const verificationHtml = require("../views/verificationHtml");
const resetPasswordHtml = require("../views/resetPasswordHtml");

const NODEMAILER_EMAIL = process.env.NODEMAILER_EMAIL;
const NODEMAILER_PASSWORD = process.env.NODEMAILER_PASSWORD;

const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: NODEMAILER_EMAIL,
        pass: NODEMAILER_PASSWORD
    }
});

const sendEmail = async (email, token) => {
    
    try{
        
        const res = await transporter.sendMail({
            from: NODEMAILER_EMAIL,
            to: email,
            subject: "Verification Email",
            html: verificationHtml(`http://localhost:5000/auth/verify/${token}`)
        });

        return true;
    }

    catch(err) {
        return false;
    } 
}

const sendResetPasswordEmail = async (email, token) => {
    try{
        
        const res = await transporter.sendMail({
            from: NODEMAILER_EMAIL,
            to: email,
            subject: "Reset your password",
            html: resetPasswordHtml(`http://localhost:5173/auth/resetpassword/${token}`)
        });

        return true;
    }

    catch(err) {
        return false;
    } 
}

module.exports = { sendEmail, sendResetPasswordEmail };