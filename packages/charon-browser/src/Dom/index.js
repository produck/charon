import * as Event from './Event/index.js';
import { DOCUMENT } from './constant.js';

export const body = DOCUMENT.body;
export { Event, DOCUMENT };
export { addEventListener } from './addEventListener.js';
export { removeEventListener } from './removeEventListener.js';
export { createElement } from './createElement.js';
export { appendChild } from './appendChild.js';