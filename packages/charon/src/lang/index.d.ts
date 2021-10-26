/**
 * Runtime errors result in new Error objects being created and thrown.
 * @param message Error message.
 * @param fileName Path to file that raised this error.
 * @param lineNumber Line number in file that raised this error.
 */
export function throwError(message: String, fileName: String, lineNumber: Number): void;

/**
 * Creates a new ReferenceError object.
 * @param message Error message.
 * @param fileName Path to file that raised this error.
 * @param lineNumber Line number in file that raised this error.
 */
export function throwReferenceError(message: String, fileName: String, lineNumber: Number): void;

/**
 * Creates a new TypeError object.
 * @param message Error message.
 * @param fileName Path to file that raised this error.
 * @param lineNumber Line number in file that raised this error.
 */
export function throwTypeError(message: String, fileName: String, lineNumber: Number): void;