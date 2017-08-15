/**
 * @header
 * @name Passes regex validation (advanced)
 * @description Check if a user's response passes a custom regex validation
 * @image https://assets.cdn.gometa.io/block-icons/passRegexValidation.png
 * @category String
 * @accepts String<T>
 */

/**
 * @inspectable
 * @name Regex
 * @description The regex to test
 * @type string
 */
const value = '';

/**
 * @inspectable
 * @name Is email
 * @description Where this block transitions if the response is an email
 * @type transition
 */
const successTransition = '';

/**
 * @inspectable
 * @name Is not email
 * @description Where this block transitions if the response is not an email
 * @type transition
 */
const failTransition = '';

if(value.test(Meta.data.metadata.responseData)) {
  Meta.callbacks.transitionTo(successTransition);
} else {
  Meta.callbacks.transitionTo(failTransition);
}
