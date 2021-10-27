/**
 * @namespace Throw
 * @memberof Lang
 * @borrows throwError as Error
 */

export { throwError as Error } from './throwError.js';
export { throwEvalError as EvalError } from './throwEvalError.js';
export { throwRangeError as RangeError } from './throwRangeError.js';
export { throwReferenceError as ReferenceError } from './throwReferenceError.js';
export { throwSyntaxError as SyntaxError } from './throwSyntaxError.js';
export { throwTypeError as TypeError } from './throwTypeError.js';
export { throwURIError as URIError } from './throwURIError.js';