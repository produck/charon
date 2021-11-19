/**
 * @param {HTMLElement} element
 * @param {string} event
 * @param {EventListenerOrEventListenerObject} listener
 */
export const addEventListener = (element, event, listener) => {
	element.addEventListener(event, listener);
};