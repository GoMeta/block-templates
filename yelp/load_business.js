/**
 * @header
 * @name Search Yelp
 * @description Search Yelp for matching businesses.
 * @image https://assets.cdn.gometa.io/block-icons/yelpLogo.png
 * @category Yelp
 * @returns YelpData
 */

/**
 * @inspectable
 * @name Yelp Token
 * @description Your Yelp API Bearer Token. For instructions on how to get a bearer token, see [this link](http://jacklyons.me/yelp-fusion-api-access-token/).
 * @type env
 * @var yelpToken
 */

/**
 * @inspectable
 * @name Business ID
 * @description The Yelp ID of the business
 * @type string
 */
const id = ``;

/**
 * @inspectable
 * @name Transition
 * @description Where this block transitions
 * @type transition
 */
const transition = ``;

Meta.actions.post(`https://api.yelp.com/v3/${id}`, {
  method: 'get',
  headers: {
    Authorization: `Bearer ${Meta.$env.yelpToken}`
  },
})
  .then(response => response.json())
  .then(body => {
    Meta.callbacks.transitionTo(transition, body);
  });
