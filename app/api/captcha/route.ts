import { CaptchaInputsI } from "@/lib/@types/captcha";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body: CaptchaInputsI = await request.json();
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
