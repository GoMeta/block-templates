/**
 * @header
 * @name Response is number
 * @description Check if a user's response is a number
 * @category Text input
 */

/**
 * @inspectable
 * @name Is number
 * @description Where this block transitions if the response is a number
 * @type transition
 */
const successTransition = '';

/**
 * @inspectable
 * @name Is not number
 * @description Where this block transitions if the response is not a number
 * @type transition
 */
const failTransition = '';

if(!isNaN(Meta.data.metadata.responseData)) {
  Meta.callbacks.transitionTo(successTransition);
} else {
  Meta.callbacks.transitionTo(failTransition);
}
