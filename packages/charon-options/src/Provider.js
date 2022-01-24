import { Object, Lang, Console } from '@produck/charon';
import * as Property from './Property.js';

const map = new WeakMap();
const _ = getter => map.get(getter);

class BaseAccessor {}

export const define = (descriptor, childAccessorMap = {}) => {
	const finalDescriptor = Property.normalize(descriptor);

	function Raw() {
		const raw = {};

		for (const name in finalDescriptor) {
			raw[name] = finalDescriptor[name].value;
		}

		return raw;
	}

	class CustomAccessor extends BaseAccessor {
		constructor(context) {
			super();

			map.set(this, { raw: Raw(), context });

			for (const name in childAccessorMap) {
				this[name] = new childAccessorMap[name](context);
			}

			Object.freeze(this);
		}

		static merge(accessor, source) {
			if (!Lang.instanceOf(accessor, CustomAccessor)) {
				Lang.Throw.TypeError('Invalid accessor.');
			}

			for (const name in source) {
				if (name in finalDescriptor) {
					accessor[name] = source[name];
				} else if (name in childAccessorMap) {
					childAccessorMap[name].merge(accessor[name], source[name]);
				} else {
					Console.warn(`No such a property name='${name}' in source.`);
				}
			}
		}
	}

	for (const propertyName in finalDescriptor) {
		Object.defineProperty(CustomAccessor.prototype, propertyName, {
			get() {
				return _(this).raw[propertyName];
			},
			set(newValue) {
				const { raw, context } = _(this);
				const oldValue = this[propertyName];

				if (newValue !== oldValue) {
					const { set, validate } = finalDescriptor[propertyName];

					validate.call(context, newValue);
					raw[propertyName] = newValue;
					set.call(context, newValue, oldValue);
				}
			}
		});
	}

	return CustomAccessor;
};