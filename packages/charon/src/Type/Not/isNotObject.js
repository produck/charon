import { isObject } from '../Is/isObject.js';

/**
 * determines whether a operand is not object
 * @function
 * @param {any} operand
 * @returns {boolean}
 */
export const isNotObject = operand => !isObject(operand);