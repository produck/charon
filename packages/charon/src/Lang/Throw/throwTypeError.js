import { throwError } from './throwError.js';

/**
 * throw new TypeError(message)
 * @function
 * @param {string} message
 */
export const throwTypeError = (message) => throwError(message, TypeError);