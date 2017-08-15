/**
 * @header
 * @name Environment property exists
 * @description Check if an environment property exists
 * @image https://assets.cdn.gometa.io/block-icons/environmentPropertyExists.png
 * @category Environment properties
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

if (Meta.$env[key]) {
  Meta.callbacks.transitionTo(successTransition);
} else {
  Meta.callbacks.transitionTo(failTransition);
}
