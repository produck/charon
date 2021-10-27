import { typeOfEquel } from "../typeOfEquel.js";

/**
 * determines whether a operand is number or not
 * @function
 * @param {operand} operand
 * @returns {Boolean}
 */
export const isNumber = (operand) => {
	return typeOfEquel(operand, 'number');
}