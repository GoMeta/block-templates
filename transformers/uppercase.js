/**
 * @header
 * @name Uppercase text
 * @description Convert the user's response to uppercase
 * @category Transformers
 */

const transformed = Meta.data.metadata.responseData.toUpperCase();

/**
 * @inspectable
 * @name Transition
 * @description Where this block transitions when it is finished
 * @type transition
 */
const transition = '';

Meta.callbacks.transitionTo(transition, transformed);
