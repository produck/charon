/**
 * throw new Error(message)
 * @function
 * @param {string} message
 * @param {function} ErrorType Error constructor
 */
export const throwError = (message, ErrorType = Error) => {
	throw new ErrorType(message);
};