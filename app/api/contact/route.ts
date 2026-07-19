import { NextResponse } from "next/server";

/**
 * Contact form endpoint.
 *
 * This currently validates input and logs the message server-side — it does
 * NOT send an email yet, because no email provider is configured in this
 * environment. Before deploying, wire this up to a real provider. Recommended
 * for a Vercel-hosted Next.js app: Resend (https://resend.com).
 *
 * Example once you have a RESEND_API_KEY set in your Vercel project's
 * environment variables:
 *
 *   import { Resend } from "resend";
 *   const resend = new Resend(process.env.RESEND_API_KEY);
 *   await resend.emails.send({
 *     from: "Portfolio <contact@yourdomain.dev>",
 *     to: profile.email,
 *     replyTo: email,
 *     subject: `New message from ${name}`,
 *     text: message,
 *   });
 *
 * Alternatives that need no server code at all: Formspree or Web3Forms —
 * point the form's `action` at their endpoint instead of /api/contact.
 */

interface ContactPayload {
  name?: string;
  email?: string;
  message?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = payload.name?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const message = payload.message?.trim() ?? "";

  if (!name || name.length > 120) {
    return NextResponse.json({ error: "Please provide a valid name." }, { status: 400 });
  }
  if (!email || !EMAIL_RE.test(email) || email.length > 200) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }
  if (!message || message.length < 10 || message.length > 4000) {
    return NextResponse.json(
      { error: "Message must be between 10 and 4000 characters." },
      { status: 400 }
    );
  }

  // Forward to Web3Forms
  const web3formsKey = process.env.WEB3FORMS_ACCESS_KEY;
  
  if (web3formsKey) {
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: web3formsKey,
          name: name,
          email: email,
          message: message,
          subject: `New Portfolio Message from ${name}`,
          from_name: "Portfolio Contact Form"
        }),
      });

      const result = await response.json();
      if (!result.success) {
        throw new Error(result.message || "Failed to send email");
      }
    } catch (error) {
      console.error("[contact] Email sending failed:", error);
      return NextResponse.json(
        { error: "Failed to send email. Please try again later." },
        { status: 500 }
      );
    }
  } else {
    console.warn("[contact] WEB3FORMS_ACCESS_KEY is not set. Skipping email delivery.");
  }

  return NextResponse.json({ ok: true });
}
