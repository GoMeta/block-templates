/**
 * @header
 * @name Response equals
 * @description Check if a response equals a string of text
 * @image https://assets.cdn.gometa.io/block-icons/responseEquals.png
 * @category String
 * @accepts String<T>
 */

/**
 * @inspectable
 * @name Value
 * @description The string that the user response must equal
 * @type string
 */
const value = '';

/**
 * @inspectable
 * @name Is equal
 * @description Where this block transitions on success
 * @type transition
 */
const successTransition = '';

/**
 * @inspectable
 * @name Is not equal
 * @description Where this block transitions on fail
 * @type transition
 */
const failTransition = '';

if (Meta.data.metadata.responseData == value) {
	Meta.callbacks.transitionTo(successTransition);
} else {
	Meta.callbacks.transitionTo(failTransition);
}
