import { getClassList } from './getClassList.js';

/**
 * Remove class from classList
 *
 * @param {HTMLElement} element
 * @param  {string[]} tokens
 */
export const removeClass = (element, ...tokens) => {
	getClassList(element).remove(...tokens);
};