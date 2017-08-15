/**
 * @header
 * @name Send Spotify deep link
 * @description Send a notification with a button that opens Spotify
 * @image https://assets.cdn.gometa.io/block-icons/sendSpotifyDeepLink.png
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
 * @description The text of the button that opens Spotify
 * @type string
 */
const primaryButton = ``;

/**
 * @inspectable
 * @name Instagram URL
 * @description The URL of the Spotify page to open
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
  header: 'Spotify',
  text: text,
  leftImage: 'http://assets.cdn.gometa.io/spotify.png',
  primaryButton: primaryButton,
  primaryButtonLocalCallback: {
    command: 'openNativeURL',
    value: primaryButtonValue,
  },
}, Meta.data.user)

Meta.callbacks.transitionTo(transition);
