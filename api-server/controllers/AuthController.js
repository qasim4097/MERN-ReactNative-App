const UserModel = require('../models/User');
const PasswordService = require('../services/PasswordService');
const ClientError = require('../exceptions/ClientError');
const TryCatchErrorDecorator = require('../decorators/TryCatchErrorDecorator');
const TokenService = require('../services/TokenService');
const AppError = require('../exceptions/AppError');
const twilioConfig = require('../config/twilio');

const twilio = require('twilio')(
    twilioConfig.accountSID,
    twilioConfig.authToken,
);

class AuthController {
    // @TryCatchErrorDecorator
    // static async signin(req, res) {}

    // @TryCatchErrorDecorator
    // static async signup(req, res) {}

    @TryCatchErrorDecorator
    static async requestVerificationCode(req, res) {
        const { phoneNumber } = req.body;
        twilio.verify
            .services(twilioConfig.verifyService)
            .verifications.create({
                to: phoneNumber,
                channel: 'sms',
            })
            .then((response) => {
                res.json({ status: 'Code successfully sent' });
            })
            .catch((err) => {
                throw new ClientError('Failed to send message', 401);
            });
    }

    @TryCatchErrorDecorator
    static async verificationCheck(req, res) {
        const { phoneNumber, code } = req.body;
        twilio.verify
            .services(twilioConfig.verifyService)
            .verificationChecks.create({
                to: phoneNumber,
                code,
            })
            .then((check) => {
                res.json({ status: 'Verified' });
            })

            .catch((err) => {
                throw new ClientError(
                    'Phone Number could not be verified',
                    401,
                );
            });
    }
}

module.exports = AuthController;
