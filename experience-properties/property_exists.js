/**
 * @header
 * @name Experience property exists
 * @description Check if a temporary experience property exists
 * @category Experience properties
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

if (Meta.$experience[key]) {
  Meta.callbacks.transitionTo(successTransition);
} else {
  Meta.callbacks.transitionTo(failTransition);
}
