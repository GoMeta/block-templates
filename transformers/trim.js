/**
 * @header
 * @name Trim
 * @description Trim any spaces from the beginning or end of a user's response
 * @category Transformers
 */

const transformed = Meta.data.metadata.responseData.trim();

/**
 * @inspectable
 * @name Transition
 * @description Where this block transitions when it is finished
 * @type transition
 */
const transition = '';

Meta.callbacks.transitionTo(transition, transformed);
