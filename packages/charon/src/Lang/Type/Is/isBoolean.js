import { typeOfEquel } from '../../typeOfEquel.js';

/**
 * determines whether a operand is boolean or not
 * @function
 * @param {any} operand
 * @returns {boolean}
 */
export const isBoolean = (operand) => {
	return typeOfEquel(operand, 'boolean');
};