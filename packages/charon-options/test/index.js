import { define } from './type';

const Test = define({
	a: {
		value: 1,
		validate() {
			this
		}
	},
	y: null,
	b: false,
	x: Symbol(),
	e: {
		value: false
	},
	z: () => {}
}, {
	c: define({
		d: 2
	})
}, function eachSet() {
	this
})

const test = new Test();

Test.merge(test, {
	a
})