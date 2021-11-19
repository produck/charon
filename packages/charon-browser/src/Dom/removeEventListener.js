/**
 * @param {HTMLElement} element
 * @param {string} event
 * @param {EventListenerOrEventListenerObject} listener
 */
export const removeEventListener = (element, event, listener) => {
	element.removeEventListener(event, listener);
};
