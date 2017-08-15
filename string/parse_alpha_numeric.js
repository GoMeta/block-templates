/**
 * @header
 * @name Parse alphanumeric
 * @description Remove any non-alphanumeric characters
 * @image https://assets.cdn.gometa.io/block-icons/parseAlphanumeric.png
 * @category String
 * @accepts String<T>
 * @returns T
 */

const transformed = Meta.$input.replace(/[^a-z0-9]/gi, '');

/**
 * @inspectable
 * @name Transition
 * @description Where this block transitions when it is finished
 * @type transition
 */
const transition = '';

Meta.callbacks.transitionTo(transition, transformed);
