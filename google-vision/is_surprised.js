/**
 * @header
 * @name Is surprised
 * @description Check if the most prominent face in a photo is of a person who is surprised
 * @category Google vision
 */

/**
 * @inspectable
 * @name Is person surprised
 * @description Where this block transitions on success
 * @type transition
 */
const successTransition = '';

/**
 * @inspectable
 * @name Is not surprised
 * @description Where this block transitions on fail
 * @type transition
 */
const failTransition = '';

await Meta.vision.classify(Meta.data.metadata.responseData);
if (Meta.vision.results.faces.length > 0) {
	if (Meta.vision.results.faces[0].surprise) {
		Meta.callbacks.transitionTo(successTransition);
	} else {
		Meta.callbacks.transitionTo(failTransition);
	}
} else {
	Meta.callbacks.transitionTo(failTransition);
}
