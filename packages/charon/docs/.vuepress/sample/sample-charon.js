// with charon
import { Lang, Type } from '@produck/charon';

export const multiply = (x, y, z, scalar) => {
	if(Type.Not.Number(x)) {
		Lang.Throw.TypeError('x must be number');
	}

	if(Type.Not.Number(y)) {
		Lang.Throw.TypeError('y must be number');
	}

	if(Type.Not.Number(z)) {
		Lang.Throw.TypeError('z must be number');
	}

	if(Type.Not.Number(scalar)) {
		Lang.Throw.TypeError('scalar must be number');
	}

	return [x * scalar, y * scalar, z * scalar];
}