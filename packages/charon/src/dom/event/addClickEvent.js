/**
 * @memberof Dom.Event
 * @function addClickEvent
 * @param {HTMLElement} element
 * @param {function} listener
 * @description element.addEventListener('click', listener)
 */
export const addClickEvent = (element, listener) => {
	element.addEventListener('click', listener);
};