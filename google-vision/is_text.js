/**
 * @header
 * @name Is text
 * @description Check if a photo taken by the user contains a string of text
 * @category Google vision
 */

/**
 * @inspectable
 * @name Text
 * @description The text to search for
 * @type string
 */
let text = 'Text';
text = text.toLowerCase();

/**
 * @inspectable
 * @name Text is found
 * @description Where this block transitions if the text has been found
 * @type transition
 */
const successTransition = '';

/**
 * @inspectable
 * @name Text is not found
 * @description Where this block transitions if the text has not been found
 * @type transition
 */
const failTransition = '';

await Meta.vision.classify(Meta.data.metadata.responseData);
if (Meta.vision.containsText(text)) {
	Meta.callbacks.transitionTo(successTransition);
} else {
	Meta.callbacks.transitionTo(failTransition);
}
