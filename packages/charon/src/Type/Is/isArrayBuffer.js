import { instanceOf } from '../../Lang/instanceOf.js';

/**
 * determines whether a operand is ArrayBuffer or not
 *
 * @param {any} operand
 * @returns {boolean}
 */
export const isArrayBuffer = operand => instanceOf(operand, ArrayBuffer);