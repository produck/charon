import { isBoolean } from '../Is/isBoolean.js';

/**
 * determines whether a operand is not boolean
 * @function
 * @param {any} operand
 * @returns {boolean}
 */
export const isNotBoolean = operand => !isBoolean(operand);