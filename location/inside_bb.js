/**
 * @header
 * @name Inside bounding box
 * @description Check if a user is inside of a geographical bounding box
 * @image https://assets.cdn.gometa.io/block-icons/insideBoundingBox.png
 * @category Location
 */

/**
 * @inspectable
 * @name SW
 * @description The coordinates of the southwest corner of the bounding box in the format `lat,lng`.
 * @type coords
 */
const sw = '';

/**
 * @inspectable
 * @name NE
 * @description The coordinates of the northeast corner of the bounding box in the format `lat,lng`.
 * @type coords
 */
const ne = '';

/**
 * @inspectable
 * @name Is inside
 * @description Where this block transitions if the user is inside the bounding box
 * @type transition
 */
const insideTransition = '';

/**
 * @inspectable
 * @name Is outside
 * @description Where this block transitions if the user is outside the bounding box
 * @type transition
 */
const outsideTransition = '';

const location = Meta.helpers.getProp('current_location');
if (Meta.helpers.boundingBoxContains(location, sw, ne)) {
	Meta.callbacks.transitionTo(insideTransition);
} else {
	Meta.callbacks.transitionTo(outsideTransition);
}
