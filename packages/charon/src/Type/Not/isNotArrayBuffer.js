import { isArrayBuffer } from '../Is/isArrayBuffer.js';

/**
 * determines whether a operand is not ArrayBuffer
 *
 * @param {any} operand
 * @returns {boolean}
 */
export const isNotArrayBuffer = operand => !isArrayBuffer(operand);