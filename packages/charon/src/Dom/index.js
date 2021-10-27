/**
 * @namespace Dom
 * @borrows addEventListener as addEventListener
 * @borrows removeEventListener as removeEventListener
 */

export * as Event from './Event/index.js';
export { addEventListener } from './addEventListener.js';
export { removeEventListener } from './removeEventListener.js';