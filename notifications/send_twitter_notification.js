/**
 * @header
 * @name Send Twitter deep link
 * @description Send a notification with a button that opens Twitter
 * @image https://assets.cdn.gometa.io/block-icons/sendTwitterDeepLink.png
 * @category Notifications
 */

/**
 * @inspectable
 * @name Text
 * @description The text of the notification
 * @type string
 */
const text = ``;

/**
 * @inspectable
 * @name Button text
 * @description The text of the button that opens Twitter
 * @type string
 */
const primaryButton = ``;

/**
 * @inspectable
 * @name Twitter URL
 * @description The URL of the Twitter profile or post to open
 * @type url
 */
const primaryButtonValue = ``;

/**
 * @inspectable
 * @name Transition
 * @description Where this block transitions when it is finished
 * @type transition
 */
const transition = ``;


Meta.actions.sendNotification({
  header: 'Twitter',
  text: text,
  leftImage: 'http://assets.cdn.gometa.io/twitter.png',
  primaryButton: primaryButton,
  primaryButtonLocalCallback: {
    command: 'openNativeURL',
    value: primaryButtonValue,
  },
}, Meta.data.user)

Meta.callbacks.transitionTo(transition);
