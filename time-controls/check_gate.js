/**
 * @header
 * @name Check time gate active
 * @description Check if a time gate is still active
 * @image https://assets.cdn.gometa.io/block-icons/checkTimeGateActive.png
 * @category Time controls
 */

/**
 * @inspectable
 * @name Gate name
 * @description The name of the gate to check
 * @type string
 */
const name = '';

/**
 * @inspectable
 * @name Gate is still active
 * @description Where this block transitions if the gate is still active
 * @type transition
 */
const activeTransition = '';

/**
 * @inspectable
 * @name Gate has expired
 * @description Where this block transitions if the gate has expired
 * @type transition
 */
const inactiveTransition = '';

if (Meta.helpers.timeGateIsActive(name)) {
	Meta.callbacks.transitionTo(activeTransition);
} else {
	Meta.callbacks.transitionTo(inactiveTransition);
}
