/** The mathematical constant e. This is Euler's number, the base of natural logarithms. */
export const E: number;
/** The natural logarithm of 10. */
export const LN10: number;
/** The natural logarithm of 2. */
export const LN2: number;
/** The base-2 logarithm of e. */
export const LOG2E: number;
/** The base-10 logarithm of e. */
export const LOG10E: number;
/** Pi. This is the ratio of the circumference of a circle to its diameter. */
export const PI: number;
/** The square root of 0.5, or, equivalently, one divided by the square root of 2. */
export const SQRT1_2: number;
/** The square root of 2. */
export const SQRT2: number;
/**
 * Returns the absolute value of a number (the value without regard to whether it is positive or negative).
 * For example, the absolute value of -5 is the same as the absolute value of 5.
 * @param x A numeric expression for which the absolute value is needed.
 */
export function abs(x: number): number;
/**
 * Returns the arc cosine (or inverse cosine) of a number.
 * @param x A numeric expression.
 */
export function acos(x: number): number;
/**
		 * Returns the inverse hyperbolic cosine of a number.
		 * @param x A numeric expression that contains an angle measured in radians.
		 */
export function acosh(x: number): number;
/**
 * Returns the arcsine of a number.
 * @param x A numeric expression.
 */
export function asin(x: number): number;
/**
 * Returns the inverse hyperbolic sine of a number.
 * @param x A numeric expression that contains an angle measured in radians.
 */
export function asinh(x: number): number;
/**
 * Returns the arctangent of a number.
 * @param x A numeric expression for which the arctangent is needed.
 */
export function atan(x: number): number;
/**
 * Returns the angle (in radians) from the X axis to a point.
 * @param y A numeric expression representing the cartesian y-coordinate.
 * @param x A numeric expression representing the cartesian x-coordinate.
 */
export function atan2(y: number, x: number): number;
/**
	* Returns the inverse hyperbolic tangent of a number.
	* @param x A numeric expression that contains an angle measured in radians.
	*/
export function atanh(x: number): number;
/**
	 * Returns an implementation-dependent approximation to the cube root of number.
	 * @param x A numeric expression.
	 */
export function cbrt(x: number): number;
/**
 * Returns the smallest integer greater than or equal to its numeric argument.
 * @param x A numeric expression.
 */
export function ceil(x: number): number;
/**
 * Returns the number of leading zero bits in the 32-bit binary representation of a number.
 * @param x A numeric expression.
 */
export function clz32(x: number): number;

/**
 * Returns the cosine of a number.
 * @param x A numeric expression that contains an angle measured in radians.
 */
export function cos(x: number): number;
/**
 * Returns the hyperbolic cosine of a number.
 * @param x A numeric expression that contains an angle measured in radians.
 */
export function cosh(x: number): number;
/**
 * Returns e (the base of natural logarithms) raised to a power.
 * @param x A numeric expression representing the power of e.
 */
export function exp(x: number): number;
/**
	 * Returns the result of (e^x - 1), which is an implementation-dependent approximation to
	 * subtracting 1 from the exponential function of x (e raised to the power of x, where e
	 * is the base of the natural logarithms).
	 * @param x A numeric expression.
	 */
export function expm1(x: number): number;
/**
 * Returns the greatest integer less than or equal to its numeric argument.
 * @param x A numeric expression.
 */
export function floor(x: number): number;
/**
 * Returns the nearest single precision float representation of a number.
 * @param x A numeric expression.
 */
export function fround(x: number): number;
/**
 * Returns the square root of the sum of squares of its arguments.
 * @param values Values to compute the square root for.
 *     If no arguments are passed, the result is +0.
 *     If there is only one argument, the result is the absolute value.
 *     If any argument is +Infinity or -Infinity, the result is +Infinity.
 *     If any argument is NaN, the result is NaN.
 *     If all arguments are either +0 or −0, the result is +0.
 */
export function hypot(...values: number[]): number;
/**
 * Returns the result of 32-bit multiplication of two numbers.
 * @param x First number
 * @param y Second number
 */
export function imul(x: number, y: number): number;

/**
 * Returns the natural logarithm (base e) of a number.
 * @param x A numeric expression.
 */
export function log(x: number): number;
/**
 * Returns the base 2 logarithm of a number.
 * @param x A numeric expression.
 */
export function log2(x: number): number;

/**
 * Returns the natural logarithm of 1 + x.
 * @param x A numeric expression.
 */
export function log1p(x: number): number;
/**
 * Returns the larger of a set of supplied numeric expressions.
 * @param values Numeric expressions to be evaluated.
 */
export function max(...values: number[]): number;
/**
 * Returns the smaller of a set of supplied numeric expressions.
 * @param values Numeric expressions to be evaluated.
 */
export function min(...values: number[]): number;
/**
 * Returns the value of a base expression taken to a specified power.
 * @param x The base value of the expression.
 * @param y The exponent value of the expression.
 */
export function pow(x: number, y: number): number;
/** Returns a pseudorandom number between 0 and 1. */
export function random(): number;
/**
 * Returns a supplied numeric expression rounded to the nearest integer.
 * @param x The value to be rounded to the nearest integer.
 */
export function round(x: number): number;
/**
 * Returns the sine of a number.
 * @param x A numeric expression that contains an angle measured in radians.
 */
export function sin(x: number): number;

/**
 * Returns the hyperbolic sine of a number.
 * @param x A numeric expression that contains an angle measured in radians.
 */
export function sinh(x: number): number;
/**
 * Returns the square root of a number.
 * @param x A numeric expression.
 */
export function sqrt(x: number): number;
/**
 * Returns the tangent of a number.
 * @param x A numeric expression that contains an angle measured in radians.
 */
export function tan(x: number): number;
/**
	* Returns the hyperbolic tangent of a number.
	* @param x A numeric expression that contains an angle measured in radians.
	*/
export function tanh(x: number): number;
/**
 * Returns the integral part of the a numeric expression, x, removing any fractional digits.
 * If x is already an integer, the result is x.
 * @param x A numeric expression.
 */
export function trunc(x: number): number;

/**
 * Returns the angle (in radians) from the Y axis to a point
 * @param x A numeric expression representing the cartesian x-coordinate.
 * @param y A numeric expression representing the cartesian y-coordinate.
 */
export function atan2xy(x: number, y: number): number