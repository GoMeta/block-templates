/**
 * @header
 * @name Reverse
 * @description This block reverses an array
 * @category Array
 * @accepts Array<T>
 * @returns [T]
 */

const returnValue = Meta.$input.reverse();

/**
 * @inspectable
 * @name Transition
 * @description Where this block transitions when it is finished
 * @type transition
 */
const transition = '';

Meta.callbacks.transitionTo(transition, returnValue);
