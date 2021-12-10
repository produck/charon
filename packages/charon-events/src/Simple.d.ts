type Listener<C> = (this: C, ...args: any[]) => void;

interface EventListenerMap {
	[key: string]: Array<Listener>;
}

export class SimpleEventEmitter<C> {
	on(type: string, listener: Listener<C>): void;

	off(type: string, listener: Listener<C>): void;

	emit(type: string, ...args: any[]): void;
}