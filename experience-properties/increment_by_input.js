/**
 * @header
 * @name Increment experience property by input
 * @description Increment a temporary experience property by the amount returned from the preceding block
 * @category Experience properties
 * @accepts Number
 */

/**
 * @inspectable
 * @name Key
 * @description The name of the property to modify.
 * @type string
 */
const key = '';

/**
 * @inspectable
 * @name Transition
 * @description Where this block transitions when it is finished
 * @type transition
 */
const transition = '';

Meta.$experience[key] = (Meta.$experience[key] || 0) + Meta.$input;

Meta.callbacks.transitionTo(transition);
