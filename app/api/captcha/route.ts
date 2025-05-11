import { CaptchaInputs } from "@/lib/@types/captcha";
import { ContactUsInputs } from "@/lib/@types/contact";
import { EmailTemplate } from "@/lib/components/email-template";
import { NextRequest, NextResponse } from "next/server";
import { ReactNode } from "react";

export async function POST(request: NextRequest) {
  try {
    const body: CaptchaInputs = await request.json();
    const formData = new FormData();
    formData.append("secret", process.env.HCAPTCHA_SECRET!);
    formData.append("response", body.token);
    const res = await fetch("https://api.hcaptcha.com/siteverify", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    if (data.success) {
      return NextResponse.json(data);
    }
    throw new Error(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
