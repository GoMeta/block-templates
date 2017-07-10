/**
 * @header
 * @name Message experience
 * @description Send an experience to a user as a message
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
