/**
 * Calls the function with the specified object as the this value
 * and the elements of specified array as the arguments.
 * @param {function} target The function to call.
 * @param {any} thisArgument The object to be used as the this object.
 * @param {ArrayLike<any>} argumentsList An array of argument values to be passed to the function.
 */
export function apply(target: Function, thisArgument: any, argumentsList: ArrayLike<any>): any;

/**
 * Constructs the target with the elements of specified array as the arguments
 * and the specified constructor as the `new.target` value.
 * @param {function} target The constructor to invoke.
 * @param {ArrayLike<any>} argumentsList An array of argument values to be passed to the constructor.
 * @param {function} newTarget The constructor to be used as the `new.target` object.
 */
export function construct(target: Function, argumentsList: ArrayLike<any>, newTarget?: Function): any;

/**
 * Adds a property to an object, or modifies attributes of an existing property.
 * @param {object} target Object on which to add or modify the property. This can be a native JavaScript object
 *        (that is, a user-defined object or a built in object) or a DOM object.
 * @param {PropertyKey} propertyKey The property name.
 * @param {PropertyDescriptor} attributes Descriptor for the property. It can be for a data property or an accessor property.
 */
export function defineProperty(target: object, propertyKey: PropertyKey, attributes: PropertyDescriptor): boolean;

/**
 * Removes a property from an object, equivalent to `delete target[propertyKey]`,
 * except it won't throw if `target[propertyKey]` is non-configurable.
 * @param {object} target Object from which to remove the own property.
 * @param {PropertyKey} propertyKey The property name.
 */
export function deleteProperty(target: object, propertyKey: PropertyKey): boolean;

/**
 * Gets the property of target, equivalent to `target[propertyKey]` when `receiver === target`.
 * @param {object} target Object that contains the property on itself or in its prototype chain.
 * @param {PropertyKey} propertyKey The property name.
 * @param {any} receiver The reference to use as the `this` value in the getter function,
 *        if `target[propertyKey]` is an accessor property.
 */
export function get(target: object, propertyKey: PropertyKey, receiver?: any): any;

/**
 * Gets the own property descriptor of the specified object.
 * An own property descriptor is one that is defined directly on the object and is not inherited from the object's prototype.
 * @param {object} target Object that contains the property.
 * @param {PropertyKey} propertyKey The property name.
 */
export function getOwnPropertyDescriptor(target: object, propertyKey: PropertyKey): PropertyDescriptor | undefined;

/**
 * Returns the prototype of an object.
 * @param {object} target The object that references the prototype.
 */
export function getPrototypeOf(target: object): object | null;

/**
 * Equivalent to `propertyKey in target`.
 * @param {object} target Object that contains the property on itself or in its prototype chain.
 * @param {PropertyKey} propertyKey Name of the property.
 */
export function has(target: object, propertyKey: PropertyKey): boolean;

/**
 * Returns a value that indicates whether new properties can be added to an object.
 * @param {object} target Object to test.
 */
export function isExtensible(target: object): boolean;

/**
 * Returns the string and symbol keys of the own properties of an object. The own properties of an object
 * are those that are defined directly on that object, and are not inherited from the object's prototype.
 * @param {object} target Object that contains the own properties.
 */
export function ownKeys(target: object): (string | symbol)[];

/**
 * Prevents the addition of new properties to an object.
 * @param {object} target Object to make non-extensible.
 * @returns Whether the object has been made non-extensible.
 */
export function preventExtensions(target: object): boolean;

/**
 * Sets the property of target, equivalent to `target[propertyKey] = value` when `receiver === target`.
 * @param {object} target Object that contains the property on itself or in its prototype chain.
 * @param {PropertyKey} propertyKey Name of the property.
 * @param {any} receiver The reference to use as the `this` value in the setter function,
 *        if `target[propertyKey]` is an accessor property.
 */
export function set(target: object, propertyKey: PropertyKey, value: any, receiver?: any): boolean;

/**
 * Sets the prototype of a specified object o to object proto or null.
 * @param {object} target The object to change its prototype.
 * @param {object | null} proto The value of the new prototype or null.
 * @returns Whether setting the prototype was successful.
 */
export function setPrototypeOf(target: object, proto: object | null): boolean;