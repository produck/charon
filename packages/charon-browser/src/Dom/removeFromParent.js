import { removeChild } from './removeChild.js';

/**
 * Removes itself from its parent Node and returns the removed node
 * @param {HTMLElement} element
 * @returns {HTMLElement}
 */
export const removeFromParent = element => removeChild(element.parentElement, element);