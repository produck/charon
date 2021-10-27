import { throwError } from './throwError.js';

/**
 * throw new URIError(message)
 * @function
 * @param {string} message
 */
export const throwURIError = (message) => throwError(message, URIError);