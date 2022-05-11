/**
 * Create a new Proxy object
 * @param target - A target object to wrap with Proxy. It can be any sort of object,
 * including a native array, a function, or even another proxy.
 * @param handler - An object whose properties are functions that define
 * the behavior of the proxy when an operation is performed on it.
 */
export function NewProxy<T extends object>(target: T, handler: ProxyHandler<T>): T;