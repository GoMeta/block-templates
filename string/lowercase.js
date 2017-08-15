/**
 * @header
 * @name Lowercase text
 * @description Convert text to lowercase
 * @image https://assets.cdn.gometa.io/block-icons/lowercaseText.png
 * @category String
 * @accepts String<T>
 * @returns T
 */

const transformed = Meta.$input.toLowerCase();

/**
 * @inspectable
 * @name Transition
 * @description Where this block transitions when it is finished
 * @type transition
 */
const transition = '';

Meta.callbacks.transitionTo(transition, transformed);
