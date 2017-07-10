/**
 * @header
 * @name Unpublish experience
 * @description Unpublish an experience
 * @category Experiences
 */

/**
 * @inspectable
 * @name Experience
 * @description The experience to unpublish
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

await Meta.storyboard.unpublish(experience);

Meta.callbacks.transitionTo(transition);
