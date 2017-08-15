/**
 * @header
 * @name Raise to power
 * @description Raise a number to a power
 * @category Number
 * @accepts Number<T>
 * @returns T
 */

/**
 * @inspectable
 * @name Exponent
 * @description The power to raise by
 * @type number
 */
const power = 0;

const transformed = Math.pow((Number(Meta.$input) || 0), power);

/**
 * @inspectable
 * @name Transition
 * @description Where this block transitions when it is finished
 * @type transition
 */
const transition = '';

Meta.callbacks.transitionTo(transition, transformed);
