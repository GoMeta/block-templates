/**
 * @header
 * @name Is object
 * @description Connect this block to a Camera Scene to check if a photo taken by the user contains a specified object.
 * @image https://assets.cdn.gometa.io/block-icons/isObject.png
 * @category Google vision
 * @accepts URL
 */

/**
 * @inspectable
 * @name Object
 * @description The object to search for
 * @type string
 */
let object = 'Dog';
object = object.toLowerCase();

/**
 * @inspectable
 * @name Object is found
 * @description Where this block transitions if the object has been found
 * @type transition
 */
const successTransition = '';

/**
 * @inspectable
 * @name Object is not found
 * @description Where this block transitions if the object has not been found
 * @type transition
 */
const failTransition = '';

await Meta.vision.classify(Meta.data.metadata.responseData);
if (Meta.vision.containsObject(object)) {
	Meta.callbacks.transitionTo(successTransition);
} else {
	Meta.callbacks.transitionTo(failTransition);
}
