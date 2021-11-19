import { instanceOf } from '../../Lang/instanceOf.js';

/**
 * determines whether a operand is RegExp or not
 *
 * @param {any} operand
 * @returns {boolean}
 */
export const isRegExp = operand => instanceOf(operand, RegExp);