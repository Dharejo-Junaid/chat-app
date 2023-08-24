// url => http://localhost:5173/auth/login

const verificationSuccessHtml = (url) => {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Account Verified</title>
        <style>
        body {
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f4f4f4;
            color: #333;
            transition: background-color 0.3s, color 0.3s;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            margin-top: 30px;
            padding: 20px;
            background-color: #ffffff;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            transition: background-color 0.3s;
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
        .message {
            text-align: center;
            margin-top: 30px;
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
        /* Dark mode styles */
        @media (prefers-color-scheme: dark) {
            body {
            background-color: #333;
            color: #eee;
            }
            .container {
            background-color: #444;
            }
        }
        </style>
        </head>
        <body>
        <div class="container">
            <div class="header">
            <div class="logo">
                <img src="../views/logo.png" alt="Pied Piper Logo">
            </div>
            <h2>Account Verified</h2>
            </div>
            <div class="message">
            <p>Thank you for verifying your email address with Pied Piper.</p>
            <div class="verification-link">
            <a href=${url}>Back to Login</a>
            </div>
            </div>
        </div>
        </body>
        </html>
    `;
}

module.exports = verificationSuccessHtml;