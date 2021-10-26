/**
 * element.addEventListener('click', listener)
 * @memberof Dom.Event
 * @function addClickEvent
 * @param {HTMLElement} element
 * @param {function} listener
 */
export const addClickEvent = (element, listener) => {
	element.addEventListener('click', listener);
};