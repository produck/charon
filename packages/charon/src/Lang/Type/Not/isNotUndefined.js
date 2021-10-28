import { isUndefined } from '../Is/isUndefined.js';

/**
 * determines whether a operand is not undefined
 * @function
 * @param {any} operand
 * @returns {boolean}
 */
export const isNotUndefined = operand => !isUndefined(operand);