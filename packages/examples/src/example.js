import * as $C from '@produck/charon';

const btn = document.createElement('button');

btn.innerHTML = 'Click me!';
document.body.appendChild(btn);

$C.Dom.addEventListener(btn, 'click', () => {
	console.log('typeOf', $C.Lang.typeOf('string'), '-', $C.Lang.typeOf(null));
	console.log('typeOfEquel', $C.Lang.typeOfEquel(123, 'number'));
	console.log('instanceOf', $C.Lang.instanceOf([1, 2], Array));
	console.log(
		'isString', $C.Type.isString('aaa'), $C.Type.Is.String('aaa'),
		'isBoolean', $C.Type.isBoolean(true), $C.Type.Is.Boolean(true),
		'isArray', $C.Type.isArray([1]), $C.Type.Is.Array([1]),
		'isNumber', $C.Type.isNumber(1), $C.Type.Is.Number(1),
		'isObject', $C.Type.isObject({a: 1}), $C.Type.Is.Object({a: 1}),
		'isNull', $C.Type.isNull(null), $C.Type.Is.Null(null),
		'isUndefined', $C.Type.isUndefined(undefined), $C.Type.Is.Undefined(undefined),
		'isNaN', $C.Type.isNaN(NaN), $C.Type.Is.NaN(NaN)
	);
	console.log(
		'isNotString', $C.Type.Not.String('aaa'),
		'isNotBoolean', $C.Type.Not.Boolean(true),
		'isNotArray', $C.Type.Not.Array([1]),
		'isNotNumber', $C.Type.Not.Number(1),
		'isNotObject', $C.Type.Not.Object({a: 1}),
		'isNotNull', $C.Type.Not.Null(null),
		'isNotUndefined', $C.Type.Not.Undefined(undefined),
		'isNotNaN', $C.Type.Not.NaN(NaN)
	);
	console.log(
		'abs', $C.Math.abs(-1),
		'sin', $C.Math.sin(10),
		'sqrt', $C.Math.sqrt(2),
		'random', $C.Math.random()
	);
	console.log(
		'values', $C.Object.values({ a: 1, b: 2 }),
		'assign', $C.Object.assign({}, {})
	);
	console.log(
		'has', $C.Reflect.has({}, 1),
		'ownKeys', $C.Reflect.ownKeys({ a: 1, b: 2 })
	)
	$C.Lang.throwError('error1');
	$C.Lang.Throw.TypeError('error2');
	$C.Lang.Throw.TypeError('error3');
})
