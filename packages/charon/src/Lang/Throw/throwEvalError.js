/**
 * throw new EvalError(message)
 * @memberof Lang.Throw
 * @function throwEvalError
 * @param {String} message
 */
export const throwEvalError = (message) => {
	throw new EvalError(message);
};