import { Type, NOOP, Lang } from '@produck/charon';

export const normalize = _descriptor => {
	const descriptor = {};

	for (const propertyName in _descriptor) {
		const _propertyDescriptor = _descriptor[propertyName];

		const propertyDescriptor = descriptor[propertyName] = {
			validate: () => true,
			set: NOOP
		};

		if (Type.isObject(_propertyDescriptor) && Type.Not.Null(_propertyDescriptor)) {
			const {
				validate: _validate,
				after: _after
			} = _propertyDescriptor;

			if (Type.Not.Function(_validate)) {
				Lang.Throw.TypeError('Invalid `[<propertyName>].validate`, a Function expected.');
			}

			if (Type.Not.Function(_after)) {
				Lang.Throw.TypeError('Invalid `[<propertyName>].after`, a Function expected.');
			}
		} else {
			propertyDescriptor.value = _propertyDescriptor;
		}
	}

	return descriptor;
};