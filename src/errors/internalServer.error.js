const BaseError = require('./base.error');
const {StatusCodes} = require('http-status-codes');

class internalServerError extends BaseError {
    constructor(details){
        super("Internal Server Error",StatusCodes.INTERNAL_SERVER_ERROR,
        `Something Went Wrong!`,
        details);
    }
}

module.exports = internalServerError;