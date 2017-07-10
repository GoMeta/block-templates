/**
 * @header
 * @name Find and replace
 * @description Replace all instances of a string within the user's response
 * @category Transformers
 */

/**
 * @inspectable
 * @name Value to find
 * @description The value to find within the user's response
 * @type string
 */
const find = '';

/**
 * @inspectable
 * @name Replacement
 * @description The value to use as a replacement
 * @type string
 */
const replace = '';

const transformed = Meta.data.metadata.responseData.split(find).join(replace);

/**
 * @inspectable
 * @name Transition
 * @description Where this block transitions when it is finished
 * @type transition
 */
const transition = '';

Meta.callbacks.transitionTo(transition, transformed);
