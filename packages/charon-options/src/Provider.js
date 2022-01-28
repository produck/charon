import { Object, Lang, Console, NOOP } from '@produck/charon';
import * as Property from './Property.js';

const map = new WeakMap();
const constructorSet = new WeakSet();
const _ = getter => map.get(getter);

class BaseAccessor {}

const assertAccessorConstructor = (any, name) => {
	if (!constructorSet.has(any)) {
		Lang.throwError(`Invalid child Accessor name="${name}".`);
	}
};

export const define = (descriptor = {}, childAccessorMap = {}, eachSet = NOOP) => {
	const finalDescriptor = Property.normalize(descriptor);

	for (const name in childAccessorMap) {
		assertAccessorConstructor(childAccessorMap[name], name);
	}

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

		static appendChild(name, ChildAccessor) {
			if (childAccessorMap[name]) {
				Lang.throwError('Conflict child accessor property name.');
			}

			assertAccessorConstructor(ChildAccessor, name);
			childAccessorMap[name] = ChildAccessor;
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

	constructorSet.add(CustomAccessor);

	for (const propertyName in finalDescriptor) {
		Object.defineProperty(CustomAccessor.prototype, propertyName, {
			enumerable: true,
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
					eachSet.call(context);
				}
			}
		});
	}

	return CustomAccessor;
};