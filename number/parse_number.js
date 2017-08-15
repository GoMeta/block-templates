/**
 * @header
 * @name Parse number
 * @description Remove any non-numbers from the user's response
 * @category Number
 * @accepts Number<T>
 * @returns T
 */

const transformed = Number(Meta.$input.replace(/\D+/g, '')) || 0;

/**
 * @inspectable
 * @name Transition
 * @description Where this block transitions when it is finished
 * @type transition
 */
const transition = '';

Meta.callbacks.transitionTo(transition, transformed);
