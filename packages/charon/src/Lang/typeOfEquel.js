import { typeOf } from './typeOf.js';

/**
 * return typeof operand === type
 * @function
 * @param {operand} operand
 * @param {string} type
 * @returns {Boolean}
 */
export const typeOfEquel = (operand, type) => {
	return typeOf(operand) === type;
};