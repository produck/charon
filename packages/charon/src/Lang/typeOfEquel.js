import { typeOf } from './typeOf.js';

/**
 * return typeof operand === type
 * @function
 * @param {any} operand
 * @param {string} type
 * @returns {boolean}
 */
export const typeOfEquel = (operand, type) => typeOf(operand) === type;