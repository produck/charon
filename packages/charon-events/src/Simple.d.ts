type Listener<C> = (this: C, ...args: any[]) => void;

interface EventListenerMap {
	[key: string]: Array<Listener>;
}

export class SimpleEventEmitter<C = void> {
	on(type: string, listener: Listener<C>): void;

	off(type: string, listener: Listener<C>): void;

	emit(type: string, ...args: any[]): void;
}

export function destroy(emitter: SimpleEventEmitter): void;

export const Emitter: typeof SimpleEventEmitter;