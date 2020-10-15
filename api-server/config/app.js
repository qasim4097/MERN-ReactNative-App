var dotenv = require('dotenv');
var path = require('path');

const root = path.join.bind(this, __dirname, '../');
dotenv.config({ path: root('.env') });

module.exports = {
    port: process.env.PORT,
};
