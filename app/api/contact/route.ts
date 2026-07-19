import { NextResponse } from "next/server";

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

  const web3formsKey = process.env.WEB3FORMS_ACCESS_KEY;

  if (!web3formsKey) {
    console.warn("[contact] WEB3FORMS_ACCESS_KEY is not set — email delivery skipped.");
    // Still return success so the form UX is not broken in dev
    return NextResponse.json({ ok: true });
  }

  let w3Response: Response;
  try {
    w3Response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: web3formsKey,
        name,
        email,
        message,
        subject: `New Portfolio Message from ${name}`,
        from_name: "Portfolio Contact Form",
      }),
    });
  } catch (networkErr) {
    console.error("[contact] Network error reaching Web3Forms:", networkErr);
    return NextResponse.json(
      { error: "Could not reach the email service. Please try again later." },
      { status: 502 }
    );
  }

  // Always read as text first — Web3Forms can return HTML on certain errors
  const rawBody = await w3Response.text();
  console.log(`[contact] Web3Forms status=${w3Response.status} body=${rawBody.slice(0, 300)}`);

  // Try to parse JSON safely
  let result: { success?: boolean; message?: string } = {};
  const contentType = w3Response.headers.get("content-type") ?? "";
  if (contentType.includes("application/json")) {
    try {
      result = JSON.parse(rawBody);
    } catch {
      console.error("[contact] Failed to parse Web3Forms JSON:", rawBody.slice(0, 300));
    }
  }

  if (!w3Response.ok || result.success === false) {
    const reason = result.message ?? `Web3Forms returned HTTP ${w3Response.status}`;
    console.error("[contact] Web3Forms rejected the submission:", reason);
    return NextResponse.json(
      { error: `Email delivery failed: ${reason}` },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
