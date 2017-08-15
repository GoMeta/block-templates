/**
 * @header
 * @name String is empty
 * @description Check if a response is empty
 * @category String
 * @accepts String<T>
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

if (!Meta.$input) {
	Meta.callbacks.transitionTo(successTransition);
} else {
	Meta.callbacks.transitionTo(failTransition);
}
