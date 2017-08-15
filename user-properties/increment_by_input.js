/**
 * @header
 * @name Increment user property by input
 * @description Increment a property on a user's account by the amount returned from the preceding block
 * @category User properties
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

Meta.$props[key] = (Meta.$props[key] || 0) + Meta.$input;

Meta.callbacks.transitionTo(transition);
