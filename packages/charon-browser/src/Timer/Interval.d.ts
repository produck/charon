/**
 * Calls a function or executes a code snippet, with a fixed time delay between each call.
 *
 * @param handler - A function to be executed every delay milliseconds.
 * @param delay - In milliseconds, the timer should delay in between executions of the specified function or code.
 */
export function Interval(handler: TimerHandler, delay: number): number;