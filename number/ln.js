/**
 * @header
 * @name Natural log
 * @description Return the natural log of a number
 * @category Number
 * @accepts Number<T>
 * @returns T
 */

const transformed = Math.log(Meta.$input);

/**
 * @inspectable
 * @name Transition
 * @description Where this block transitions when it is finished
 * @type transition
 */
const transition = '';

Meta.callbacks.transitionTo(transition, transformed);
