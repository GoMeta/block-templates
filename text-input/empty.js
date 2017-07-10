/**
 * @header
 * @name String is empty
 * @description Check if a response is empty
 * @category Text input
 */

/**
 * @inspectable
 * @name On empty
 * @description Where this block transitions on success
 * @type transition
 */
const successTransition = '';

/**
 * @inspectable
 * @name On not empty
 * @description Where this block transitions on fail
 * @type transition
 */
const failTransition = '';

if (!Meta.data.metadata.responseData) {
	Meta.callbacks.transitionTo(successTransition);
} else {
	Meta.callbacks.transitionTo(failTransition);
}
