/**
 * @header
 * @name Message to user
 * @description Send an experience to a user as a message
 * @image https://assets.cdn.gometa.io/block-icons/messageToUsername.png
 * @category Experiences
 */

/**
 * @inspectable
 * @name Experience
 * @description The experience to send
 * @type experience
 */
const experience = ``;

/**
 * @inspectable
 * @name Username
 * @description The username of the user to send the experience to
 * @type string
 */
const username = ``;

/**
 * @inspectable
 * @name Transition
 * @description Where this block transitions when it is finished
 * @type transition
 */
const transition = ``;

const id = await Meta.contexts.loadIdFromUsername(username);
await Meta.experience.messageExperience(experience, id);

Meta.callbacks.transitionTo(transition);
