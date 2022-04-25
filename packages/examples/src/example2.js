import { Lang, Type } from '@produck/charon';

export const multiply = (x, y, scalar) => {
	if(Type.Not.Number(x)) {
		Lang.Throw.Error('x must be number');
	}

	if(Type.Not.Number(y)) {
		Lang.Throw.Error('y must be number');
	}

	if(Type.Not.Number(scalar)) {
		Lang.Throw.Error('scalar must be number');
	}

	return [x * scalar, y * scalar];
}