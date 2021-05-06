import React from "react";
import Mailchimp from 'react-mailchimp-form'
import MailchimpSubscribe from "react-mailchimp-subscribe"


function Newsletter() {
  return (
    <>
      <h2>Stay Tuned!</h2>
      <p>Sign up to get updates about new edibles and drinks!</p>
      <div id="newsletter">
      <MailchimpSubscribe url={process.env.REACT_APP_MAILCHIMP_URL} />
      </div>
    </>
  );
}

export default Newsletter;
