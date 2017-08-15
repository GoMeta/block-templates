/**
 * @header
 * @name Decrement user property by value
 * @description Decrement a property on a user's account (e.g., coins, points, xp, etc.)
 * @category User properties
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

Meta.$props[key] = (Meta.$props[key] || 0) - value;

Meta.callbacks.transitionTo(transition);
