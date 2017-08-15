/**
 * @header
 * @name User property exists
 * @description Check if a user property exists
 * @image https://assets.cdn.gometa.io/block-icons/userPropertyExists.png
 * @category User properties
 */

/**
 * @inspectable
 * @name Key
 * @description The property to check
 * @type string
 */
const key = '';

/**
 * @inspectable
 * @name Property exists
 * @description Where this block transitions if the property exists
 * @type transition
 */
const successTransition = '';

/**
 * @inspectable
 * @name Property does not exist
 * @description Where this block transitions if the property does not exists
 * @type transition
 */
const failTransition = '';

if (Meta.helpers.propExists(key)) {
	Meta.callbacks.transitionTo(successTransition);
} else {
	Meta.callbacks.transitionTo(failTransition);
}
