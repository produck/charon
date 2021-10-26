import { typeOfEquel } from "../typeOfEquel.js";

/**
 * determines whether a operand is number or not
 * @memberof Lang.Type
 * @function isNumber
 * @param {operand} operand
 * @returns {Boolean}
 */
export const isNumber = (operand) => {
	return typeOfEquel(operand, 'number');
}