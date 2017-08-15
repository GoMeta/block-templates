/**
 * @header
 * @name Make Call
 * @description Make a call through your Twilio account. You can create a free account at [https://www.twilio.com](https://www.twilio.com/).
 * @category Twilio
 */

/**
 * @inspectable
 * @name Account SID
 * @group Account Information
 * @description Your Twilio Account SID. For instructions on how to find your account information, see the [Twilio Documentation](https://support.twilio.com/hc/en-us/articles/223136027-Auth-Tokens-and-how-to-change-them).
 * @type env
 * @var twilioAccountSID
 */

/**
 * @inspectable
 * @name Auth Token
 * @group Account Information
 * @description Your Twilio Account Auth Token
 * @type env
 * @var twilioAccountAuthToken
 */

/**
 * @inspectable
 * @name To
 * @description The phone number to send an SMS to. Include '+' and the country code at the front of the number.
 * @type string
 */
const toNumber = ``;

/**
 * @inspectable
 * @name From
 * @description The number your sending from (+14151231234)
 * @type string
 */
const fromNumber = ``;

/**
 * @inspectable
 * @name Url
 * @description The URL of the TwiML file for the call. See: https://www.twilio.com/docs/api/twiml
 * @type string
 */
const url = ``;

/**
 * @inspectable
 * @name Transition
 * @description Where this block transitions when it is finished
 * @type transition
 */
const transition = ``;

// Convert auth token to base64
const token = Buffer.from(`${Meta.$env.twilioAccountSID}:${Meta.$env.twilioAccountAuthToken}`).toString('base64');

// Make the request
Meta.actions.post(`https://api.twilio.com/2010-04-01/Accounts/${Meta.$env.twilioAccountSID}/Calls.json`, {
  method: 'post',
  headers: {
    Authorization: `Basic ${token}`,
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: `To=${encodeURIComponent(toNumber)}&From=${encodeURIComponent(fromNumber)}&Url=${encodeURIComponent(url)}`
});

Meta.callbacks.transitionTo(transition);
