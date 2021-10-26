import { instanceOf } from "../../Lang/instanceOf.js";

/**
 * @memberof Type
 * @function isObject
 * @param {operand} operand
 * @returns {Boolean} result
 * @description determines whether a operand is object or not
 */
export const isObject = (operand) => {
	return instanceOf(operand, Object);
}