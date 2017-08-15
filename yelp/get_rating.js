/**
 * @header
 * @name Get Business Rating
 * @description Get a business's rating from a Yelp result.
 * @image https://assets.cdn.gometa.io/block-icons/yelpLogo.png
 * @category Yelp
 * @accepts YelpData
 * @returns Number
 */

/**
 * @inspectable
 * @name Transition
 * @description Where this block transitions
 * @type transition
 */
const transition = ``;

Meta.callbacks.transitionTo(transition, Meta.$input.rating);
