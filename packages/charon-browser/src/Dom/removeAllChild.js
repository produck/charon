import { removeChild } from './removeChild.js';

/**
 * removes all child node of a DOM and returns the removed node List
 *
 * @param {HTMLElement} element
 * @returns {HTMLElement[]}
 */
export const removeAllChild = (element) => {
	return Array
		.from(element.childNodes)
		.map(childElement => removeChild(element, childElement));
};