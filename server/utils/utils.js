var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function validateEmail(email) {
    return isString(email) && emailRegex.test(email);
}

function isString(value) {
    return typeof value === 'string';
}

function compareStrings(value1, value2) {
    return isString(value1) && isString(value2) && value1 === value2;
}

module.exports = exports = {
    validateEmail,
    isString,
    compareStrings
};
