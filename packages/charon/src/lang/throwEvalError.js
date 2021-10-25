/**
 * @memberof Lang
 * @function throwEvalError
 * @param {String} message
 * @param {String} fileName Non-Standard
 * @param {Number} lineNumber Non-Standard
 * @description throw new EvalError([message[, fileName[,lineNumber]]])
 */
export const throwEvalError = (message, fileName, lineNumber) => {
	throw new EvalError(message, fileName, lineNumber);
};