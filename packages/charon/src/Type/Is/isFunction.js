import { typeOfEquel } from '../../Lang/typeOfEquel.js';

/**
 * determines whether a operand is function or not
 *
 * @param {any} operand
 * @returns {boolean}
 */
export const isFunction = operand => typeOfEquel(operand, 'function');