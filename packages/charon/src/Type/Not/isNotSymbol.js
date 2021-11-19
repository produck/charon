import { isSymbol } from '../Is/isSymbol.js';

/**
 * determines whether a operand is not Symbol
 *
 * @param {any} operand
 * @returns {boolean}
 */
export const isNotSymbol = operand => !isSymbol(operand);