import { throwError } from './throwError.js';

/**
 * throw new ReferenceError(message)
 * @function
 * @param {string} message
 */
export const throwReferenceError = (message) => throwError(message, ReferenceError);