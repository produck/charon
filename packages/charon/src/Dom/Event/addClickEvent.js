/**
 * element.addEventListener('click', listener)
 * @function
 * @param {HTMLElement} element
 * @param {function} listener
 */
export const addClickEvent = (element, listener) => {
	element.addEventListener('click', listener);
};