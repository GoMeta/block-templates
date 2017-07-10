/**
 * @header
 * @name User property greater than or equal to
 * @description Check if a user property is greater than or equal to a number
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
 * @description The value the property must be greater than or equal to
 * @type number
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

if (!Meta.helpers.propExists(key)) {
	Meta.callbacks.transitionTo(failTransition);
} else {
	if (Meta.helpers.getProp(key, 0) >= value) {
		Meta.callbacks.transitionTo(successTransition);
	} else {
		Meta.callbacks.transitionTo(failTransition);
	}
}
