import { typeOfEquel } from "../typeOfEquel.js";

/**
 * @memberof Type
 * @function isBoolean
 * @param {operand} operand
 * @returns {Boolean} result
 * @description determines whether a operand is boolean or not
 */
export const isBoolean = (operand) => {
	return typeOfEquel(operand, 'boolean');
}