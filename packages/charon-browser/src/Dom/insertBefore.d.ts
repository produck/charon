export function insertBefore<T extends HTMLElement>(
	parentElement: HTMLElement,
	node: T,
	child: HTMLElement | null
): T;