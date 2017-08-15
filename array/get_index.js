/**
 * @header
 * @name Get item at index
 * @description This block get the array item at the specified index.
 * @category Array
 * @accepts Array<T>
 * @returns T
 */

/**
 * @inspectable
 * @name Index
 * @description The index to return
 * @type number
 */
const index = 0;

const returnValue = Meta.$input[index];

/**
 * @inspectable
 * @name Transition
 * @description Where this block transitions when it is finished
 * @type transition
 */
const transition = '';

Meta.callbacks.transitionTo(transition, returnValue);
