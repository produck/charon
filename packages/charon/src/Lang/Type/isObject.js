import { typeOfEquel } from '../typeOfEquel.js';

/**
 * determines whether a operand is object or not
 * @function
 * @param {any} operand
 * @returns {boolean}
 */
export const isObject = (operand) => {
	return typeOfEquel(operand, 'object');
};