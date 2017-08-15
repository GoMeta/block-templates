/**
 * @header
 * @name Search Yelp
 * @description Search Yelp for matching businesses.
 * @image https://assets.cdn.gometa.io/block-icons/yelpLogo.png
 * @category Yelp
 * @returns [YelpData]
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
 * @name Search term
 * @description Search term
 * @type string
 */
const term = ``;

/**
 * @inspectable
 * @name Location
 * @description The area to search.
 * @optional
 * @type coords
 */
const location = '';

/**
 * @inspectable
 * @name Transition
 * @description Where this block transitions
 * @type transition
 */
const transition = ``;

Meta.actions.post(`https://api.yelp.com/v3/businesses/search?term=${term}&latitude=${location.lat}&longitude=${location.lng}`, {
  method: 'get',
  headers: {
    Authorization: `Bearer ${Meta.$env.yelpToken}`
  },
})
  .then(response => response.json())
  .then(body => {
    Meta.callbacks.transitionTo(transition, body.businesses);
  });
