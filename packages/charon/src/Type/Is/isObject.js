import { typeOfEquel } from '../../Lang/typeOfEquel.js';

/**
 * determines whether a operand is object or not
 * @function
 * @param {any} operand
 * @returns {boolean}
 */
export const isObject = operand => typeOfEquel(operand, 'object');