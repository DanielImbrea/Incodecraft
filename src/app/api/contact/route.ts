import { NextResponse } from "next/server";

// This route receives the contact form submission. By default it validates
// the payload and logs it server-side. To actually deliver messages, wire
// CONTACT_FORM_ENDPOINT (see .env.example) up to an email or form provider
// such as Resend, Formspree, or a custom serverless function, and forward
// the payload there.

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, description } = body;

    if (!name || !email || !description) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const endpoint = process.env.CONTACT_FORM_ENDPOINT;

    if (endpoint) {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) {
        return NextResponse.json({ error: "Failed to forward submission." }, { status: 502 });
      }
    } else {
      // No endpoint configured yet — log so the submission isn't silently lost
      // during local development or before CONTACT_FORM_ENDPOINT is set.
      console.log("Contact form submission (no CONTACT_FORM_ENDPOINT configured):", body);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Unexpected error." }, { status: 500 });
  }
}
