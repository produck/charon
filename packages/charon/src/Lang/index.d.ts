export * as Throw from './Throw';
export * as Type from './Type';

/**
 * Runtime errors result in new Error objects being created and thrown.
 * @param message Error message.
 */
export function throwError(message: String): void;

export function typeOf(operand: any): Boolean;

export function typeOfEquel(operand: any, type: String): Boolean;

export function instanceOf(operand: any, constructor: constructor): Boolean;