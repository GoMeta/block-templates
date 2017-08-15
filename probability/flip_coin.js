/**
 * @header
 * @name Coin flip
 * @description Flip a coin
 * @image https://assets.cdn.gometa.io/block-icons/coinFlip.png
 * @category Probability
 */

/**
 * @inspectable
 * @name On heads
 * @description Where this block transitions on heads
 * @type transition
 */
const successTransition = '';

/**
 * @inspectable
 * @name On tails
 * @description Where this block transitions on tails
 * @type transition
 */
const failTransition = '';

if (Meta.probability.test(0.5)) {
  Meta.callbacks.transitionTo(successTransition);
} else {
  Meta.callbacks.transitionTo(failTransition);
}
