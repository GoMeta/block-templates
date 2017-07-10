/**
 * @header
 * @name Response contains
 * @description Check if a response contains a string of text
 * @category Text input
 */

/**
 * @inspectable
 * @name Search string
 * @description The string that the user response must include
 * @type string
 */
const search = '';

/**
 * @inspectable
 * @name On response contains
 * @description Where this block transitions on success
 * @type transition
 */
const successTransition = '';

/**
 * @inspectable
 * @name On response does not contain
 * @description Where this block transitions on fail
 * @type transition
 */
const failTransition = '';

if (Meta.data.metadata.responseData.includes(search)) {
	Meta.callbacks.transitionTo(successTransition);
} else {
	Meta.callbacks.transitionTo(failTransition);
}
