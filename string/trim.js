/**
 * @header
 * @name Trim
 * @description Trim any spaces from the beginning or end of a string
 * @image https://assets.cdn.gometa.io/block-icons/trim.png
 * @category String
 * @accepts String<T>
 * @returns T
 */

const transformed = Meta.$input.trim();

/**
 * @inspectable
 * @name Transition
 * @description Where this block transitions when it is finished
 * @type transition
 */
const transition = '';

Meta.callbacks.transitionTo(transition, transformed);
