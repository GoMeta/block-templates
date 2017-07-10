/**
 * @header
 * @name POST to API
 * @description Make a POST request to a third-party API.
 * @category Custom APIs
 */

/**
 * @inspectable
 * @name URL
 * @description The URL to make the POST request to
 * @type url
 */
const url = '';

/**
 * @inspectable
 * @name Value
 * @description The string to post, in the form of `key=value`. User's response is available as `$response`
 * @type url
 */
let value = '';
value = value.spilt('$response').join(Meta.data.metadata.responseData);

/**
 * @inspectable
 * @name Transition
 * @description Where this block transitions when it is finished
 * @type transition
 */
const transition = '';

Meta.actions.post(url, value);
Meta.callbacks.transitionTo(transition);
