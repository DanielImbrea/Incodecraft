import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  projectType?: string;
  budget?: string;
  timeline?: string;
  heardFrom?: string;
  description?: string;
};

function formatEmailHtml(body: ContactPayload) {
  const rows = [
    ["Nume", body.name],
    ["Email", body.email],
    ["Companie", body.company],
    ["Telefon", body.phone],
    ["Tip proiect", body.projectType],
    ["Buget", body.budget],
    ["Termen", body.timeline],
    ["Cum a aflat", body.heardFrom],
  ];

  const details = rows
    .filter(([, value]) => value)
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px 8px 0;color:#888;font-family:monospace;font-size:12px;text-transform:uppercase;vertical-align:top;">${label}</td><td style="padding:8px 0;color:#eee;">${value}</td></tr>`,
    )
    .join("");

  return `
    <h2 style="color:#fff;font-family:sans-serif;">Cerere nouă de proiect — INCODECRAFT</h2>
    <table style="border-collapse:collapse;">${details}</table>
    <h3 style="color:#fff;font-family:sans-serif;margin-top:24px;">Descriere proiect</h3>
    <p style="color:#eee;line-height:1.6;white-space:pre-wrap;">${body.description ?? ""}</p>
  `;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const { name, email, description } = body;

    if (!name || !email || !description) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const resendKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_EMAIL_TO || "dani_imbrea@yahoo.com";
    const from = process.env.CONTACT_EMAIL_FROM || "INCODECRAFT Contact <onboarding@resend.dev>";

    if (resendKey) {
      const resend = new Resend(resendKey);
      const { error } = await resend.emails.send({
        from,
        to: [to],
        replyTo: email,
        subject: `[INCODECRAFT] Cerere proiect — ${name}`,
        html: formatEmailHtml(body),
      });

      if (error) {
        console.error("Resend error:", error);
        return NextResponse.json({ error: "Failed to send email." }, { status: 502 });
      }
    } else {
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
        console.log("Contact form submission (no email provider configured):", body);
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Unexpected error." }, { status: 500 });
  }
}
