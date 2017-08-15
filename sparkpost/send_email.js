/**
 * @header
 * @name Send email (Sparkpost)
 * @description Send an email through your Sparkpost account. Create a free account at [https://www.sparkpost.com/](https://sparkpost.com).
 * @image https://assets.cdn.gometa.io/block-icons/sendEmailSparkpost.png
 * @category Sparkpost
 */

/**
 * @inspectable
 * @name Sparkpost API Key
 * @description Your Sparkpost API key
 * @type env
 * @var sparkpostAPIKey
 */

/**
 * @inspectable
 * @name Recipients
 * @description The email(s) to send to. Separate multiple emails with a comma (ex. 'bill@gmail.com,ted@gmail.com')
 * @type string
 */
const toEmailsRaw = ``;
var toEmails = toEmailsRaw
  .split(',')
  .map(item => ({ address: item.trim() }));

/**
 * @inspectable
 * @name From Email
 * @description The email your sending from (you@yourdomain.com)
 * @type string
 */
const fromEmail = ``;

/**
 * @inspectable
 * @name Subject
 * @description The subject of the email
 * @type string
 */
const emailSubject = ``;

/**
 * @inspectable
 * @name Body
 * @description The body of the email (plain text)
 * @type string
 */
const emailBody = ``;

/**
 * @inspectable
 * @name Transition
 * @description Where this block transitions when it is finished
 * @type transition
 */
const transition = ``;

let data = {
    'options': {
      'sandbox': false
    },
    'content': {
      'from': fromEmail,
      'subject': emailSubject,
      'text': emailBody
    },
    'recipients': toEmails
}


Meta.actions.post(`https://api.sparkpost.com/api/v1/transmissions`, {
  method: 'POST',
  headers: {
    'Authorization': `${Meta.$env.sparkpostAPIKey}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
}).then((response) => {
  Meta.callbacks.transitionTo(transition);
}).catch((e) => {
  Meta.callbacks.transitionTo(transition);
});
