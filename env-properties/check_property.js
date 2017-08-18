/**
 * @header
 * @name Check environmentproperty
 * @description Test the value of an environment property
 * @image https://assets.cdn.gometa.io/block-icons/checkEnvironmentProperty.png
 * @category Environment properties
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

if (compare(Meta.$env[key], comparator.operator, comparator.rhs)) {
  Meta.callbacks.transitionTo(successTransition);
} else {
  Meta.callbacks.transitionTo(failTransition);
}
