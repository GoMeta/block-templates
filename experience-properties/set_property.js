/**
 * @header
 * @name Set experience property
 * @description Save a temporary experience property
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
 * @name Value
 * @description The value to save
 * @type string
 */
const value = '';

/**
 * @inspectable
 * @name Transition
 * @description Where this block transitions when it is finished
 * @type transition
 */
const transition = '';

Meta.$experience[key] = value;

Meta.callbacks.transitionTo(transition);
