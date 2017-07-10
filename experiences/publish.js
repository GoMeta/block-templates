/**
 * @header
 * @name Publish experience
 * @description Publish an experience
 * @category Experiences
 */

/**
 * @inspectable
 * @name Experience
 * @description The experience to publish
 * @type experience
 */
const experience = '';

/**
 * @inspectable
 * @name Transition
 * @description Where this block transitions when it is finished
 * @type transition
 */
const transition = '';

await Meta.storyboard.publish(experience);

Meta.callbacks.transitionTo(transition);
