const paypal = require('paypal-rest-sdk');

paypal.configure({
    mode: "sandbox",
    client_id :  process.env.PAYMENT_KEY_ID,
    client_secret: process.env.PAYMENT_SECRET_KEY,
});

module.exports = paypal;