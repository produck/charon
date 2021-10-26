import { typeOfEquel } from "../typeOfEquel.js";

/**
 * @memberof Type
 * @function isNumber
 * @param {operand} operand
 * @returns {Boolean} result
 * @description determines whether a operand is number or not
 */
export const isNumber = (operand) => {
	return typeOfEquel(operand, 'number');
}