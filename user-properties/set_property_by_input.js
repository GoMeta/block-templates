/**
 * @header
 * @name Set user property from input
 * @description Save a user property from an input
 * @category User properties
 */

/**
 * @inspectable
 * @name Key
 * @description The name of the property to save.
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

Meta.$user[key] = Meta.$input;

Meta.callbacks.transitionTo(transition);
