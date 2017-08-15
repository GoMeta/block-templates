/**
 * @header
 * @name Send deep link notification
 * @description Send a notification with a button that launches another app
 * @image https://assets.cdn.gometa.io/block-icons/sendDeeplinkNotification.png
 * @category Notifications
 */

/**
 * @inspectable
 * @name Header
 * @description The header text of the notification
 * @type string
 */
const header = ``;

/**
 * @inspectable
 * @name Text
 * @description The text of the notification
 * @type string
 */
const text = ``;

/**
 * @inspectable
 * @name Transition
 * @description Where this block transitions when it is finished
 * @type transition
 */
const transition = ``;

/**
 * @inspectable
 * @name Button text
 * @description The text of a button to show in the notification
 * @type string
 */
const primaryButton = ``;

/**
 * @inspectable
 * @name URL
 * @description The URL to open when the user presses the button
 * @type url
 */
const primaryButtonValue = ``;


Meta.actions.sendNotification({
  header: header,
  text: text,
  primaryButton: primaryButton,
  primaryButtonLocalCallback: {
    command: 'openNativeURL',
    value: primaryButtonValue,
  },
}, Meta.data.user)

Meta.callbacks.transitionTo(transition);
