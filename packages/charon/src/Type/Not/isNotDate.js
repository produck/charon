import { isDate } from '../Is/isDate.js';

/**
 * determines whether a operand is not Date object
 *
 * @param {any} operand
 * @returns {boolean}
 */
export const isNotDate = operand => !isDate(operand);