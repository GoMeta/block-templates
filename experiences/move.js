/**
 * @header
 * @name Move experience
 * @description Move an experience to a new position
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
 * @name New position
 * @description The new position in the format `lat,lng`
 * @type coords
 */
let position = '';
position = position.split(',').map(coord => parseFloat(coord.trim()));

/**
 * @inspectable
 * @name Transition
 * @description Where this block transitions when it is finished
 * @type transition
 */
const transition = '';

if (position.length === 2 &&
	position[0] && position[1]) {
	await Meta.storyboard.move(experience, position[0], position[1]);
}

Meta.callbacks.transitionTo(transition);
