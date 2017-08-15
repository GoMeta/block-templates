/**
 * @header
 * @name Uppercase first word
 * @description Uppercase the first word in a string
 * @category String
 * @accepts String<T>
 * @returns T
 */

let transformed = Meta.$input;
transformed = transformed.charAt(0).toUpperCase() + transformed.slice(1);

/**
 * @inspectable
 * @name Transition
 * @description Where this block transitions when it is finished
 * @type transition
 */
const transition = '';

Meta.callbacks.transitionTo(transition, transformed);
