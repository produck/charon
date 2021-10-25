import * as $C from '@produck/charon';

console.log($C);

const btn = document.createElement('button');
btn.innerHTML = 'Click me!';
document.body.appendChild(btn);

$C.Dom.addEventListener(btn, 'click', () => {
	console.log('click');
	$C.Lang.throwError('error');
})
