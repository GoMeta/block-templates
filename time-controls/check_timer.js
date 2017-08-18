/**
 * @header
 * @name Check Timer
 * @description Transition based on how much time has passed since a start time block
 * @image https://assets.cdn.gometa.io/block-icons/checkTimer.png
 * @category Time controls
 */

/**
 * @inspectable
 * @name Timer name
 * @description The name of the timer to be compared
 * @type text
 */
const timerName = ``;

/**
 * @inspectable
 * @name Comparator
 * @description What expected value to test
 * @type comparator
 * @lhs Elapsed time
 */
const comparator = {"operator":"=","rhs": 1};

/**
 * @inspectable
 * @name Unit of time
 * @description The unit of time to use for comparason
 * @type enum
 * @options Seconds,Minutes,Hours,Days
 */
const timeUnit = `Seconds`;

/**
 * @inspectable
 * @name On success
 * @description Transition to take if the condition is true
 * @type transition
 */
const successTransition = ``;

/**
 * @inspectable
 * @name On failure
 * @description Transition to take if the condition is false
 * @type transition
 */
const failTransition = ``;

let raw = 0;
const isEnd = Meta.$props[`${timerName}:raw`];
if(isEnd === 0) {
  const start = Meta.$props[`${timerName}:start`];
  raw = parseInt((new Date().getTime() / 1000) - start);
} else {
  raw = isEnd;
}

let rawUnit = 1;
switch(timeUnit) {
  case `Seconds`:
    rawUnit = 1;
    break;
  case `Minutes`:
    rawUnit = 60;
    break;
  case `Hours`:
    rawUnit = 3600;
    break;
  case `Days`:
    rawUnit = 86400;
    break;
}

if (compare(raw, comparator.operator, comparator.rhs * rawUnit)) {
  Meta.callbacks.transitionTo(successTransition);
} else {
  Meta.callbacks.transitionTo(failTransition);
}
