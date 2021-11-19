import { isBigInt } from '../Is/isBigInt.js';

/**
 * determines whether a operand is not BigInt
 *
 * @param {any} operand
 * @returns {boolean}
 */
export const isNotBigInt = operand => !isBigInt(operand);