/**
 * @header
 * @name Set experience property from input
 * @description Save a temporary experience property from an input
 * @category Experience properties
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

Meta.$experience[key] = Meta.$input;

Meta.callbacks.transitionTo(transition);
