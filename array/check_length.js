/**
 * @header
 * @name Check length
 * @description This block checks the length of an array.
 * @category Array
 * @accepts Array<T>
 */

/**
 * @inspectable
 * @name Comparator
 * @description What length to check
 * @lhs Array length
 * @type comparator
 */
const comparator = {"operator":"=","rhs": 1};

/**
 * @inspectable
 * @name On success
 * @description Where this block transitions on success
 * @type transition
 */
const successTransition = '';

/**
 * @inspectable
 * @name On fail
 * @description Where this block transitions on failure
 * @type transition
 */
const failTransition = '';

if(compare(Meta.$input.length, comparator.operator, comparator.rhs)) {
  Meta.callbacks.transitionTo(successTransition);
} else {
  Meta.callbacks.transitionTo(failTransition);
}
