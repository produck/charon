/**
 * Executes a function or specified piece of code once the timer expires.
 *
 * @param handler - A function to be executed after the timer expires.
 * @param delay - In milliseconds, the timer should wait before the specified function or code is executed.
 */
export function Timeout(handler: TimerHandler, delay: number): number;