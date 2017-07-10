/**
 * @header
 * @name Parse alphanumeric
 * @description Remove any non-alphanumeric characters from the response
 * @category Transformers
 */

const transformed = Meta.data.metadata.responseData.replace(/[^a-z0-9]/gi, '');

/**
 * @inspectable
 * @name Transition
 * @description Where this block transitions when it is finished
 * @type transition
 */
const transition = '';

Meta.callbacks.transitionTo(transition, transformed);
