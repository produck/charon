import { typeOf } from './typeOf.js';

/**
 * @memberof Lang
 * @function typeOfEquel
 * @param {operand} operand
 * @param {string} type
 * @returns {Boolean} result
 * @description return typeof(operand)
 */
export const typeOfEquel = (operand, type) => {
	return typeOf(operand) === type;
};