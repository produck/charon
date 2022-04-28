/**
 * Returns a new array from a set of elements.
 * @param items - A set of elements to include in the new array object.
 */
export function of<T>(...items: T[]): T[];

/**
 * Creates an array from an array-like object.
 * @param arrayLike - An array-like object to convert to an array.
 */
export function from<T>(arrayLike: ArrayLike<T>): T[];

/**
 * Returns `true` if the argument is an array, or `false` otherwise
 * @param arg - any
 */
export function isArray(arg: any): arg is any[];
