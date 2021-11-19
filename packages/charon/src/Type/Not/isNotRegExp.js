import { isRegExp } from '../Is/isRegExp.js';

/**
 * determines whether a operand is not RegExp
 *
 * @param {any} operand
 * @returns {boolean}
 */
export const isNotRegExp = operand => !isRegExp(operand);