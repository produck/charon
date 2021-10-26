/** @requires module:Type */

/**
 * removeEventListener
 * @memberof Dom
 * @function removeEventListener
 * @param {HTMLElement} element
 * @param {string} event
 * @param {requestCallback} listener
 */
export const removeEventListener = (element, event, listener) => {
	element.removeEventListener(event, listener);
};
