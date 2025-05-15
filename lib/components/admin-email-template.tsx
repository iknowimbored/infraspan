import * as React from "react";
import { ContactUsInputsI } from "../@types/contact";

export const AdminEmailTemplate: React.FC<Readonly<ContactUsInputsI>> = (
  props
) => (
  <div>
    <h2>Hi, Admin!</h2>
    <p>
      You have received a new message through the contact form on{" "}
      <a href="https://www.infraspan.com.au">www.infraspan.com.au</a>.
    </p>
    <p>Here are the details of the submission:</p>
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
      Sincerely, <br /> <strong>Infraspan System Notifications</strong>
    </p>
  </div>
);
