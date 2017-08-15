/**
 * @header
 * @name Get first item
 * @description This block gets the first item in an array.
 * @category Array
 * @accepts Array<T>
 * @returns T
 */

let returnValue;

try {
  returnValue = Meta.$input[0];
} catch (err) {
  returnValue = null;
}

/**
 * @inspectable
 * @name Transition
 * @description Where this block transitions when it is finished
 * @type transition
 */
const transition = '';

Meta.callbacks.transitionTo(transition, returnValue);
