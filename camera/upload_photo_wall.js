/**
 * @header
 * @name Upload to Photo Wall
 * @description This block uploads a photo taken by the user to a Metaverse Photo Wall. You can create a photo wall at [http://photos.metaverseapp.io/](http://photos.metaverseapp.io/).
 * @image https://assets.cdn.gometa.io/block-icons/uploadToPhotoWall.png
 * @category Camera
 * @accepts URL
 */

/**
 * @inspectable
 * @name Photo wall ID
 * @description The ID of your Photo Wall.
 * @type uuid
 */
const wall = '';

/**
 * @inspectable
 * @name Source
 * @description The same photo wall can be used in multiple experiences. Give this photo a tag to help you organize it later.
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
