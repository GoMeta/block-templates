/**
 * @header
 * @name Get Business URL
 * @description Get a business URL from a Yelp result.
 * @image https://assets.cdn.gometa.io/block-icons/yelpLogo.png
 * @category Yelp
 * @accepts YelpData
 * @returns URL: String
 */

/**
 * @inspectable
 * @name Transition
 * @description Where this block transitions
 * @type transition
 */
const transition = ``;

Meta.callbacks.transitionTo(transition, Meta.$input.url);
