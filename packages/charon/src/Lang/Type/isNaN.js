/**
 * @memberof Type
 * @function isNaN
 * @param {operand} operand
 * @returns {Boolean} result
 * @description determines whether a operand is NaN or not
 */
export const isNaN = (operand) => {
	return !(operand === operand);
}