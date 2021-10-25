/**
 * @memberof Lang
 * @function throwRangeError
 * @param {String} message
 * @param {String} fileName Non-Standard
 * @param {Number} lineNumber Non-Standard
 * @description throw new RangeError([message[, fileName[,lineNumber]]])
 */
export const throwRangeError = (message, fileName, lineNumber) => {
	throw new RangeError(message, fileName, lineNumber);
};