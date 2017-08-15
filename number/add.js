/**
 * @header
 * @name Add
 * @description Add a value to a number
 * @category Number
 * @accepts Number<T>
 * @returns T
 */

/**
 * @inspectable
 * @name Value
 * @description The amount to add
 * @type number
 */
const value = 0;

const transformed = (Number(Meta.$input) || 0) + value;

/**
 * @inspectable
 * @name Transition
 * @description Where this block transitions when it is finished
 * @type transition
 */
const transition = '';

Meta.callbacks.transitionTo(transition, transformed);
