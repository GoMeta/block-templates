/**
 * @header
 * @name Decrement leaderboard
 * @description Decrement a user's record on a Metaverse leaderboard.
 * @image https://assets.cdn.gometa.io/block-icons/decrementLeaderboard.png
 * @category Leaderboard
 */

/**
 * @inspectable
 * @name Leaderboard ID
 * @description The ID of your leaderboard
 * @type uuid
 */
const leaderboard = '';

/**
 * @inspectable
 * @name Decrement value
 * @description The value to decrement
 * @type number
 * @optional
 */
const decrement = 1;

/**
 * @inspectable
 * @name Transition
 * @description Where this block transitions when it is finished
 * @type transition
 */
const transition = '';


const user = await Meta.contexts.loadUser(Meta.data.user);
Meta.actions.post('http://leaderboards.metaverseapp.io/api/update.php', {
	method: 'post',
	headers: {
		Accept: 'application/x-www-form-urlencoded',
		'Content-Type': 'application/x-www-form-urlencoded',
	},
	body: `apikey=${leaderboard}&username=${user.name}&increment=${-decrement}`,
});

Meta.callbacks.transitionTo(transition);
