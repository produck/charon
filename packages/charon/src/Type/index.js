/**
 * @namespace Type
 * @borrows isString as isString
 * @borrows isBoolean as isBoolean
 * @borrows isNumber as isNumber
 * @borrows isArray as isArray
 * @borrows isObject as isObject
 * @borrows isNull as isNull
 * @borrows isUndefined as isUndefined
 * @borrows isNaN as isNaN
 */

import * as Is from './Is/index.js';
import * as Not from './Not/index.js';

export { Is, Not };
export { isString } from './Is/isString.js';
export { isBoolean } from './Is/isBoolean.js';
export { isNumber } from './Is/isNumber.js';
export { isArray } from './Is/isArray.js';
export { isObject } from './Is/isObject.js';
export { isNull } from './Is/isNull.js';
export { isUndefined } from './Is/isUndefined.js';
export { isNaN } from './Is/isNaN.js';