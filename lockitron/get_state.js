/**
 * @header
 * @name Toggle Lockitron
 * @description Toggle a wifi-enabled Lockitron lock.
 * @image https://assets.cdn.gometa.io/block-icons/controlLockitronLock.png
 * @category Lockitron
 * @returns LockitronState: String
 */

/**
 * @inspectable
 * @name Access token
 * @description Your Lockitron access token
 * @type env
 * @var lockitronAccessToken
 */

/**
 * @inspectable
 * @name Lock ID
 * @description The ID of your Lockitron lock
 * @type string
 */
const lock = ``;

/**
 * @inspectable
 * @name Transition
 * @description Where this block transitions when it is finished
 * @type transition
 */
const transition = ``;

const url = `https://api.lockitron.com/v2/locks/${lock}?access_token=${Meta.$env.lockitronAccessToken}`;
const lockData = await Meta.actions.post(url, {
  method: 'get'
});

const json = lockData.json();

Meta.callbacks.transitionTo(transition, json.state);
