import { addEventListener } from '../Dom/addEventListener.js';
/**
 * @param {HTMLElement} element
 * @param {EventListenerOrEventListenerObject} listener
 */
export const addClickEvent = (element, listener) => {
	addEventListener(element, 'click', listener);
};