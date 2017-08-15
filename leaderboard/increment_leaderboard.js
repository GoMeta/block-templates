/**
 * @header
 * @name Increment leaderboard
 * @description Increment a user's record on a Metaverse leaderboard.
 * @image https://assets.cdn.gometa.io/block-icons/incrementLeaderboard.png
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
 * @name Increment value
 * @description The value to increment by
 * @type number
 * @optional
 */
const increment = 1;

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
	body: `apikey=${leaderboard}&username=${data.name}&increment=${increment}`,
});

Meta.callbacks.transitionTo(transition);
