import { stopPropagation } from './stopPropagation.js';
import { preventDefault } from './preventDefault.js';

/**
 * @param {HTMLElement} event
 */
export const stopAndPrevent = event => {
	stopPropagation(event);
	preventDefault(event);
};