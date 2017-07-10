/**
 * @header
 * @name Response greater than
 * @description Check if a response is greater than a number
 * @category Text input
 */

/**
 * @inspectable
 * @name Value
 * @description The number that the response must be greater than
 * @type number
 */
const value = 0;

/**
 * @inspectable
 * @name Is greater than
 * @description Where this block transitions on success
 * @type transition
 */
const successTransition = '';

/**
 * @inspectable
 * @name Is not greater than
 * @description Where this block transitions on fail
 * @type transition
 */
const failTransition = '';

if (Meta.data.metadata.responseData > value) {
	Meta.callbacks.transitionTo(successTransition);
} else {
	Meta.callbacks.transitionTo(failTransition);
}
