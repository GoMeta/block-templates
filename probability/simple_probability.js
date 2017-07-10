/**
 * @header
 * @name Simple probability
 * @description Perform a simple probability check
 * @category Probability
 */

/**
 * @inspectable
 * @name Probability
 * @description The probability to check, from 0 to 1
 * @type number
 */
const p = 0.5;

/**
 * @inspectable
 * @name Check succeeded
 * @description Where this block transitions if the probability check succeeds
 * @type transition
 */
const successTransition = '';

/**
 * @inspectable
 * @name Check failed
 * @description Where this block transitions if the probability check fails
 * @type transition
 */
const failTransition = '';

if (Meta.probability.test(p)) {
	Meta.callbacks.transitionTo(successTransition);
} else {
	Meta.callbacks.transitionTo(failTransition);
}
