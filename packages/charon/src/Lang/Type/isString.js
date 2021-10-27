import { typeOfEquel } from "../typeOfEquel.js";

/**
 * determines whether a operand is string or not
 * @function
 * @param {operand} operand
 * @returns {Boolean}
 */
export const isString = (operand) => {
	return typeOfEquel(operand, 'string');
}