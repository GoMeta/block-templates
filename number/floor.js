/**
 * @header
 * @name Round down
 * @description Round down to the nearest integer
 * @category Number
 * @accepts Number<T>
 * @returns T
 */

const transformed = Math.floor(Meta.$input);

/**
 * @inspectable
 * @name Transition
 * @description Where this block transitions when it is finished
 * @type transition
 */
const transition = '';

Meta.callbacks.transitionTo(transition, transformed);
