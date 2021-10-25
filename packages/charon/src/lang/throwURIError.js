/**
 * @memberof Lang
 * @function throwURIError
 * @param {String} message
 * @param {String} fileName Non-Standard
 * @param {Number} lineNumber Non-Standard
 * @description throw new URIError([message[, fileName[,lineNumber]]])
 */
export const throwURIError = (message, fileName, lineNumber) => {
	throw new URIError(message, fileName, lineNumber);
};