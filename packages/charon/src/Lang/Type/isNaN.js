/**
 * determines whether a operand is NaN or not
 * @memberof Lang.Type
 * @function isNaN
 * @param {operand} operand
 * @returns {Boolean}
 */
export const isNaN = (operand) => {
	return !(operand === operand);
}