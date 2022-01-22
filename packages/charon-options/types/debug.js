import { define } from './Options';

const Test = define(RegExp, {
	a: {
		value: 1,
		set(newValue) {

		}
	},
	b: 'a'
}, {});

const test = new Test({}, /abc/);

test.a
