/**
 * @header
 * @name Round
 * @description Return to the nearest integer
 * @category Number
 * @accepts Number<T>
 * @returns T
 */

const transformed = Math.round(Meta.$input);

/**
 * @inspectable
 * @name Transition
 * @description Where this block transitions when it is finished
 * @type transition
 */
const transition = '';

Meta.callbacks.transitionTo(transition, transformed);
