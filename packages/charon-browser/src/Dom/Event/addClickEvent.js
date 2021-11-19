import { addEventListener } from '../addEventListener.js';
/**
 * @param {HTMLElement} element
 * @param {EventListenerOrEventListenerObject} listener
 */
export const addClickEvent = (element, listener) => {
	addEventListener(element, 'click', listener);
};