/**
 * @header
 * @name Upload to Photo Wall
 * @description Upload a photo to a Metaverse photo wall.
 * @category Camera
 */

/**
 * @inspectable
 * @name Photo wall ID
 * @description The ID of your photo wall
 * @type uuid
 */
const wall = '';

/**
 * @inspectable
 * @name Source
 * @description The source of this photo
 * @type string
 */
const source = '';

/**
 * @inspectable
 * @name Transition
 * @description Where this block transitions when it is finished
 * @type transition
 */
const transition = '';

const user = await Meta.contexts.loadUser(Meta.data.user);
Meta.actions.post(`http://meta-photo-wall.us-west-2.elasticbeanstalk.com/${wall}/update`, {
    method: 'post',
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
	body: JSON.stringify({
		image: Meta.data.metadata.responseData,
		username: user.name,
		source,
	}),
});
Meta.callbacks.done();

Meta.callbacks.transitionTo(transition);
