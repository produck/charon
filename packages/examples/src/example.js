import * as $C from '@produck/charon';
import * as $CB from '@produck/charon-browser';
import * as $E from '@produck/charon-events';

const [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9, btn10] = [
	'click me',
	'remove click',
	'timer',
	'Dom',
	'remove',
	'event',
	'emitterOn',
	'emitterEmit',
	'emitterOff',
	'insertBefore'
].map(innerHTML => {
	const btn = $CB.Dom.createElement('button');

	btn.innerHTML = innerHTML;

	$CB.Dom.appendChild($CB.Dom.body, btn);

	return btn
});

const listener = () => {
	$C.Console.log('typeOf', $C.Lang.typeOf('string'), '-', $C.Lang.typeOf(null));
	$C.Console.log('typeOfEquel', $C.Lang.typeOfEquel(123, 'number'));
	$C.Console.log('instanceOf', $C.Lang.instanceOf([1, 2], Array));
	$C.Console.log(
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
		'isDate', $C.Type.isDate($C.New.Date()), $C.Type.Is.Date($C.New.Date()),
		'isRegExp', $C.Type.isRegExp(new RegExp()), $C.Type.Is.RegExp(new RegExp()),
		'isArrayBuffer', $C.Type.isArrayBuffer($C.New.ArrayBuffer()), $C.Type.Is.ArrayBuffer($C.New.ArrayBuffer())
	);
	$C.Console.log(
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
		'isNotDate', $C.Type.Not.Date($C.New.Date()),
		'isNotRegExp', $C.Type.Not.RegExp(new RegExp()),
		'isNotArrayBuffer', $C.Type.Not.ArrayBuffer($C.New.ArrayBuffer())
	);
	$C.Console.log(
		'abs', $C.Math.abs(-1),
		'sin', $C.Math.sin(10),
		'sqrt', $C.Math.sqrt(2),
		'random', $C.Math.random()
	);
	$C.Console.log(
		'values', $C.Object.values({ a: 1, b: 2 }),
		'assign', $C.Object.assign({}, {})
	);
	$C.Console.log(
		'has', $C.Reflect.has({}, 1),
		'ownKeys', $C.Reflect.ownKeys({ a: 1, b: 2 })
	)
	$C.Console.log(
		'navigator', $CB.Global.navigator,
		'history', $CB.Global.history,
		'location', $CB.Global.location
	)
	$C.Console.log('noop',$C.NOOP)

	$C.Console.log($C.Math.atan2xy(100, 200));
	$C.Console.log($C.Math.atan2xy(200, 300));

	$C.Console.warn('warn1');
	$C.Console.warn('warn2');
	$C.Console.error('error1');
	$C.Console.error('error2');

	$C.Lang.throwError('error1');
	$C.Lang.Throw.TypeError('error2');
	$C.Lang.Throw.TypeError('error3');
};

$CB.Dom.addEventListener(btn1, 'click', listener);

$CB.Dom.addEventListener(btn2, 'click', () => {
	$CB.Global.localStorage.setItem('test', 111);

	$CB.Timer.Timeout(() => {
		$CB.Dom.removeEventListener(btn1, 'click', listener);
		$C.Console.log('remove success!');
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
			$C.Console.log(interval);
		}, 1000);
	}

	if (request) {
		$CB.Timer.Clear.AnimationFrame(request);
		request = null;
	} else {
		request = $CB.Timer.AnimationFrame((timestamp) => {
			$C.Console.log(timestamp);
		});
	}
});

$CB.Dom.addEventListener(btn4, 'click', () => {
	$CB.Dom.appendChild($CB.Dom.body, $CB.Dom.createTextNode('TextNodeTextNode'));
	$CB.Dom.setClassName(btn4, 'setClassName');
	$CB.Dom.addClass(btn4, 'class1', 'class2');
	$C.Console.log(
		$CB.Dom.getClassList(btn4),
		$CB.Dom.getRect(btn4),
		$CB.Dom.createFragement()
	);

	$CB.Timer.Timeout(() => {
		$CB.Dom.removeClass(btn4, 'setClassName', 'class1', 'class2');
	}, 1000)
});

$CB.Dom.addEventListener(btn5, 'click', () => {
	$CB.Dom.removeFromParent(btn2);

	$CB.Timer.Timeout(() => {
		$CB.Dom.removeChild($CB.Dom.body, btn1);
	}, 1000)

	$CB.Timer.Timeout(() => {
		$CB.Dom.removeAllChild($CB.Dom.body);
	}, 2000)
});

// Event
const ev = $CB.Event.create('look', { 'bubbles': true, 'cancelable': false });

$CB.Dom.addEventListener(btn5, 'look', () => {
	btn5.innerHTML = 'look5'
})

$CB.Dom.addEventListener($CB.Dom.DOCUMENT, 'look', () => {
	$C.Console.log('document look');
})

$CB.Dom.addEventListener(btn6, 'click', () => {
	$CB.Event.dispatch(btn5, ev);

	$CB.Event.stopAndPrevent(ev)
});

// Event Emitter
const emitter = new $E.Simple.Emitter();

const emitterListener = () => {
	$C.Console.log('success!');
}

$CB.Dom.addEventListener(btn7, 'click', () => {
	emitter.on('test', emitterListener);
});

$CB.Dom.addEventListener(btn8, 'click', () => {
	emitter.emit('test');
});

$CB.Dom.addEventListener(btn9, 'click', () => {
	emitter.off('test', emitterListener);
});

$CB.Dom.addEventListener(btn10, 'click', () => {
	const ref = $CB.Dom.createElement('div');
	const child = $CB.Dom.createElement('a');

	$CB.Dom.appendChild($CB.Dom.body, ref);
	$CB.Dom.insertBefore($CB.Dom.body, child, ref);
});

const o = {
	a: $C.Array.of('a', 'd', 'd', 'r', 'e', 's'),
	b: $C.Array.of('c', 'o', 'd', 'e'),
	c: $C.Array.from('string'),
	d: $C.Array.from('number'),
	e: $C.Array.isArray([1,2]),
	f: $C.Array.isArray('dsfds'),
	g: $C.New.Array(5).fill($C.New.Date().getDate()),
	h: $C.New.Array(5).fill($C.New.Date().getHours()),
	i: $C.New.Array(5).fill($C.New.Date().getMinutes())
}

const regA = $C.New.RegExp('a', 'i');
const regB = $C.New.RegExp('b', 'i');
$C.Console.log(regA.test('absd'), regA.test('Adbe'), regB.test('HHHUHU'));

const m1 = $C.New.Map();
const m2 = $C.New.Map();
m1.set(regA, '/a/i');
m2.set(regB, '/b/i');