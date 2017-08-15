/**
 * @header
 * @name POST to API
 * @description Make a POST request to a third-party API.
 * @category Custom APIs
 * @image https://assets.cdn.gometa.io/block-icons/postToAPI.png
 */

/**
 * @inspectable
 * @name URL
 * @description The URL to make the POSt request to
 * @type url
 */
const url = '';

/**
 * @inspectable
 * @name Value
 * @description The string to post, in the form of `key=value`.
 * @type url
 */
const value = '';

/**
 * @inspectable
 * @name Transition
 * @description Where this block transitions when it is finished
 * @type transition
 */
const transition = '';

Meta.actions.post(url, value);
Meta.callbacks.transitionTo(transition);
