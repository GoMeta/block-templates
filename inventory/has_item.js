/**
 * @header
 * @name Has item
 * @description Check if a user has an item in their inventory
 * @image https://assets.cdn.gometa.io/block-icons/hasItem.png
 * @category Inventory
 */

/**
 * @inspectable
 * @name Item
 * @description The item to check
 * @type item
 */
const item = '';

/**
 * @inspectable
 * @name On has item
 * @description Where this block transitions if the user has the item
 * @type transition
 */
const hasItemTransition = '';

/**
 * @inspectable
 * @name Does not have item
 * @description Where this block transitions if the user does not have the item
 * @type transition
 */
const notHaveItemTransition = '';

if (Meta.item.hasItem(item)) {
	Meta.callbacks.transitionTo(hasItemTransition);
} else {
	Meta.callbacks.transitionTo(notHaveItemTransition);
}
