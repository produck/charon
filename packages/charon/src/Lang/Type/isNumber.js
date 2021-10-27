import { typeOfEquel } from '../typeOfEquel.js';

/**
 * determines whether a operand is number or not
 * @function
 * @param {any} operand
 * @returns {boolean}
 */
export const isNumber = (operand) => {
	return typeOfEquel(operand, 'number');
};