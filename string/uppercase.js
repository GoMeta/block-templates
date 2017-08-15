/**
 * @header
 * @name Uppercase text
 * @description Convert text to uppercase
 * @image https://assets.cdn.gometa.io/block-icons/uppercaseText.png
 * @category String
 * @accepts String<T>
 * @returns T
 */

const transformed = Meta.$input.toUpperCase();

/**
 * @inspectable
 * @name Transition
 * @description Where this block transitions when it is finished
 * @type transition
 */
const transition = '';

Meta.callbacks.transitionTo(transition, transformed);
