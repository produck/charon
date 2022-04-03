/**
 * @param {HTMLElement} parentElement
 * @param {HTMLElement} newChild
 * @param {HTMLElement} refChild
 */
export const insertBefore = (parentElement, newChild, refChild) => {
	return parentElement.insertBefore(newChild, refChild);
};
