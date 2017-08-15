/**
 * @header
 * @name Parse alpha
 * @description Remove any non-alpha characters
 * @image https://assets.cdn.gometa.io/block-icons/parseAlpha.png
 * @category String
 * @accepts String<T>
 * @returns T
 */

const transformed = Meta.$input.replace(/[^a-zA-Z]+/g, '');

/**
 * @inspectable
 * @name Transition
 * @description Where this block transitions when it is finished
 * @type transition
 */
const transition = '';

Meta.callbacks.transitionTo(transition, transformed);
