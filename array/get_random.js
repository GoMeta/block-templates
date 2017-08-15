/**
 * @header
 * @name Get random item
 * @description This block gets a random item from an array.
 * @category Number
 * @accepts Array<T>
 * @returns T
 */

const returnValue = Meta.$input[Math.floor(Math.random() * Meta.$input.length)];

/**
 * @inspectable
 * @name Transition
 * @description Where this block transitions when it is finished
 * @type transition
 */
const transition = '';

Meta.callbacks.transitionTo(transition, returnValue);
