/**
 * @header
 * @name Decrement environment property by value
 * @description Decrement an environment property
 * @image https://assets.cdn.gometa.io/block-icons/decrementEnvironmentProperty.png
 * @category Environment properties
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
 * @name Value
 * @description The value to decrement by
 * @type number
 */
const value = 1;

/**
 * @inspectable
 * @name Transition
 * @description Where this block transitions when it is finished
 * @type transition
 */
const transition = '';

Meta.$env[key] = (Meta.$env[key] || 0) - value;

Meta.callbacks.transitionTo(transition);
