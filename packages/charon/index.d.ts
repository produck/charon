/**
 * @public
 */
import * as Lang from './src/Lang';
import * as Type from './src/Type';
import * as Console from './src/Console';
import Object from './src/Object';
import * as Reflect from './src/Reflect';
import { CharonMath } from './src/Math';

export { Lang, Type, Console, Object, Reflect };
export function NOOP(): void;

export const Math: CharonMath;