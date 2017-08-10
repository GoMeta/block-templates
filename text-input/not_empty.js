/**
 * @header
 * @name String is not empty
 * @description Check if a response is not empty
 * @category Text input
 */

/**
 * @inspectable
 * @name Not empty
 * @description Where this block transitions on success
 * @type transition
 */
const successTransition = '';

/**
 * @inspectable
 * @name Empty
 * @description Where this block transitions on fail
 * @type transition
 */
const failTransition = '';

if (Meta.data.metadata.responseData) {
	Meta.callbacks.transitionTo(successTransition);
} else {
	Meta.callbacks.transitionTo(failTransition);
}
