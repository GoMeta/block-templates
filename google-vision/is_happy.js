/**
 * @header
 * @name Is happy
 * @description Connect this block to a Camera Scene to check if the most prominent face in a photo is of a person who is happy.
 * @image https://assets.cdn.gometa.io/block-icons/isHappy.png
 * @category Google vision
 * @accepts URL
 */

/**
 * @inspectable
 * @name Is person happy
 * @description Where this block transitions on success
 * @type transition
 */
const successTransition = '';

/**
 * @inspectable
 * @name Is not happy
 * @description Where this block transitions on fail
 * @type transition
 */
const failTransition = '';

await Meta.vision.classify(Meta.data.metadata.responseData);
if (Meta.vision.results.faces.length > 0) {
	if (Meta.vision.results.faces[0].joy) {
		Meta.callbacks.transitionTo(successTransition);
	} else {
		Meta.callbacks.transitionTo(failTransition);
	}
} else {
	Meta.callbacks.transitionTo(failTransition);
}
