import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { site } from "@/data/site";
import { buildContactEmail } from "@/lib/email";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Contact form endpoint — delivers submissions to Gmail via SMTP.
 *
 * Requires two environment variables (see .env.example):
 *   GMAIL_USER          the Gmail address that sends the mail
 *   GMAIL_APP_PASSWORD  a Google "App password" (not the account password)
 */
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  const name = typeof body?.name === "string" ? body.name.trim() : "";
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const message = typeof body?.message === "string" ? body.message.trim() : "";

  if (name.length < 2 || !EMAIL_RE.test(email) || message.length < 10) {
    return NextResponse.json(
      { ok: false, error: "Invalid submission." },
      { status: 400 }
    );
  }

  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;

  if (!user || !pass) {
    console.error(
      "Contact form: GMAIL_USER / GMAIL_APP_PASSWORD are not set — submission not delivered."
    );
    return NextResponse.json(
      { ok: false, error: "Email delivery is not configured yet." },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

  const { subject, text, html } = buildContactEmail({ name, email, message });

  try {
    await transporter.sendMail({
      from: `"${site.name} — Portfolio" <${user}>`,
      to: site.email,
      replyTo: `"${name}" <${email}>`,
      subject,
      text,
      html,
    });
  } catch (err) {
    console.error("Contact form: failed to send email", err);
    return NextResponse.json(
      { ok: false, error: "Failed to send your message. Please try again." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
