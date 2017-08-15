/**
 * @header
 * @name Save found object
 * @description Save the name of the most prominent object in an image to a user property.
 * @image https://assets.cdn.gometa.io/block-icons/saveFoundObject.png
 * @category Google vision
 * @accepts URL
 */

/**
 * @inspectable
 * @name key
 * @description The key to save the found property under
 * @type string
 */
let key = 'found_image';

/**
 * @inspectable
 * @name Transition
 * @description Where this block transitions next
 * @type transition
 */
const transition = '';

const result = await Meta.vision.classify(Meta.data.metadata.responseData);
if(result.labels.length > 0) {
  await Meta.actions.setProp(Meta.data.user, key, result.labels[0]);
} else {
  await Meta.actions.setProp(Meta.data.user, key, 'Nothing');
}
Meta.callbacks.transitionTo(transition);
