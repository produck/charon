import { isNull } from '../Is/isNull.js';

/**
 * determines whether a operand is not null
 * @function
 * @param {any} operand
 * @returns {boolean}
 */
export const isNotNull = operand => !isNull(operand);