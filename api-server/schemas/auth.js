const signin = {
    type: 'object',
    required: ['email', 'password'],
    properties: {
        email: {
            type: 'string',
            format: 'email',
            errorMessage: {
                format: "Field 'email' incorrect",
                type: "Field 'email' should be a string",
            },
        },
        password: {
            type: 'string',
            errorMessage: {
                type: "Field 'password' should be a string",
            },
        },
    },
};

const signup = {
    type: 'object',
    required: ['email', 'name'],
    properties: {
        email: {
            type: 'string',
            format: 'email',
            errorMessage: {
                format: "Field 'email' incorrect",
                type: "Field 'email' should be a string",
            },
        },
        name: {
            type: 'string',
            minLength: 2,
            maxLength: 30,
            pattern: '^[a-zA-Z0-9_ ]*$',
            errorMessage: {
                pattern: "Field 'name' can contain only letters and spaces",
                type: "Field 'name' should be a string",
            },
        },
    },
};

const requestNumberVerificationCode = {
    type: 'object',
    required: ['phoneNumber'],
    properties: {
        phoneNumber: {
            type: 'string',
            pattern: '/^[+]92\d{10}$/',
            errorMessage: {
                pattern:
                    "Field 'Phone Number' must contain +92 and then 10 digits",
                type: "Field 'Phone Number' should be a string",
            },
        },
    },
};

const verifyNumber = {
    type: 'object',
    required: ['phoneNumber', 'code'],
    properties: {
        phoneNumber: {
            type: 'string',
            pattern: '/^[+]92\d{10}$/',
            errorMessage: {
                pattern:
                    "Field 'Phone Number' must contain +92 and then 10 digits",
                type: "Field 'Phone Number' should be a string",
            },
        },
        code: {
            type: 'string',
            pattern: '/^\d{4}$/',
            errorMessage: {
                pattern: "Field 'code' must be 4 digit number",
                type: "Field 'code' should be a string",
            },
        },
    },
};

export default {
    signin,
    signup,
    requestNumberVerificationCode,
    verifyNumber,
};
