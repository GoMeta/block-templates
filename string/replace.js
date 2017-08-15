/**
 * @header
 * @name Find and replace
 * @description Replace all instances of a string
 * @image https://assets.cdn.gometa.io/block-icons/findAndReplace.png
 * @category String
 * @accepts String<T>
 * @returns T
 */

/**
 * @inspectable
 * @name Value to find
 * @description The value to find
 * @type string
 */
const find = '';

/**
 * @inspectable
 * @name Replacement
 * @description The value to use as a replacement
 * @type string
 */
const replace = '';

const transformed = Meta.$input.split(find).join(replace);

/**
 * @inspectable
 * @name Transition
 * @description Where this block transitions when it is finished
 * @type transition
 */
const transition = '';

Meta.callbacks.transitionTo(transition, transformed);
