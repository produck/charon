import { instanceOf } from "../../Lang/instanceOf.js";

/**
 * determines whether a operand is array or not
 * @memberof Lang.Type
 * @function isArray
 * @param {operand} operand
 * @returns {Boolean}
 */
export const isArray = (operand) => {
	return instanceOf(operand, Array);
}