import * as $C from '@produck/charon';

const btn = document.createElement('button');
btn.innerHTML = 'Click me!';
document.body.appendChild(btn);

$C.Dom.addEventListener(btn, 'click', () => {
	console.log('typeOf', $C.Lang.typeOf('string'), '-', $C.Lang.typeOf(null));
	console.log('typeOfEquel', $C.Lang.typeOfEquel(123, 'number'));
	console.log('instanceOf', $C.Lang.instanceOf([1, 2], Array));
	console.log(
		'isString', $C.Lang.Type.isString('aaa'), $C.Lang.Type.Is.String('aaa'),
		'isBoolean', $C.Lang.Type.isBoolean(true), $C.Lang.Type.Is.Boolean(true),
		'isArray', $C.Lang.Type.isArray([1]), $C.Lang.Type.Is.Array([1]),
		'isNumber', $C.Lang.Type.isNumber(1), $C.Lang.Type.Is.Number(1),
		'isObject', $C.Lang.Type.isObject({a: 1}), $C.Lang.Type.Is.Object({a: 1}),
		'isNull', $C.Lang.Type.isNull(null), $C.Lang.Type.Is.Null(null),
		'isUndefined', $C.Lang.Type.isUndefined(undefined), $C.Lang.Type.Is.Undefined(undefined),
		'isNaN', $C.Lang.Type.isNaN(NaN), $C.Lang.Type.Is.NaN(NaN)
	);
	console.log(
		'isNotString', $C.Lang.Type.Not.String('aaa'),
		'isNotBoolean', $C.Lang.Type.Not.Boolean(true),
		'isNotArray', $C.Lang.Type.Not.Array([1]),
		'isNotNumber', $C.Lang.Type.Not.Number(1),
		'isNotObject', $C.Lang.Type.Not.Object({a: 1}),
		'isNotNull', $C.Lang.Type.Not.Null(null),
		'isNotUndefined', $C.Lang.Type.Not.Undefined(undefined),
		'isNotNaN', $C.Lang.Type.Not.NaN(NaN)
	)
	$C.Lang.throwError('error1');
	$C.Lang.Throw.TypeError('error2');
	$C.Lang.Throw.TypeError('error3');
})
