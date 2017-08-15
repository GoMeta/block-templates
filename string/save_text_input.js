/**
 * @header
 * @name Save user response
 * @description Save an input to a user property
 * @image https://assets.cdn.gometa.io/block-icons/saveUserResponse.png
 * @category String
 * @accepts String<T>
 */

/**
 * @inspectable
 * @name Key
 * @description The name of the property to save.
 * @type string
 */
const key = '';

/**
 * @inspectable
 * @name Transition
 * @description Where this block transitions when it is finished
 * @type transition
 */
const transition = '';

await Meta.actions.setProp(Meta.data.user, key, Meta.data.metadata.responseData);

Meta.callbacks.transitionTo(transition);
