/**
 * @memberof Lang
 * @function throwReferenceError
 * @param {String} message
 * @param {String} fileName Non-Standard
 * @param {Number} lineNumber Non-Standard
 * @description throw new ReferenceError([message[, fileName[,lineNumber]]])
 */
export const throwReferenceError = (message, fileName, lineNumber) => {
	throw new ReferenceError(message, fileName, lineNumber);
};