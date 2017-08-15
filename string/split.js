/**
 * @header
 * @name Split
 * @description Split a string by a character
 * @category String
 * @accepts String<T>
 * @returns [T]
 */

/**
 * @inspectable
 * @name Separator
 * @description The character to use to separate the string (e.g., a comma).
 * @type string
 */
const separator = ',';

const transformed = Meta.$input.split(separator);

/**
 * @inspectable
 * @name Transition
 * @description Where this block transitions when it is finished
 * @type transition
 */
const transition = '';

Meta.callbacks.transitionTo(transition, transformed);
