import { WINDOW } from '../constant.js';

/**
 * @param {FrameRequestCallback} callback
 */
export const AnimationFrame = callback => WINDOW.requestAnimationFrame(callback);