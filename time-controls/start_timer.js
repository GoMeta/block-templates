/**
 * @header
 * @name Start Timer
 * @description Starts a timer with the specified name
 * @image https://assets.cdn.gometa.io/block-icons/startTimer.png
 * @category Time Controls
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
const transition = ``;

Meta.$user[`${timerName}:start`] = Math.floor((new Date()).getTime() / 1000);
Meta.$user[`${timerName}:raw`] = 0;
Meta.$user[timerName] = 'Timer running';

Meta.callbacks.transitionTo(transition);

