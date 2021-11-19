import { typeOfEquel } from '../../Lang/typeOfEquel.js';

/**
 * determines whether a operand is Symbol or not
 *
 * @param {any} operand
 * @returns {boolean}
 */
export const isSymbol = operand => typeOfEquel(operand, 'symbol');