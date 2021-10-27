/**
 * return object instanceof constructor
 * @function
 * @param {object} object
 * @param {function} constructor
 */
export const instanceOf = (object, constructor) => {
	return object instanceof constructor;
};