/**
 * @header
 * @name Is animal
 * @description Check if a photo taken by the user contains a specified animal
 * @category Google vision
 */

/**
 * @inspectable
 * @name Animal
 * @description The animal to search for
 * @type enum
 * @options Dog,Cat,Horse,Deer,Lion,Elephant,Rabbit,Rat,Cow,Pig
 */
let animal = 'Dog';
animal = animal.toLowerCase();

/**
 * @inspectable
 * @name Animal is found
 * @description Where this block transitions if the animal has been found
 * @type transition
 */
const successTransition = '';

/**
 * @inspectable
 * @name Animal is not found
 * @description Where this block transitions if the animal has not been found
 * @type transition
 */
const failTransition = '';

await Meta.vision.classify(Meta.data.metadata.responseData);
if (Meta.vision.containsObject(animal)) {
	Meta.callbacks.transitionTo(successTransition);
} else {
	Meta.callbacks.transitionTo(failTransition);
}
