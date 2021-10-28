import { isString } from '../Is/isString.js';

/**
 * determines whether a operand is not string
 * @function
 * @param {any} operand
 * @returns {boolean}
 */
export const isNotString = operand => !isString(operand);