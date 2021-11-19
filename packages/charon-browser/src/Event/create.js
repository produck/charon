/**
 * Creates a new Event object
 *
 * @param {string} eventType
 * @param {EventInit} eventInitDict
 * @returns {Event}
 */
export const create = (eventType, eventInitDict) => new Event(eventType, eventInitDict);