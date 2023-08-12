const nodemailer = require("nodemailer");

const NODEMAILER_EMAIL = process.env.NODEMAILER_EMAIL;
const NODEMAILER_PASSWORD = process.env.NODEMAILER_PASSWORD;

const sendEmail = async (email, token) => {
    
    const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: NODEMAILER_EMAIL,
            pass: NODEMAILER_PASSWORD
        }
    });

    const res = await transporter.sendMail({
        from: NODEMAILER_EMAIL,
        to: "juanid76354763786ghjhgrjhgnjhgjhghjkhjk78Ali@m",
        subject: "Verification Email",
        html: "<h1>Click me !!!</h1>"
    });

    console.log(res);

    return true;
}

module.exports = { sendEmail };