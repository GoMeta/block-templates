/**
 * @header
 * @name Contains adult content
 * @description Connect this block to a Camera Scene to check if the image contains adult content.
 * @image https://assets.cdn.gometa.io/block-icons/containsAdultContent.png
 * @category Google vision
 * @accepts URL
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
