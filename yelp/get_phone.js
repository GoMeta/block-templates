/**
 * @header
 * @name Get Business Phone Number
 * @description Get a business's phone number from a Yelp result.
 * @image https://assets.cdn.gometa.io/block-icons/yelpLogo.png
 * @category Yelp
 * @accepts YelpData
 * @returns PhoneNumber: String
 */

/**
 * @inspectable
 * @name Transition
 * @description Where this block transitions
 * @type transition
 */
const transition = ``;

Meta.callbacks.transitionTo(transition, Meta.$input.phone);
