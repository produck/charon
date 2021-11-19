import { typeOfEquel } from '../../Lang/typeOfEquel.js';

/**
 * determines whether a operand is BigInt or not
 *
 * @param {any} operand
 * @returns {boolean}
 */
export const isBigInt = operand => typeOfEquel(operand, 'bigint');