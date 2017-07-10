/**
 * @header
 * @name Parse number
 * @description Remove any non-numbers from the user's response
 * @category Transformers
 */

const transformed = Meta.data.metadata.responseData.replace(/\D+/g, '');

/**
 * @inspectable
 * @name Transition
 * @description Where this block transitions when it is finished
 * @type transition
 */
const transition = '';

Meta.callbacks.transitionTo(transition, transformed);
