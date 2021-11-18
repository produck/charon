/**
 * Removes an event listener from the target
 *
 * @param element - EventTarget
 * @param event - A string which specifies the type of event for which to remove an event listener
 * @param listener - The EventListener function of the event handler to remove from the event target
 */
export function removeEventListener(
	element: HTMLElement,
	event: string,
	listener: EventListenerOrEventListenerObject
): void;
