import { throwError } from './throwError.js';

/**
 * throw new SyntaxError(message)
 * @function
 * @param {string} message
 */
export const throwSyntaxError = (message) => throwError(message, SyntaxError);