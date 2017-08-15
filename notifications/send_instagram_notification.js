/**
 * @header
 * @name Send Instagram deep link
 * @description Send a notification with a button that opens Instagram
 * @image https://assets.cdn.gometa.io/block-icons/sendInstagramDeepLink.png
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
 * @description The text of the button that opens Instagram
 * @type string
 */
const primaryButton = ``;

/**
 * @inspectable
 * @name Instagram URL
 * @description The URL of the Instagram user or post to open
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
  header: 'Instagram',
  text: text,
  leftImage: 'http://assets.cdn.gometa.io/instagram.png',
  primaryButton: primaryButton,
  primaryButtonLocalCallback: {
    command: 'openNativeURL',
    value: primaryButtonValue,
  },
}, Meta.data.user)

Meta.callbacks.transitionTo(transition);
