import { isFunction } from '../Is/isFunction.js';

/**
 * determines whether a operand is not function
 *
 * @param {any} operand
 * @returns {boolean}
 */
export const isNotFunction = operand => !isFunction(operand);