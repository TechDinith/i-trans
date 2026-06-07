import { NextResponse } from "next/server";
import { getResend } from "@/lib/resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, info, otherContacts } = body;

    await getResend().emails.send({
      from: "iTrans Contact <onboarding@resend.dev>",
      to: "itranscontact@gmail.com",
      subject: `New contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nInfo: ${info}\nOther: ${otherContacts ?? "—"}`,
    });

    return NextResponse.json({ status: "success" });
  } catch {
    return NextResponse.json(
      { status: "error" },
      { status: 500 },
    );
  }
}
