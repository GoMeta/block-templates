/**
 * @header
 * @name Start Timer
 * @description Starts a timer with the specified name
 * @category Timing
 */
 
/**
 * @inspectable
 * @name Timer Name
 * @description The name of the timer to start
 * @type string
 */
const timerName = `timer`;

/**
 * @inspectable
 * @name Transition
 * @description Where this block transitions when it is finished
 * @type transition
 */
const transition = `aaed50f5-b7a2-4348-9242-4724a9eaf7b1`;

await Meta.actions.setProp(Meta.data.user, `${timerName}:start`, Math.floor((new Date()).getTime() / 1000));
await Meta.actions.setProp(Meta.data.user, `${timerName}:raw`, 0);
await Meta.actions.setProp(Meta.data.user, timerName, 'Timer still running');

Meta.callbacks.transitionTo(transition);

