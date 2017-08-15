/**
 * @header
 * @name Get last item
 * @description This block gets the last item in an array.
 * @category Array
 * @accepts Array<T>
 * @returns T
 */

const length = Meta.$input.length;
const returnValue = Meta.$input[length - 1];

/**
 * @inspectable
 * @name Transition
 * @description Where this block transitions when it is finished
 * @type transition
 */
const transition = '';

Meta.callbacks.transitionTo(transition, returnValue);
