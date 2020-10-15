const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');
const Validate = require('../middleware/Validate');
const Authorize = require('../middleware/Authorize');
const authSchemas = require('../schemas/auth');

// const twilio = require('twilio')(
//     config.twilio.accountSID,
//     config.twilio.authToken,
// );

// const verifications = async (phoneNumber, res) => {
//     return twilio.verify
//         .services(config.twilio.verifyService)
//         .verifications.create({
//             to: phoneNumber,
//             channel: 'sms',
//         })
//         .then((response) => {
//             console.log(response);
//             res.send('Code successfully sent');
//             return Promise.resolve(response);
//         })
//         .catch((err) => {
//             console.log(err);
//             res.status(400).send({ err: 'failed' });
//             return Promise.reject(err);
//         });
// };

// const verificationCheck = async (phoneNumber, code, res) => {
//     return twilio.verify
//         .services(config.twilio.verifyService)
//         .verificationChecks.create({
//             to: phoneNumber,
//             code,
//         })
//         .then((check) => {
//             res.send('Verified');
//             Promise.resolve(check);
//         })

//         .catch((err) => {
//             res.status(400).send({ err: err });
//             Promise.reject(err);
//         });
// };

router.post(
    '/request-verification-code',
    Validate.prepare(authSchemas.requestNumberVerificationCode),
    AuthController.requestVerificationCode,
);

router.post(
    '/verification-check',
    Validate.prepare(authSchemas.verifyNumber),
    AuthController.verifyNumber,
);

module.exports = router;
