/**
 * @header
 * @name Is person
 * @description Check if a photo taken by the user contains a person
 * @category Google vision
 */

/**
 * @inspectable
 * @name Person is found
 * @description Where this block transitions if a person has been found
 * @type transition
 */
const successTransition = '';

/**
 * @inspectable
 * @name Person is not found
 * @description Where this block transitions if a person has not been found
 * @type transition
 */
const failTransition = '';

await Meta.vision.classify(Meta.data.metadata.responseData);
if (Meta.vision.results.faces.length > 0) {
	Meta.callbacks.transitionTo(successTransition);
} else {
	Meta.callbacks.transitionTo(failTransition);
}