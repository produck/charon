import * as $C from '@produck/charon';
import * as $CB from '@produck/charon-browser';

const btn = $CB.Dom.createElement('button');
const btn2 = $CB.Dom.createElement('button');
const btn3 = $CB.Dom.createElement('button');

btn.innerHTML = 'Click me!';
$CB.Dom.appendChild(document.body, btn);

btn2.innerHTML = 'remove click'
$CB.Dom.appendChild(document.body, btn2);

btn3.innerHTML = 'timer'
$CB.Dom.appendChild(document.body, btn3);

const listener = () => {
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
		'isNaN', $C.Type.isNaN(NaN), $C.Type.Is.NaN(NaN),
		'isFunction', $C.Type.isFunction(() => {}), $C.Type.Is.Function(() => {}),
		'isSymbol', $C.Type.isSymbol(Symbol()), $C.Type.Is.Symbol(Symbol()),
		'isBigInt', $C.Type.isBigInt(BigInt(10)), $C.Type.Is.BigInt(BigInt(10)),
		'isDate', $C.Type.isDate(new Date()), $C.Type.Is.Date(new Date()),
		'isRegExp', $C.Type.isRegExp(new RegExp()), $C.Type.Is.RegExp(new RegExp()),
		'isArrayBuffer', $C.Type.isArrayBuffer(new ArrayBuffer()), $C.Type.Is.ArrayBuffer(new ArrayBuffer())
	);
	console.log(
		'isNotString', $C.Type.Not.String('aaa'),
		'isNotBoolean', $C.Type.Not.Boolean(true),
		'isNotArray', $C.Type.Not.Array([1]),
		'isNotNumber', $C.Type.Not.Number(1),
		'isNotObject', $C.Type.Not.Object({a: 1}),
		'isNotNull', $C.Type.Not.Null(null),
		'isNotUndefined', $C.Type.Not.Undefined(undefined),
		'isNotNaN', $C.Type.Not.NaN(NaN),
		'isNotFunction', $C.Type.Not.Function(() => {}),
		'isNotSymbol', $C.Type.Not.Symbol(Symbol()),
		'isNotBigInt', $C.Type.Not.BigInt(BigInt(10)),
		'isNotDate', $C.Type.Not.Date(new Date()),
		'isNotRegExp', $C.Type.Not.RegExp(new RegExp()),
		'isNotArrayBuffer', $C.Type.Not.ArrayBuffer(new ArrayBuffer())
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
};

$CB.Dom.addEventListener(btn, 'click', listener);

$CB.Dom.addEventListener(btn2, 'click', () => {
	$CB.Global.localStorage.setItem('test', 111);

	$CB.Timer.Timeout(() => {
		$CB.Dom.removeEventListener(btn, 'click', listener);
		console.log('remove success!');
	}, 1000)
});

let interval = null;
let request = null;

$CB.Dom.addEventListener(btn3, 'click', () => {
	if (interval) {
		$CB.Timer.Clear.Interval(interval);
		interval = null;
	} else {
		interval = $CB.Timer.Interval(() => {
			console.log(interval);
		}, 1000);
	}

	if (request) {
		$CB.Timer.Clear.AnimationFrame(request);
		request = null;
	} else {
		request = $CB.Timer.AnimationFrame((timestamp) => {
			console.log(timestamp);
		});
	}
});