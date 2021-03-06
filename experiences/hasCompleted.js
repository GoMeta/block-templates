/**
 * @header
 * @name Has completed experience
 * @description Check if a user has completed an experience
 * @image https://assets.cdn.gometa.io/block-icons/hasCompletedExperience.png
 * @category Experiences
 */

/**
 * @inspectable
 * @name Experience
 * @description The experience to test if the user has completed
 * @type experience
 */
const experience = ``;


/**
 * @inspectable
 * @name Has completed
 * @description Where to transition to if the user has completed the experience
 * @type transition
 */
const successTransition = ``;


/**
 * @inspectable
 * @name Has not completed
 * @description Where to transition to if the user has not completed the experience
 * @type transition
 */
const failTransition = ``;

const isComplete = await Meta.helpers.isExperienceComplete(experience);
if(isComplete) {
  Meta.callbacks.transitionTo(successTransition);
} else {
  Meta.callbacks.transitionTo(failTransition);
}
