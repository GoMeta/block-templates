/**
 * @header
 * @name Stop Timer
 * @description Stops a timer with the specified name
 * @category Timing
 */

/**
 * @inspectable
 * @name Timer Name
 * @description The name of the timer to stop
 * @type string
 */
const timerName = ``;

/**
 * @inspectable
 * @name Transition
 * @description Where this block transitions when it is finished
 * @type transition
 */
const transition = ``;

function diffTime(diff) {
  let out = '';
  if(diff > 86400) {
    out += `${Math.floor(diff / 86400)} days, `;
    diff %= 86400;
  }
  if(diff > 3600) {
    out += `${Math.floor(diff / 3600)} hours, `;
    diff %= 3600;
  }
  if(diff > 60) {
    out += `${Math.floor(diff / 60)} minutes, `;
    diff %= 60;
  }
  return `${out}${diff} seconds`;
}

const start = await Meta.helpers.getProp(`${timerName}:start`);
const raw = parseInt((new Date().getTime() / 1000) - start);

await Meta.actions.setProp(Meta.data.user, `${timerName}:raw`, raw);
await Meta.actions.setProp(Meta.data.user, timerName, diffTime(raw));

Meta.callbacks.transitionTo(transition);

