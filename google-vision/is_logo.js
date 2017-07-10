/**
 * @header
 * @name Is logo
 * @description Check if a photo taken by the user contains a specified logo
 * @category Google vision
 */

/**
 * @inspectable
 * @name Logo
 * @description The logo to search for
 * @type enum
 * @options Starbucks,Coca cola,Apple
 */
let logo = 'Starbucks';
logo = logo.toLowerCase();

/**
 * @inspectable
 * @name Logo is found
 * @description Where this block transitions if the logo has been found
 * @type transition
 */
const successTransition = '';

/**
 * @inspectable
 * @name Logo is not found
 * @description Where this block transitions if the logo has not been found
 * @type transition
 */
const failTransition = '';

await Meta.vision.classify(Meta.data.metadata.responseData);
if (Meta.vision.containsLogo(logo)) {
	Meta.callbacks.transitionTo(successTransition);
} else {
	Meta.callbacks.transitionTo(failTransition);
}
