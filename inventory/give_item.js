/**
 * @header
 * @name Give item
 * @description Programatically give an item to the user
 * @category Inventory
 */

/**
 * @inspectable
 * @name Item
 * @description The item to give
 * @type item
 */
const item = '';

/**
 * @inspectable
 * @name Transition
 * @description Where this block transitions when it is finished
 * @type transition
 */
const transition = '';

await Meta.item.giveItem(item, Meta.data.user);

Meta.callbacks.transitionTo(transition);
