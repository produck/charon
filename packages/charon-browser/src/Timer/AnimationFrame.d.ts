/**
 * Perform an animation and requests that the browser calls a specified function to update an animation before the next repaint.
 *
 * @param callback - The function to call when it's time to update your animation for the next repaint.
 */
export function AnimationFrame(callback: FrameRequestCallback): number;