import { getClassList } from './getClassList.js';

/**
 * Add the given tokens to the classList
 *
 * @param {HTMLElement} element
 * @param  {string[]} tokens
 */
export const addClass = (element, ...tokens) => {
	getClassList(element).add(...tokens);
};