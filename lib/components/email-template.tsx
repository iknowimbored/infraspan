import * as React from "react";
import { ContactUsInputs } from "../@types/contact";

export const EmailTemplate: React.FC<Readonly<ContactUsInputs>> = (props) => (
  <div>
    <h2>Hi, {props.fullName}!</h2>
    <p>
      Thank you for contacting us at{" "}
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
      <dt style={{ fontWeight: "bold" }}>Full Name</dt>
      <dd style={{ margin: "0 0 1rem 0" }}>{props.fullName}</dd>
      <dt style={{ fontWeight: "bold" }}>Email Address</dt>
      <dd style={{ margin: "0 0 1rem 0" }}>{props.email}</dd>
      <dt style={{ fontWeight: "bold" }}>Phone Numner</dt>
      <dd style={{ margin: "0 0 1rem 0" }}>{props.phoneNumber}</dd>
      <dt style={{ fontWeight: "bold" }}>Company Name</dt>
      <dd style={{ margin: "0 0 1rem 0" }}>{props.companyName}</dd>
      <dt style={{ fontWeight: "bold" }}>Message</dt>
      <dd style={{ margin: "0 0 1rem 0" }}>{props.message}</dd>
    </dl>
    <p>
      Sincerely, <br /> <strong>The Infraspan Team</strong>
    </p>
  </div>
);
