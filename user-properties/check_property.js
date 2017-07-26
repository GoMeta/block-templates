/**
 * @header
 * @name Check user property
 * @description Compare a user property to a number
 * @category User properties
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
 * @description The operator to use for the comparason
 * @type enum
 * @options Equal to, Not equal to, Greater than, Less than, Greater than or equal to, Less than or equal to
 */
const comparator = '';

/**
 * @inspectable
 * @name Value
 * @description The value to compare the property to
 * @type number
 */
const value = '';

/**
 * @inspectable
 * @name Condition true
 * @description Where this block transitions if the comparason is true
 * @type transition
 */
const successTransition = '';

/**
 * @inspectable
 * @name Condition false
 * @description Where this block transitions if the comparason is not true
 * @type transition
 */
const failTransition = '';

String.prototype.matches = function(props) {
  for(let i = 0; i < props.length; i++) {
    if(props[i] == this) return true;
  } 
  return false;
};

if (!Meta.helpers.propExists(key)) {
  Meta.callbacks.transitionTo(failTransition);
} else {
  const prop = Meta.helpers.getProp(key, 0);
  if (prop == value) {
    if (comparator.matches(['Equal to', 'Less than or equal to', 'Greater than or equal to']))
      Meta.callbacks.transitionTo(successTransition);
    else Meta.callbacks.transitionTo(failTransition);
  } else if (prop < value) {
    if (comparator.matches(['Less than', 'Less than or equal to', 'Not equal to']))
      Meta.callbacks.transitionTo(successTransition);
    else Meta.callbacks.transitionTo(failTransition);
  } else {
    if (comparator.matches(['Greater than', 'Greater than or equal to', 'Not equal to']))
      Meta.callbacks.transitionTo(successTransition);
    else Meta.callbacks.transitionTo(failTransition);
  }
}
