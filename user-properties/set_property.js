/**
 * @header
 * @name Set user property
 * @description Save a property to the user's account
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

await Meta.actions.setProp(Meta.data.user, key, value);

Meta.callbacks.transitionTo(transition);
