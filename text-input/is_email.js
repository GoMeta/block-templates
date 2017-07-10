/**
 * @header
 * @name Response is email
 * @description Check if a user's response is an email
 * @category Text input
 */

/**
 * @inspectable
 * @name Is email
 * @description Where this block transitions if the response is an email
 * @type transition
 */
const successTransition = '';

/**
 * @inspectable
 * @name Is not email
 * @description Where this block transitions if the response is not an email
 * @type transition
 */
const failTransition = '';


function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

if(validateEmail(Meta.data.metadata.responseData)) {
  Meta.callbacks.transitionTo(successTransition);
} else {
  Meta.callbacks.transitionTo(failTransition);
}
