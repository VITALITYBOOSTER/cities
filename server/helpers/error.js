class ErrorHandler extends Error {
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
    }
}

const errorHandler = (err, req, res, next)  => { 


    next();
}

export default ErrorHandler;