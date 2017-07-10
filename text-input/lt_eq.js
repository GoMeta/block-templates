/**
 * @header
 * @name Response less than or equal to
 * @description Check if a response is less than or equal to a number
 * @category Text input
 */

/**
 * @inspectable
 * @name Value
 * @description The number that the response must be less than or equal to
 * @type number
 */
const value = 0;

/**
 * @inspectable
 * @name Is less than or equal to
 * @description Where this block transitions on success
 * @type transition
 */
const successTransition = '';

/**
 * @inspectable
 * @name Is not less than or equal to
 * @description Where this block transitions on fail
 * @type transition
 */
const failTransition = '';

if (Meta.data.metadata.responseData <= value) {
	Meta.callbacks.transitionTo(successTransition);
} else {
	Meta.callbacks.transitionTo(failTransition);
}
