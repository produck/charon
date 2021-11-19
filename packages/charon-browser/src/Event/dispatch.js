/**
 * Sends an Event to the object
 *
 * @param {HTMLElement} element
 * @param {Event} event
 */
export const dispatch = (element, event) => {
	element.dispatchEvent(event);
};