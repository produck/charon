/**
 * Sets up a function that will be called whenever the specified event is delivered to the target
 *
 * @param element - EventTarget
 * @param event - A case-sensitive string representing the event type to listen for
 * @param listener - callback
 */
export function addEventListener(
	element: HTMLElement,
	event: string,
	listener: EventListenerOrEventListenerObject
): void;