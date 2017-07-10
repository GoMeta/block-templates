/**
 * @header
 * @name To decimal precision
 * @description Convert a number to a specific number of decimal places
 * @category Transformers
 */

/**
 * @inspectable
 * @name Precision
 * @description The number of decimal places to return
 * @type number
 */
const precision = '';

let transformed = Number(Meta.data.metadata.responseData) || 0;
transformed = transformed.toPrecision(precision);

/**
 * @inspectable
 * @name Transition
 * @description Where this block transitions when it is finished
 * @type transition
 */
const transition = '';

Meta.callbacks.transitionTo(transition, transformed);
