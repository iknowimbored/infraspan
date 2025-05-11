import * as React from "react";
import { ContactUsInputs } from "../@types/contact";

export const EmailTemplate: React.FC<Readonly<ContactUsInputs>> = (props) => (
  <div>
    <h2>Hi, {props.fullName}!</h2>
    <p>
      Thank you for contactis us at{" "}
      <a href="https://www.infraspan.com.au">www.infraspan.com.au</a>.
    </p>
    <p>
      We have received your message and will get back to you as soon as
      possible, typically within 1-2 business days.
    </p>
    <p>
      For your reference, here's a summary of the information you submitted:
    </p>
    <dl>
      <dt>Full Name</dt>
      <dd>{props.fullName}</dd>
      <dt>Email Address</dt>
      <dd>{props.email}</dd>
      <dt>Phone Numner</dt>
      <dd>{props.phoneNumber}</dd>
      <dt>Company Name</dt>
      <dd>{props.companyName}</dd>
      <dt>Message</dt>
      <dd>{props.message}</dd>
    </dl>
    <p>
      Sincerely, <br /> <strong>The Infraspan Team</strong>
    </p>
  </div>
);
