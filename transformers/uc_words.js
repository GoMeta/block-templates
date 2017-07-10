/**
 * @header
 * @name Uppercase words
 * @description Uppercase the first letter of every word in the user's response
 * @category Transformers
 */

let transformed = Meta.data.metadata.responseData.toLowerCase();
transformed = transformed.replace(/(^([a-zA-Z\p{M}]))|([ -][a-zA-Z\p{M}])/g, (s) => s.toUpperCase());

/**
 * @inspectable
 * @name Transition
 * @description Where this block transitions when it is finished
 * @type transition
 */
const transition = '';

Meta.callbacks.transitionTo(transition, transformed);
