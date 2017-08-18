/**
 * @header
 * @name Check experience property
 * @description Test the value of a temporary experience property
 * @category Experience properties
 */

/**
 * @inspectable
 * @name Key
 * @description The property to check
 * @type string
 */
const key = '';

/**
 * @inspectable
 * @name Comparator
 * @description What expected value to test
 * @type comparator
 * @lhs Property
 */
const comparator = {"operator":"=","rhs": 1};

/**
 * @inspectable
 * @name On success
 * @description Where this block transitions if the comparison is true
 * @type transition
 */
const successTransition = '';

/**
 * @inspectable
 * @name On failure
 * @description Where this block transitions if the comparison is not true
 * @type transition
 */
const failTransition = '';

if (compare(Meta.$experience[key], comparator.operator, comparator.rhs)) {
  Meta.callbacks.transitionTo(successTransition);
} else {
  Meta.callbacks.transitionTo(failTransition);
}
