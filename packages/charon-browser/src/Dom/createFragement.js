import { DOCUMENT } from './constant.js';

/**
 * Creates a new empty DocumentFragment into which DOM nodes can be added to build an offscreen DOM tree.
 *
 * @returns {DocumentFragment}
 */
export const createFragement = () => DOCUMENT.createDocumentFragment();