/**
 * @namespace Dom
 * @borrows addEventListener as addEventListener
 * @borrows removeEventListener as removeEventListener
 */

import * as Event from './Event/index.js';

export { Event };
export { addEventListener } from './addEventListener.js';
export { removeEventListener } from './removeEventListener.js';