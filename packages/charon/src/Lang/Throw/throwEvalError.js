import { throwError } from './throwError.js';

/**
 * throw new EvalError(message)
 * @function
 * @param {string} message
 */
export const throwEvalError = (message) => throwError(message, EvalError);