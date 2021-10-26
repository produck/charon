import { typeOfEquel } from "../typeOfEquel.js";

/**
 * determines whether a operand is boolean or not
 * @memberof Lang.Type
 * @function isBoolean
 * @param {operand} operand
 * @returns {Boolean}
 */
export const isBoolean = (operand) => {
	return typeOfEquel(operand, 'boolean');
}