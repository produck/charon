import { instanceOf } from "../../Lang/instanceOf.js";

/**
 * @memberof Type
 * @function isArray
 * @param {operand} operand
 * @returns {Boolean} result
 * @description determines whether a operand is array or not
 */
export const isArray = (operand) => {
	return instanceOf(operand, Array);
}