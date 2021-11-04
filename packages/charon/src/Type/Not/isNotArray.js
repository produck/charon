import { isArray } from '../Is/isArray.js';

/**
 * determines whether a operand is not array
 * @function
 * @param {any} operand
 * @returns {boolean}
 */
export const isNotArray = operand => !isArray(operand);