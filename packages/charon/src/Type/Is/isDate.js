import { instanceOf } from '../../Lang/instanceOf.js';

/**
 * determines whether a operand is Date object or not
 *
 * @param {any} operand
 * @returns {boolean}
 */
export const isDate = operand => instanceOf(operand, Date);