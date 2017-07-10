/**
 * @header
 * @name Has number of items
 * @description Check if a user has at least a certain number of an item in their inventory
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
 * @name Number
 * @description The number of the item the user must have
 * @type number
 */
const number = '';

/**
 * @inspectable
 * @name Has enough
 * @description Where this block transitions if the user has enough of the item
 * @type transition
 */
const hasEnoughItemsTransition = '';

/**
 * @inspectable
 * @name Does not have enough
 * @description Where this block transitions if the user does not have enough of the item
 * @type transition
 */
const notHaveEnoughItemsTransition = '';

if (Meta.item.numItems(item) >= number) {
	Meta.callbacks.transitionTo(hasItemTransition);
} else {
	Meta.callbacks.transitionTo(notHaveItemTransition);
}
