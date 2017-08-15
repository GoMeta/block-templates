/**
 * @header
 * @name Absolute value
 * @description Return the absolute value of an input
 * @category Number
 * @accepts Number<T>
 * @returns T
 */

const transformed = Math.abs(Meta.$input);

/**
 * @inspectable
 * @name Transition
 * @description Where this block transitions when it is finished
 * @type transition
 */
const transition = '';

Meta.callbacks.transitionTo(transition, transformed);
