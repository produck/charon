import { isNumber } from '../Is/isNumber.js';

/**
 * determines whether a operand is not number
 * @function
 * @param {any} operand
 * @returns {boolean}
 */
export const isNotNumber = operand => !isNumber(operand);