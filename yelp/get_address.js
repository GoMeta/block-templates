/**
 * @header
 * @name Get Business Address
 * @description Get a business's address from a Yelp result.
 * @image https://assets.cdn.gometa.io/block-icons/yelpLogo.png
 * @category Yelp
 * @accepts YelpData
 * @returns String
 */

/**
 * @inspectable
 * @name Transition
 * @description Where this block transitions
 * @type transition
 */
const transition = ``;

Meta.callbacks.transitionTo(transition, `${Meta.$input.location.address1}, ${Meta.$input.location.city}, ${Meta.$input.location.state}`);
