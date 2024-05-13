import "./styles.css";

import { useForm, ValidationError } from '@formspree/react';
import { Spinner, At, Envelope } from "@phosphor-icons/react";

export function ContactForm() {

  const [state, handleSubmit] = useForm("xvoeygbw");

  if (state.succeeded) {
      return <h1>Your <span>message</span> was sent!</h1>;
  }

  const errors = state.errors?.getFormErrors();

  if(errors) {
    return <h1>{errors[0].message}!</h1>
  }

  return (

    <form onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="email">
            <At className="icon" weight="bold" />
            <span>Email Address</span>
        </label>
        <input required id="email" type="email" name="email" />
      </div>
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />

      <div className="form-field">
        <label htmlFor="message">
            <Envelope className="icon" weight="bold" />
            <span>Message</span>
        </label>
        <textarea required id="message" name="message" rows={7} />
      </div>
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />

      <button type="submit" disabled={state.submitting}>
        {
            state.submitting ?
            <Spinner className="icon" weight="bold" /> : "Submit"
        }
      </button>
    </form>

  );
}
