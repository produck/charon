/**
 * Returns the prototype of an object.
 * @param {any} o The object that references the prototype.
 */
export function getPrototypeOf(o: any): any;

/**
 * Gets the own property descriptor of the specified object.
 * An own property descriptor is one that is defined directly on the object and is not inherited from the object's prototype.
 * @param {any} o Object that contains the property.
 * @param {PropertyKey} p Name of the property.
 */
export function getOwnPropertyDescriptor(o: any, p: PropertyKey): PropertyDescriptor | undefined;

/**
 * Returns the names of the own properties of an object. The own properties of an object are those that are defined directly
 * on that object, and are not inherited from the object's prototype. The properties of an object include both fields (objects) and functions.
 * @param {any} o Object that contains the own properties.
 */
export function getOwnPropertyNames(o: any): string[];

/**
 * Creates an object that has the specified prototype or that has null prototype.
 * @param {object | null} o Object to use as a prototype. May be null.
 */
export function create(o: object | null): any;

/**
 * Creates an object that has the specified prototype, and that optionally contains specified properties.
 * @param {object | null} o Object to use as a prototype. May be null
 * @param {PropertyDescriptorMap} properties JavaScript object that contains one or more property descriptors.
 */
export function create(o: object | null, properties: PropertyDescriptorMap & ThisType<any>): any;

/**
 * Adds a property to an object, or modifies attributes of an existing property.
 * @param {T} o Object on which to add or modify the property. This can be a native JavaScript object (that is, a user-defined object or a built in object) or a DOM object.
 * @param {PropertyKey} p The property name.
 * @param {PropertyDescriptor & ThisType<any>} attributes Descriptor for the property. It can be for a data property or an accessor property.
 */
export function defineProperty<T>(o: T, p: PropertyKey, attributes: PropertyDescriptor & ThisType<any>): T;

/**
 * Adds one or more properties to an object, and/or modifies attributes of existing properties.
 * @param {T} o Object on which to add or modify the properties. This can be a native JavaScript object or a DOM object.
 * @param {PropertyDescriptorMap & ThisType<any>} properties JavaScript object that contains one or more descriptor objects. Each descriptor object describes a data property or an accessor property.
 */
export function defineProperties<T>(o: T, properties: PropertyDescriptorMap & ThisType<any>): T;

/**
 * Prevents the modification of attributes of existing properties, and prevents the addition of new properties.
 * @param {T} o Object on which to lock the attributes.
 */
export function seal<T>(o: T): T;

/**
 * Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
 * @param {T} a Object on which to lock the attributes.
 */
export function freeze<T>(a: T[]): readonly T[];

/**
 * Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
 * @param {T} f Object on which to lock the attributes.
 */
export function freeze<T extends Function>(f: T): T;

/**
 * Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
 * @param {T} o Object on which to lock the attributes.
 */
export function freeze<T>(o: T): Readonly<T>;

/**
 * Prevents the addition of new properties to an object.
 * @param {T} o Object to make non-extensible.
 */
export function preventExtensions<T>(o: T): T;

/**
 * Returns true if existing property attributes cannot be modified in an object and new properties cannot be added to the object.
 * @param {any} o Object to test.
 */
export function isSealed(o: any): boolean;

/**
 * Returns true if existing property attributes and values cannot be modified in an object, and new properties cannot be added to the object.
 * @param {any} o Object to test.
 */
export function isFrozen(o: any): boolean;

/**
 * Returns a value that indicates whether new properties can be added to an object.
 * @param {any} o Object to test.
 */
export function isExtensible(o: any): boolean;

/**
 * Returns the names of the enumerable string properties and methods of an object.
 * @param {object} o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
 */
export function keys(o: object): string[];
/**
	 * Copy the values of all of the enumerable own properties from one or more source objects to a
	 * target object. Returns the target object.
	 * @param {T} target The target object to copy to.
	 * @param {U} source The source object from which to copy properties.
	 */
export function assign<T, U>(target: T, source: U): T & U;

/**
 * Copy the values of all of the enumerable own properties from one or more source objects to a
 * target object. Returns the target object.
 * @param {T} target The target object to copy to.
 * @param {U} source1 The first source object from which to copy properties.
 * @param {V} source2 The second source object from which to copy properties.
 */
export function assign<T, U, V>(target: T, source1: U, source2: V): T & U & V;

/**
 * Copy the values of all of the enumerable own properties from one or more source objects to a
 * target object. Returns the target object.
 * @param {T} target The target object to copy to.
 * @param {U} source1 The first source object from which to copy properties.
 * @param {v} source2 The second source object from which to copy properties.
 * @param {W} source3 The third source object from which to copy properties.
 */
export function assign<T, U, V, W>(target: T, source1: U, source2: V, source3: W): T & U & V & W;

/**
 * Copy the values of all of the enumerable own properties from one or more source objects to a
 * target object. Returns the target object.
 * @param {object} target The target object to copy to.
 * @param {any[]} sources One or more source objects from which to copy properties
 */
export function assign(target: object, ...sources: any[]): any;

/**
 * Returns an array of all symbol properties found directly on object o.
 * @param {any} o Object to retrieve the symbols from.
 */
export function getOwnPropertySymbols(o: any): symbol[];

/**
 * Returns the names of the enumerable string properties and methods of an object.
 * @param {object} o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
 */
export function keys(o: {}): string[];

/**
 * Returns true if the values are the same value, false otherwise.
 * @param {any} value1 The first value.
 * @param {any} value2 The second value.
 */
export function is(value1: any, value2: any): boolean;

/**
 * Sets the prototype of a specified object o to object proto or null. Returns the object o.
 * @param {any} o The object to change its prototype.
 * @param {object | null} proto The value of the new prototype or null.
 */
export function setPrototypeOf(o: any, proto: object | null): any;
/**
     * Returns an array of values of the enumerable properties of an object
     * @param { { [s: string]: T } | ArrayLike<T>} o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
     */
export function values<T>(o: { [s: string]: T } | ArrayLike<T>): T[];

 /**
	* Returns an array of values of the enumerable properties of an object
	* @param {object} o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
	*/
export function values(o: {}): any[];

 /**
	* Returns an array of key/values of the enumerable properties of an object
	* @param { { [s: string]: T } | ArrayLike<T>} o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
	*/
export function entries<T>(o: { [s: string]: T } | ArrayLike<T>): [string, T][];

 /**
	* Returns an array of key/values of the enumerable properties of an object
	* @param {object} o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
	*/
export function entries(o: {}): [string, any][];

/**
	* Returns an object containing all own property descriptors of an object
	* @param {T} o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
	*/
export function getOwnPropertyDescriptors<T>(o: T): {[P in keyof T]: TypedPropertyDescriptor<T[P]>} & { [x: string]: PropertyDescriptor };
/**
 * Returns an object created by key-value entries for properties and methods
 * @param {Iterable<readonly [PropertyKey, T]>} entries An iterable object that contains key-value entries for properties and methods.
 */
export function fromEntries<T = any>(entries: Iterable<readonly [PropertyKey, T]>): { [k: string]: T };

/**
	* Returns an object created by key-value entries for properties and methods
	* @param {Iterable<readonly any[]>} entries An iterable object that contains key-value entries for properties and methods.
	*/
export function fromEntries(entries: Iterable<readonly any[]>): any;

