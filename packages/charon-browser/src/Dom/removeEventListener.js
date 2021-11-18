/**
 * @param {HTMLElement} element
 * @param {string} event
 * @param {function} listener
 */
export const removeEventListener = (element, event, listener) => {
	element.removeEventListener(event, listener);
};
