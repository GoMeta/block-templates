/**
 * @header
 * @name Check dice roll
 * @description Roll dice and check the result
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
const dice = '';

/**
 * @inspectable
 * @name Comparator
 * @description What expected value to test
 * @type comparator
 */
const comparator = {"operator":"=","rhs": 1};

/**
 * @inspectable
 * @name On success
 * @description Where this block transitions if the criteria are met
 * @type transition
 */
const successTransition = '';

/**
 * @inspectable
 * @name On failure
 * @description Where this block transitions if the criteria are not met
 * @type transition
 */
const failTransition = '';

const roll = Meta.probability.roll(dice);
if (compare(roll, comparator.operator, comparator.rhs)) {
  Meta.callbacks.transitionTo(successTransition, roll);
} else {
  Meta.callbacks.transitionTo(failTransition, roll);
}
