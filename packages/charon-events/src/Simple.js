const
	EVENT_LISTENER_MAP = 'e',
	CONTEXT = 'c';

class SimpleEventEmitter {
	constructor(context = this) {
		/**
		 * @type {{ [key: string]: Array<() => void> }}
		 */
		this[EVENT_LISTENER_MAP] = {};

		this[CONTEXT] = context;
	}

	on(type, listener) {
		if (!this[EVENT_LISTENER_MAP][type]) {
			this[EVENT_LISTENER_MAP][type] = [];
		}

		this[EVENT_LISTENER_MAP][type].push(listener);
	}

	off(type, listener) {
		const list = this[EVENT_LISTENER_MAP][type];

		if (list) {
			const index = list.indexOf(listener);

			if (index !== -1) {
				list.splice(index, 1);
			}
		}
	}

	emit(type, ...args) {
		if (this[EVENT_LISTENER_MAP][type]) {
			for (const listener of this[EVENT_LISTENER_MAP][type]) {
				listener.call(this[CONTEXT], ...args);
			}
		}
	}
}

/**
 * @param {SimpleEventEmitter} emitter
 * @returns
 */
export const destroy = emitter => {
	emitter[EVENT_LISTENER_MAP] = null;
	emitter[CONTEXT] = null;
};

export const Emitter = SimpleEventEmitter;