import { typeOfEquel } from '../typeOfEquel.js';

/**
 * determines whether a operand is string or not
 * @function
 * @param {any} operand
 * @returns {boolean}
 */
export const isString = (operand) => {
	return typeOfEquel(operand, 'string');
};