/**
 * @header
 * @name Count faces
 * @description Find out how many faces are in an image
 * @category Google vision
 */

/**
 * @inspectable
 * @name Transition
 * @description Where this block transitions after counting the number of faces
 * @type transition
 */
const transition = '';

await Meta.vision.classify(Meta.data.metadata.responseData);
Meta.callbacks.transitionTo(transition, Meta.vision.results.faces.length);