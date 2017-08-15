/**
 * @header
 * @name Message to current user
 * @description Send an experience to a user as a message
 * @image https://assets.cdn.gometa.io/block-icons/messageExperience.png
 * @category Experiences
 */

/**
 * @inspectable
 * @name Experience
 * @description The experience to send
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

await Meta.experience.messageExperience(experience, Meta.data.user);

Meta.callbacks.transitionTo(transition);
