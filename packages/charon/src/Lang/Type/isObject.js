import { instanceOf } from "../../Lang/instanceOf.js";

/**
 * determines whether a operand is object or not
 * @function
 * @param {operand} operand
 * @returns {Boolean}
 */
export const isObject = (operand) => {
	return instanceOf(operand, Object);
}