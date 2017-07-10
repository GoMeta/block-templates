/**
 * @header
 * @name Dice roll greater than or equal to
 * @description Roll dice and succeed if the result is greater or equal to than a number
 * @category Probability
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
 * @name Must be greater than or equal to
 * @description The dice result must be greater than or equal to this value to succeed
 * @type number
 */
const value = 0;

/**
 * @inspectable
 * @name Succeeded
 * @description Where this block transitions if the roll succeeds
 * @type transition
 */
const successTransition = '';

/**
 * @inspectable
 * @name Failed
 * @description Where this block transitions if the roll fails
 * @type transition
 */
const failTransition = '';

const roll = Meta.probability.roll(dice)
if (roll >= value) {
	Meta.callbacks.transitionTo(successTransition);
} else {
	Meta.callbacks.transitionTo(failTransition);
}
