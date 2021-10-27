import * as $C from '@produck/charon';

const btn = document.createElement('button');
btn.innerHTML = 'Click me!';
document.body.appendChild(btn);

$C.Dom.addEventListener(btn, 'click', () => {
	console.log('typeOf', $C.Lang.typeOf('string'), '-', $C.Lang.typeOf(null));
	console.log('typeOfEquel', $C.Lang.typeOfEquel(123, 'number'));
	console.log('instanceOf', $C.Lang.instanceOf([1, 2], Array));
	console.log('isString', $C.Lang.Type.isString('aaa'));
	console.log('isArray', $C.Lang.Type.isArray([1]));
	console.log('isNaN', $C.Lang.Type.isNaN(NaN));
	$C.Lang.throwError('error1');
	$C.Lang.throwError('error2');
})
