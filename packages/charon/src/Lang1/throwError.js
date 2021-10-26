/**
 * @memberof Lang
 * @function throwError
 * @param {String} message
 * @param {String} fileName Non-Standard
 * @param {Number} lineNumber Non-Standard
 * @description throw new Error([message[, fileName[,lineNumber]]])
 */
export const throwError = (message, fileName, lineNumber) => {
	throw new Error(message, fileName, lineNumber);
};