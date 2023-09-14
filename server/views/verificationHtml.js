// url like => http://localhost:5000/auth/verify/:token
const verificationHtml = (url) => {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Email Verification</title>
        <style>
        body {
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f4f4f4;
            color: #333;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            margin-top: 30px;
            padding: 20px;
            background-color: #ffffff;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        .header {
            text-align: center;
            margin-bottom: 20px;
        }
        .logo {
            text-align: center;
        }
        .logo img {
            max-width: 150px;
            height: auto;
        }
        .verification-link {
            text-align: center;
            margin-top: 30px;
        }
        .verification-link a {
            display: inline-block;
            padding: 10px 20px;
            background-color: #007bff;
            color: #ffffff;
            text-decoration: none;
            border-radius: 5px;
        }
        .security-info {
            margin-top: 30px;
            padding: 20px;
            border-radius: 5px;
        }
        @media (prefers-color-scheme: dark) {
            body {
            background-color: #333;
            color: #eee;
            }
            .container {
            background-color: #444;
            }
            .security-info {
            background-color: #222;
            }
        }
        </style>
        </head>
        <body>
        <div class="container">
            <div class="header">
            <div class="logo">
                <img src="${__dirname}/logo.png" alt="Pied Piper Logo">
            </div>
            <h2>Email Verification</h2>
            <p>Thank you for choosing Pied Piper for secure chatting. We take your privacy seriously.</p>
            </div>
            <div class="verification-link">
            <a href=${url}>Verify Email</a>
            </div>
            <div class="security-info">
            <h3>Security Information</h3>
            <p>Your conversations are end-to-end encrypted, ensuring that only you and the recipient can read them.</p>
            <p>We use advanced verification methods to protect your account and ensure a safe chatting experience.</p>
            </div>
        </div>
        </body>
        </html>
    `;
}

module.exports = verificationHtml;