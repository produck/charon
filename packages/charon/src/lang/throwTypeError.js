/**
 * @memberof Lang
 * @function throwTypeError
 * @param {String} message
 * @param {String} fileName Non-Standard
 * @param {Number} lineNumber Non-Standard
 * @description throw new TypeError([message[, fileName[,lineNumber]]])
 */
export const throwTypeError = (message, fileName, lineNumber) => {
	throw new TypeError(message, fileName, lineNumber);
};