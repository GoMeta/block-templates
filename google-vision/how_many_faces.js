/**
 * @header
 * @name Count faces
 * @description Connect this block to a Camera Scene to count how many faces are in a photo.
 * @image https://assets.cdn.gometa.io/block-icons/countFaces.png
 * @category Google vision
 * @accepts URL
 */

/**
 * @inspectable
 * @name Comparator
 * @description How many faces to look for
 * @type comparator
 */
const comparator = {"operator":"=","rhs": 1};

/**
 * @inspectable
 * @name Success transition
 * @description Where this block transitions if the criteria are met
 * @type transition
 */
const successTransition = '';

/**
 * @inspectable
 * @name Fail transition
 * @description Where this block transitions if the criteria are not met
 * @type transition
 */
const failTransition = '';

await Meta.vision.classify(Meta.data.metadata.responseData);
const faces = Meta.vision.results.faces.length;

if(compare(faces, comparator.operator, comparator.rhs)) {
  Meta.callbacks.transitionTo(successTransition);
} else {
  Meta.callbacks.transitionTo(failTransition);
}
