const nodemailer = require("nodemailer");
const verificationHtml = require("../views/verificationHtml");

const NODEMAILER_EMAIL = process.env.NODEMAILER_EMAIL;
const NODEMAILER_PASSWORD = process.env.NODEMAILER_PASSWORD;

const sendEmail = async (email, token) => {
    
    try{
        const transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: NODEMAILER_EMAIL,
                pass: NODEMAILER_PASSWORD
            }
        });
        
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

// Thank you for verifying your email address with Pied Piper.

module.exports = { sendEmail };