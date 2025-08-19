import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Newsletter } from "./Newsletter";

export const MailchimpForm = () => {
  const postUrl = `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

  return (
    <>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <Newsletter
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}
            onError={error => console.error("Mailchimp error:", error)}
            onSuccess={() => console.log("Mailchimp success")}
            onValidated={formData => subscribe(formData)}
            onError={error => console.error("Mailchimp error:", error)}
            onSuccess={() => console.log("Mailchimp success")}
            subscribe={subscribe}
            status={status}
            // message={message}
            // onValidated={formData => subscribe(formData)}
            // onError={error => console.error("Mailchimp error:", error)}
            // onSuccess={() => console.log("Mailchimp success")}
            />
        )}
        />
    </>
  )
}
