/**
 * @memberof Throw
 * @function throwEvalError
 * @param {String} message
 * @description throw new EvalError(message)
 */
export const throwEvalError = (message) => {
	throw new EvalError(message);
};