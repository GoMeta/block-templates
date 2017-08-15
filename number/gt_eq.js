/**
 * @header
 * @name Response greater than or equal to
 * @description Check if a response is greater than or equal to a number
 * @category Number
 * @accepts Number<T>
 */

/**
 * @inspectable
 * @name Value
 * @description The number that the response must be greater than or equal to
 * @type number
 */
const value = 0;

/**
 * @inspectable
 * @name Is greater than or equal to
 * @description Where this block transitions on success
 * @type transition
 */
const successTransition = '';

/**
 * @inspectable
 * @name Is not greater than or equal to
 * @description Where this block transitions on fail
 * @type transition
 */
const failTransition = '';

if (Meta.data.metadata.responseData >= value) {
	Meta.callbacks.transitionTo(successTransition);
} else {
	Meta.callbacks.transitionTo(failTransition);
}
