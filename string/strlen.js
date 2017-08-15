/**
 * @header
 * @name Check string length
 * @description Check the length of a string
 * @category String
 */

/**
 * @inspectable
 * @name Comparator
 * @description What expected value to test
 * @type comparator
 * @lhs String length
 */
const comparator = {
  operator: '>',
  rhs: 1
};

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

if (compare(Meta.$input, comparator.operator, comparator.rhs)) {
  Meta.callbacks.transitionTo(successTransition);
} else {
  Meta.callbacks.transitionTo(failTransition);
}
