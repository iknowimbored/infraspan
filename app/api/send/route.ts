import { ContactUsInputsI } from "@/lib/@types/contact";
import { AdminEmailTemplate } from "@/lib/components/admin-email-template";
import { EmailTemplate } from "@/lib/components/email-template";
import { NextRequest, NextResponse } from "next/server";
import { ReactNode } from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body: ContactUsInputsI = await request.json();
    const { error } = await resend.emails.send({
      from: "Infraspan Info <info@infraspan.com.au>",
      to: ["info@infraspan.com.au"],
      subject:
        "New Contact Form Submission from " + body.companyName.toUpperCase(),
      react: AdminEmailTemplate(body) as ReactNode,
    });
    if (error) {
      throw new Error();
    }
    const { error: error1 } = await resend.emails.send({
      from: "Infraspan Info <info@infraspan.com.au>",
      to: [body.email],
      subject: "Thank You for Contacting Infraspan",
      react: EmailTemplate(body) as ReactNode,
    });
    if (error1) {
      throw new Error();
    }
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
