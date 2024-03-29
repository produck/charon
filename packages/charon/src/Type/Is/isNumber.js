import { typeOfEquel } from '../../Lang/typeOfEquel.js';

/**
 * determines whether a operand is number or not
 * @function
 * @param {any} operand
 * @returns {boolean}
 */
export const isNumber = operand => typeOfEquel(operand, 'number');