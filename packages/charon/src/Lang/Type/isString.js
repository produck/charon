import { typeOfEquel } from "../typeOfEquel.js";

/**
 * @memberof Type
 * @function isString
 * @param {operand} operand
 * @returns {Boolean} result
 * @description determines whether a operand is string or not
 */
export const isString = (operand) => {
	return typeOfEquel(operand, 'string');
}