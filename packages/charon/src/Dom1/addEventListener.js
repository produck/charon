/**
 * addEventListener
 * @memberof Dom
 * @function addEventListener
 * @param {HTMLElement} element
 * @param {string} event
 * @param {function} listener
 */
export const addEventListener = (element, event, listener) => {
	element.addEventListener(event, listener);
};