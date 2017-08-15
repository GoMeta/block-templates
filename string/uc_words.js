/**
 * @header
 * @name Uppercase words
 * @description Uppercase the first letter of every word
 * @image https://assets.cdn.gometa.io/block-icons/uppercaseWords.png
 * @category String
 * @accepts String<T>
 * @returns T
 */

let transformed = Meta.$input.toLowerCase();
transformed = transformed.replace(/(^([a-zA-Z\p{M}]))|([ -][a-zA-Z\p{M}])/g, (s) => s.toUpperCase());

/**
 * @inspectable
 * @name Transition
 * @description Where this block transitions when it is finished
 * @type transition
 */
const transition = '';

Meta.callbacks.transitionTo(transition, transformed);
