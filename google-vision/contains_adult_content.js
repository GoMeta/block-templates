/**
 * @header
 * @name Contains adult content
 * @description Check if the image contains adult content
 * @category Google vision
 */

/**
 * @inspectable
 * @name Does contain adult content
 * @description Where this block transitions on success
 * @type transition
 */
const successTransition = '';

/**
 * @inspectable
 * @name Does not contain adult content
 * @description Where this block transitions on fail
 * @type transition
 */
const failTransition = '';

await Meta.vision.classify(Meta.data.metadata.responseData);
if (Meta.vision.results.isAdult) {
	Meta.callbacks.transitionTo(successTransition);
} else {
	Meta.callbacks.transitionTo(failTransition);
}
