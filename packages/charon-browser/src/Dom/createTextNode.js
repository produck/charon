import { DOCUMENT } from './constant.js';

/**
 * Creates a new Text node
 *
 * @param {string} data
 * @returns {Text}
 */
export const createTextNode = data => DOCUMENT.createTextNode(data);