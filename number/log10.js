/**
 * @header
 * @name Log 10
 * @description Return the base 10 log of a number
 * @category Number
 * @accepts Number<T>
 * @returns T
 */

const transformed = Math.log10(Meta.$input);

/**
 * @inspectable
 * @name Transition
 * @description Where this block transitions when it is finished
 * @type transition
 */
const transition = '';

Meta.callbacks.transitionTo(transition, transformed);
