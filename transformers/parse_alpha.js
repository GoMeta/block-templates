/**
 * @header
 * @name Parse alpha
 * @description Remove any non-alpha characters from the response
 * @category Transformers
 */

const transformed = Meta.data.metadata.responseData.replace(/[^a-zA-Z]+/g, '');

/**
 * @inspectable
 * @name Transition
 * @description Where this block transitions when it is finished
 * @type transition
 */
const transition = '';

Meta.callbacks.transitionTo(transition, transformed);
