/**
 * @header
 * @name Clear time gate
 * @description Set a time gate that expires in a certain number of seconds
 * @image https://assets.cdn.gometa.io/block-icons/clearTimeGate.png
 * @category Time controls
 */

/**
 * @inspectable
 * @name Gate name
 * @description The name of the gate to clear
 * @type string
 */
const name = '';

/**
 * @inspectable
 * @name Transition
 * @description Where this block transitions when it is finished
 * @type transition
 */
const transition = '';

await Meta.actions.clearTimeGate(Meta.data.user, name);

Meta.callbacks.transitionTo(transition);
