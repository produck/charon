import { define } from './Options';

const Test = define({
	b: 'a',
	d: 1223
}, {
	/**
	 * some comment
	 */
	x: define({
		u: 1,
		v: true
	}),
	/**
	 * some comment 2
	 */
	y: define({})
});

const test = new Test({}, /abc/);