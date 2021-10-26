import * as $C from '@produck/charon';

const btn = document.createElement('button');
btn.innerHTML = 'Click me!';
document.body.appendChild(btn);

$C.Dom.addEventListener(btn, 'click', () => {
	console.log($C.Lang.typeof('string'), '-', $C.Lang.typeof(123), '-', $C.Lang.typeof(null));
	console.log($C.Lang.instanceof([1, 2], Array));
	console.log($C.Lang.instanceof({a: 1}, Object));
	$C.Lang.throwError('error1');
	$C.Lang.throwError('error2');
})
