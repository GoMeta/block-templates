/**
 * @header
 * @name Roll dice
 * @description Return the result of a dice roll
 * @image https://assets.cdn.gometa.io/block-icons/rollDice.png
 * @category Probability
 * @returns DiceRoll: Number
 */

/**
 * @inspectable
 * @name Dice string
 * @description The dice to roll of the form <n>d<s>(+/-m) (e.g., 1d6, 2d4, with optional modifiers to add or subtract numbers, like 2d6+1)
 * @type string
 */
const dice = ``;

/**
 * @inspectable
 * @name Transition
 * @description Where this block transitions
 * @type transition
 */
const transition = ``;

const roll = Meta.probability.roll(dice);
Meta.callbacks.transitionTo(transition, roll);
