//to handle error if it is not an error manually

export const errorHandler = (statusCode,message)=>{
    const error = new Error()
    error.statusCode = statusCode;
    error.message = message;
    return error;
};