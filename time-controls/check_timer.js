/**
 * @header
 * @name Check Timer
 * @description Transition based on how much time has passed since a start time block
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
 * @name Comparason
 * @description The operation to compare the timer with
 * @type enum
 * @options Greater than,Less than,Equal to
 */
const comparator = `Less than`;

/**
 * @inspectable
 * @name Time value
 * @description The amount of time used to compare
 * @type number
 */
const time = 0;

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
 * @name Condition is true
 * @description Transition to take if the condition is true
 * @type transition
 */
const trueTransition = ``;

/**
 * @inspectable
 * @name Condition is false
 * @description Transition to take if the condition is false 
 * @type transition
 */
const falseTransition = ``;

let raw = 0;
const isEnd = await Meta.helpers.getProp(`${timerName}:raw`);
if(isEnd === 0) {
  const start = await Meta.helpers.getProp(`${timerName}:start`);
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

const compTime = time * rawUnit;

if(comparator === `Less than`) {
  if(raw < compTime) {
    Meta.callbacks.transitionTo(trueTransition);
  } else {
    Meta.callbacks.transitionTo(falseTransition);
  }
} else if(comparator === `Greater than`) {
  if(raw > compTime) {
    Meta.callbacks.transitionTo(trueTransition);
  } else {
    Meta.callbacks.transitionTo(falseTransition);
  }
} else if(comparator === `Equal to`) {
  if(Math.floor(raw / rawUnit) === Math.floor(raw / compTime)) {
    Meta.callbacks.transitionTo(trueTransition);
  } else {
    Meta.callbacks.transitionTo(falseTransition);
  }
} else {
  Meta.callbacks.transitionTo(falseTransition);
}

