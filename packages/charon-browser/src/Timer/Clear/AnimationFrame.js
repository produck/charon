/**
 * @param {number} requestID
 */
export const AnimationFrame = (requestID) => {
	window.cancelAnimationFrame(requestID);
};