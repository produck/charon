import * as $C from '@produck/charon';

const btn = document.createElement('button');
btn.innerHTML = 'Click me!';
document.body.appendChild(btn);

$C.Dom.addEventListener(btn, 'click', () => {
	console.log($C.Lang.typeOf('string'), '-', $C.Lang.typeOf(null));
	console.log($C.Lang.typeOfEquel(123, 'number'));
	console.log($C.Lang.instanceOf([1, 2], Array));
	console.log($C.Lang.Type.isString('123'));
	console.log($C.Lang.Type.isNaN(NaN), 'isNaN');
	$C.Lang.throwError('error1');
	$C.Lang.throwError('error2');
})
