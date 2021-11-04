import { isNaN } from '../Is/isNaN.js';

/**
 * determines whether a operand is not NaN
 * @function
 * @param {any} operand
 * @returns {boolean}
 */
export const isNotNaN = operand => !isNaN(operand);