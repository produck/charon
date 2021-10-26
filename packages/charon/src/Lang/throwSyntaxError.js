/**
 * @memberof Lang
 * @function throwSyntaxError
 * @param {String} message
 * @param {String} fileName Non-Standard
 * @param {Number} lineNumber Non-Standard
 * @description throw new SyntaxError([message[, fileName[,lineNumber]]])
 */
export const throwSyntaxError = (message, fileName, lineNumber) => {
	throw new SyntaxError(message, fileName, lineNumber);
};