/**
 * @header
 * @name Set time gate
 * @description Set a time gate that expires in a certain number of seconds
 * @category Time controls
 */

/**
 * @inspectable
 * @name Gate name
 * @description The name of the gate
 * @type string
 */
const name = '';

/**
 * @inspectable
 * @name Duration
 * @description The length of time, in seconds, that the gate is active
 * @type number
 */
const duration = 0;

/**
 * @inspectable
 * @name Transition
 * @description Where this block transitions when it is finished
 * @type transition
 */
const transition = '';

await Meta.actions.setTimeGate(Meta.data.user, name, duration);

Meta.callbacks.transitionTo(transition);
