import { typeOfEquel } from '../../Lang/typeOfEquel.js';

/**
 * determines whether a operand is string or not
 * @function
 * @param {any} operand
 * @returns {boolean}
 */
export const isString = operand => typeOfEquel(operand, 'string');