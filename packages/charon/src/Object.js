const OBJECT = Object;

// es5
export const getPrototypeOf = OBJECT.getPrototypeOf;
export const getOwnPropertyDescriptor = OBJECT.getOwnPropertyDescriptor;
export const getOwnPropertyNames = OBJECT.getOwnPropertyNames;
export const create = OBJECT.create;
export const defineProperty = OBJECT.defineProperty;
export const defineProperties = OBJECT.defineProperties;
export const seal = OBJECT.seal;
export const freeze = OBJECT.freeze;
export const preventExtensions = OBJECT.preventExtensions;
export const isSealed = OBJECT.isSealed;
export const isFrozen = OBJECT.isFrozen;
export const isExtensible = OBJECT.isExtensible;
export const keys = OBJECT.keys;

// es2015
export const assign = OBJECT.assign;
export const getOwnPropertySymbols = OBJECT.getOwnPropertySymbols;
export const is = OBJECT.is;
export const setPrototypeOf = OBJECT.setPrototypeOf;

// es2017
export const values = OBJECT.values;
export const entries = OBJECT.entries;
export const getOwnPropertyDescriptors = OBJECT.getOwnPropertyDescriptors;

// es2019
// export const fromEntries = OBJECT.fromEntries;