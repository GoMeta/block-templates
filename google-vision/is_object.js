/**
 * @header
 * @name Is object
 * @description Check if a photo taken by the user contains a specified object
 * @category Google vision
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
