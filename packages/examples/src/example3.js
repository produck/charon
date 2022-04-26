// without charon
export const multiply = (x, y, z, scalar) => {
	if(typeof x !== 'number') {
		throw new Error('x must be number');
	}

	if(typeof y !== 'number') {
		throw new Error('y must be number');
	}

	if(typeof z !== 'number') {
		throw new Error('z must be number');
	}

	if(typeof scalar !== 'number') {
		throw new Error('scalar must be number');
	}

	return [x * scalar, y * scalar, z * scalar];
}