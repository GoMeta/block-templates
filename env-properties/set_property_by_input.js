/**
 * @header
 * @name Set environment property from input
 * @description Save an environment property from an input
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
 * @name Transition
 * @description Where this block transitions when it is finished
 * @type transition
 */
const transition = '';

Meta.$env[key] = Meta.$input;

Meta.callbacks.transitionTo(transition);
