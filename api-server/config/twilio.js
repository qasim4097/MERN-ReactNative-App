var dotenv = require('dotenv');
var path = require('path');

const root = path.join.bind(this, __dirname, '../');
dotenv.config({ path: root('.env') });

module.exports = {
    accountSID: process.env.ACCOUNT_SID,
    authToken: process.env.AUTH_TOKEN,
    verifyService: process.env.VERIFY_SERVICE,
};
