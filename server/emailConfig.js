// emailConfig.js
const nodemailer = require("nodemailer");

// Replace these placeholders with your actual email service details
const transporter = nodemailer.createTransport({
  service: "Gmail", // e.g., 'Gmail', 'Yahoo', 'Outlook'
  auth: {
    user: "ankita8320@gmail.com",
    pass: "uaaejjubsqlqiwyo",
  },
});

module.exports = transporter;
