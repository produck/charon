import { DOCUMENT } from './constant.js';

/**
 * @param {string} tagName
 */
export const createElement = (tagName) => {
	return DOCUMENT.createElement(tagName);
};