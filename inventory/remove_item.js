/**
 * @header
 * @name Remove item
 * @description Programatically remove an item from the user's inventory
 * @image https://assets.cdn.gometa.io/block-icons/removeItem.png
 * @category Inventory
 */

/**
 * @inspectable
 * @name Item
 * @description The item to remove
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

await Meta.item.removeItem(item, Meta.data.user);

Meta.callbacks.transitionTo(transition);
