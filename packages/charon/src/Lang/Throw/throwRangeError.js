import { throwError } from './throwError.js';

/**
 * throw new RangeError(message)
 * @function
 * @param {string} message
 */
export const throwRangeError = (message) => throwError(message, RangeError);