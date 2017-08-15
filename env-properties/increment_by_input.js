/**
 * @header
 * @name Increment environment property by input
 * @description Increment an environment property by the amount returned from the preceding block
 * @image https://assets.cdn.gometa.io/block-icons/incrementEnvironmentPropertyByPrevious.png
 * @category Environment properties
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

Meta.$env[key] = (Meta.$env[key] || 0) + Meta.$input;

Meta.callbacks.transitionTo(transition);
