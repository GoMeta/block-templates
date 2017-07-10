/**
 * @header
 * @name Lowercase text
 * @description Convert the user's response to lowercase
 * @category Transformers
 */

const transformed = Meta.data.metadata.responseData.toLowerCase();

/**
 * @inspectable
 * @name Transition
 * @description Where this block transitions when it is finished
 * @type transition
 */
const transition = '';

Meta.callbacks.transitionTo(transition, transformed);
