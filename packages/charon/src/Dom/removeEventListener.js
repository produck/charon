/** @requires module:Type */

/**
 * removeEventListener
 * @function
 * @param {HTMLElement} element
 * @param {string} event
 * @param {requestCallback} listener
 */
export const removeEventListener = (element, event, listener) => {
	element.removeEventListener(event, listener);
};
