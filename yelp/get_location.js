/**
 * @header
 * @name Get Business Location
 * @description Get a business's latitude and longitude from a Yelp result.
 * @image https://assets.cdn.gometa.io/block-icons/yelpLogo.png
 * @category Yelp
 * @accepts YelpData
 * @returns Location
 */

/**
 * @inspectable
 * @name Transition
 * @description Where this block transitions
 * @type transition
 */
const transition = ``;

Meta.callbacks.transitionTo(transition, Meta.$input.coordinates);
