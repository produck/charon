// without charon
export const multiply = (x, y, z, scalar) => {
	if(typeof x !== 'number') {
		throw new TypeError('x must be number');
	}

	if(typeof y !== 'number') {
		throw new TypeError('y must be number');
	}

	if(typeof z !== 'number') {
		throw new TypeError('z must be number');
	}

	if(typeof scalar !== 'number') {
		throw new TypeError('scalar must be number');
	}

	return [x * scalar, y * scalar, z * scalar];
}