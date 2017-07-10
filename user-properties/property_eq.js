/**
 * @header
 * @name User property equals
 * @description Test the value of a user property
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
 * @name Value
 * @description The value the property must equal in order to succeed
 * @type string
 */
const value = '';

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

if (Meta.helpers.getProp(key) == value) {
	Meta.callbacks.transitionTo(successTransition);
} else {
	Meta.callbacks.transitionTo(failTransition);
}
