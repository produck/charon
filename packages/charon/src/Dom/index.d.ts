export * as Event from './Event';

/**
 * Sets up a function that will be called whenever the event is delivered to the element
 * @param element html element
 * @param event event string
 * @param listener callback
 */
export function addEventListener(element: HTMLElement, event: String, listener: () => void): void;

/**
 * Removes an event listener of element
 * @param element html element
 * @param event event string
 * @param listener callback
 */
export function removeEventListener(element: HTMLElement, event: String, listener: () => void): void;
