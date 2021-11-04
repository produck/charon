/**
 * @namespace Lang
 * @borrows typeOf as typeOf
 * @borrows typeOfEquel as typeOfEquel
 * @borrows instanceOf as instanceOf
 * @borrows throwError as throwError
 */

import * as Throw from './Throw/index.js';
import * as Type from './Type/index.js';

export { Throw, Type };
export { typeOf } from './typeOf.js';
export { typeOfEquel } from './typeOfEquel.js';
export { instanceOf } from './instanceOf.js';
export { throwError } from './Throw/throwError.js';