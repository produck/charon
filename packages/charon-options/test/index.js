import * as Options from '../index.js';

const TestOptions = Options.define({
	test: {
		value: 1,
		set(value) {
			console.log(value);
		}
	}
}, {
	sub: Options.define({
		any: {
			value: true,
			validate() {
			}
		},
	}, {})
});

const options = new TestOptions(new RegExp());

console.log(options.test);
console.log(options.sub.any);

options.sub.any = 2;

console.log(options.sub.any);

TestOptions.merge(options, {
	sub: {
		any: false
	}
});

console.log(options.sub.any);