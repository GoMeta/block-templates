/**
 * @header
 * @name Send notification
 * @description Send a notification to the user
 * @image https://assets.cdn.gometa.io/block-icons/sendNotification.png
 * @category Notifications
 */

/**
 * @inspectable
 * @name Header
 * @description The header text of the notification
 * @type string
 */
const header = '';

/**
 * @inspectable
 * @name Text
 * @description The text of the notification
 * @type string
 */
const text = '';

/**
 * @inspectable
 * @name Transition
 * @description Where this block transitions when it is finished
 * @type transition
 */
const transition = '';

/**
 * @inspectable
 * @name Delay
 * @description The number of seconds to wait before sending the notification
 * @type number
 * @optional
 */
const delay = 0;

/**
 * @inspectable
 * @name Accessory text
 * @description A small accessory text (e.g., a percentage) in the top right of the notification
 * @type string
 * @optional
 */
const accessory = '';

/**
 * @inspectable
 * @name Progress
 * @description Show a progress bar with a value from 0 to 1
 * @type number
 * @optional
 */
const progress = 0;

/**
 * @inspectable
 * @name Left image
 * @description An image to show on the left of the notification
 * @type url
 * @optional
 */
const leftImage = '';

/**
 * @inspectable
 * @name Right image
 * @description An image to show on the right of the notification
 * @type url
 * @optional
 */
const rightImage = '';

/**
 * @inspectable
 * @name Primary image
 * @description A big image to show in the notification
 * @type url
 * @optional
 */
const primaryImage = '';

/**
 * @inspectable
 * @name Primary button text
 * @description The text of a button to show in the notification
 * @type string
 * @optional
 */
const primaryButton = '';

/**
 * @inspectable
 * @name Primary button action
 * @description The action to take when the user presses the button
 * @type enum
 * @options Nothing, Open URL in Metaverse, Open URL in browser
 * @optional
 */
let primaryButtonAction = 'Nothing';
if (primaryButtonAction === 'Nothing') {
	primaryButtonAction = null;
} else if (primaryButtonAction === 'Open URL in Metaverse') {
	primaryButtonAction = 'openURL';
} else {
	primaryButtonAction = 'openNativeURL';
}

/**
 * @inspectable
 * @name Primary button value
 * @description The URL to open when the user presses the button
 * @type url
 * @optional
 */
const primaryButtonValue = '';

if (delay > 0) {
	Meta.actions.delay(delay, () => {
		Meta.actions.sendNotification({
			header: header || null,
			text: text || null,
			accessory: accessory || null,
			process: progress || null,
			leftImage: leftImage || null,
			rightImage: rightImage || null,
			primaryImage: primaryImage || null,
			primaryButton: primaryButton || null,
			primaryButtonAction: primaryButtonAction || null,
			primaryButtonValue: primaryButtonValue || null,
		}, Meta.data.user);
	});
} else {
	Meta.actions.sendNotification({
		header: header || null,
		text: text || null,
		accessory: accessory || null,
		process: progress || null,
		leftImage: leftImage || null,
		rightImage: rightImage || null,
		primaryImage: primaryImage || null,
		primaryButton: primaryButton || null,
		primaryButtonAction: primaryButtonAction || null,
		primaryButtonValue: primaryButtonValue || null,
	}, Meta.data.user);
}

Meta.callbacks.transitionTo(transition);
