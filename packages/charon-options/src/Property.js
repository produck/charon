import { Type, NOOP, Lang } from '@produck/charon';

export const normalize = _descriptor => {
	const descriptor = {};

	for (const propertyName in _descriptor) {
		const _propertyDescriptor = _descriptor[propertyName];

		const propertyDescriptor = descriptor[propertyName] = {
			validate: NOOP,
			set: NOOP
		};

		if (Type.isObject(_propertyDescriptor) && Type.Not.Null(_propertyDescriptor)) {
			const {
				value: _value,
				validate: _validate = propertyDescriptor.validate,
				set: _set = propertyDescriptor.set
			} = _propertyDescriptor;

			if (Type.Not.Function(_validate)) {
				Lang.Throw.TypeError('Invalid `[<propertyName>].validate`, a Function expected.');
			}

			if (Type.Not.Function(_set)) {
				Lang.Throw.TypeError('Invalid `[<propertyName>].set`, a Function expected.');
			}

			propertyDescriptor.validate = _validate;
			propertyDescriptor.value = _value;
			propertyDescriptor.set = _set;
		} else {
			propertyDescriptor.value = _propertyDescriptor;
		}
	}

	return descriptor;
};