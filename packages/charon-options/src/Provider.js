import { Object, Lang } from '@produck/charon';
import * as Property from './Property.js';

const map = new WeakMap();
const _ = getter => map.get(getter);

class BaseAccessor {}

export const define = (
	constructor = Object,
	descriptor,
	children = {}
) => {
	const finalDescriptor = Property.normalize(descriptor);

	class CustomAccessor extends BaseAccessor {
		constructor(options, context) {
			super();

			map.set(this, options);

			for (const name in children) {
				this[name] = new children[name](options[name]);
			}

			this.$context = context;
			Object.freeze(this);
		}

		static merge(accessor, source) {
			if (!Lang.instanceOf(accessor, CustomAccessor)) {
				Lang.Throw.TypeError('Invalid accessor.');
			}

			for (const name in source) {
				if (name in finalDescriptor) {
					this[name] = source[name];
				} else if (name in children) {
					this[name].merge(source[name]);
				} else {
					console.warn(`No such a property name='${name}' in source.`);
				}
			}
		}

		static Raw() {
			const raw = {};

			for (const name in finalDescriptor) {
				raw[name] = finalDescriptor[name].value;
			}

			for (const name in children) {
				raw[name] = children[name].Raw();
			}

			return raw;
		}
	}

	for (const propertyName in finalDescriptor) {
		Object.defineProperty(CustomAccessor.prototype, propertyName, {
			get() {
				return _(this)[propertyName];
			},
			set(newValue) {
				const oldValue = this[propertyName];

				if (newValue !== oldValue) {
					_(this)[propertyName] = newValue;
					finalDescriptor[propertyName].set(newValue, oldValue, this.$context);
				}
			}
		});
	}

	return CustomAccessor;
};