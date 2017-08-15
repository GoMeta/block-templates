/**
 * @header
 * @name Generate random number
 * @description Generate a random number
 * @category Number
 * @returns T
 */

/**
 * @inspectable
 * @name Lower bound
 * @description The smallest number to generate
 * @type number
 */
const lower = 0;

/**
 * @inspectable
 * @name Upper bound
 * @description The largest number to generate
 * @type number
 */
const upper = 10;

const number = Math.floor(Math.random() * (upper - lower + 1)) + lower;

/**
 * @inspectable
 * @name Transition
 * @description Where this block transitions when it is finished
 * @type transition
 */
const transition = '';

Meta.callbacks.transitionTo(transition, transformed);
