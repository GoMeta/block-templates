/**
 * @header
 * @name Join array
 * @description This block joins the elements of an array into a string, separated by a value.
 * @category Array
 * @accepts Array<String>
 * @returns String
 */

/**
 * @inspectable
 * @name Separator
 * @description What to use to separate elements
 * @type number
 */
const separator = '';

const returnValue = Meta.$input.join(separator);

/**
 * @inspectable
 * @name Transition
 * @description Where this block transitions when it is finished
 * @type transition
 */
const transition = '';

Meta.callbacks.transitionTo(transition, returnValue);
