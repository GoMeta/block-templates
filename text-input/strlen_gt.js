/**
 * @header
 * @name Response length greater than
 * @description Check if a response length is greater than a number
 * @category Text input
 */

/**
 * @inspectable
 * @name Value
 * @description The number that the response length must be greater than
 * @type number
 */
const value = 0;

/**
 * @inspectable
 * @name Length greater than
 * @description Where this block transitions on success
 * @type transition
 */
const successTransition = '';

/**
 * @inspectable
 * @name Length not greater than
 * @description Where this block transitions on fail
 * @type transition
 */
const failTransition = '';

if (Meta.data.metadata.responseData.length > value) {
	Meta.callbacks.transitionTo(successTransition);
} else {
	Meta.callbacks.transitionTo(failTransition);
}
