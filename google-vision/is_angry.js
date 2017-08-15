/**
 * @header
 * @name Is angry
 * @description Connect this block to a Camera Scene to check if the most prominent face in a photo is of a person who is angry.
 * @image https://assets.cdn.gometa.io/block-icons/isAngry.png
 * @category Google vision
 * @accepts URL
 */

/**
 * @inspectable
 * @name Is person angry
 * @description Where this block transitions on success
 * @type transition
 */
const successTransition = '';

/**
 * @inspectable
 * @name Is not angry
 * @description Where this block transitions on fail
 * @type transition
 */
const failTransition = '';

await Meta.vision.classify(Meta.data.metadata.responseData);
if (Meta.vision.results.faces.length > 0) {
	if (Meta.vision.results.faces[0].anger) {
		Meta.callbacks.transitionTo(successTransition);
	} else {
		Meta.callbacks.transitionTo(failTransition);
	}
} else {
	Meta.callbacks.transitionTo(failTransition);
}
