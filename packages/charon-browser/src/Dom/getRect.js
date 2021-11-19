/**
 * Returns a DOMRect object providing information about the size of an element and its position relative to the viewport
 *
 * @param {HTMLElement} element
 * @returns {DOMRect}
 */
export const getRect = element => element.getBoundingClientRect();