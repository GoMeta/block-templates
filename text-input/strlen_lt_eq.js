/**
 * @header
 * @name Response length less than or equal to
 * @description Check if a response length is less than or equal to a number
 * @category Text input
 */

/**
 * @inspectable
 * @name Value
 * @description The number that the response length must be less than or equal to
 * @type number
 */
const value = 0;

/**
 * @inspectable
 * @name Length less than or equal
 * @description Where this block transitions on success
 * @type transition
 */
const successTransition = '';

/**
 * @inspectable
 * @name Length not less than or equal
 * @description Where this block transitions on fail
 * @type transition
 */
const failTransition = '';

if (Meta.data.metadata.responseData.length <= value) {
	Meta.callbacks.transitionTo(successTransition);
} else {
	Meta.callbacks.transitionTo(failTransition);
}
