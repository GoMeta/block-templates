/**
 * @header
 * @name Send Uber deep link
 * @description Send a notification with a button that opens Uber
 * @image https://assets.cdn.gometa.io/block-icons/sendDeeplinkNotification.png
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
 * @name Uber URL
 * @description The URL to open in Uber. See: https://developer.uber.com/products/ride-requests-deeplink
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
  header: 'Uber',
  text: text,
  leftImage: 'http://assets.cdn.gometa.io/uber.png',
  primaryButton: primaryButton,
  primaryButtonLocalCallback: {
    command: 'openNativeURL',
    value: primaryButtonValue,
  },
}, Meta.data.user)

Meta.callbacks.transitionTo(transition);
