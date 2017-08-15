/**
 * @header
 * @name Set environment property from value
 * @description Save an environment property
 * @image https://assets.cdn.gometa.io/block-icons/setEnvironmentProperty.png
 * @category Environment properties
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

Meta.$env[key] = value;

Meta.callbacks.transitionTo(transition);
