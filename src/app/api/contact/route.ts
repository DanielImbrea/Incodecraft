import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  checkContactRateLimit,
  getClientIp,
  isHoneypotTriggered,
  isSuspiciousEmail,
  sanitizeContactPayload,
  verifyTurnstile,
  type ContactPayload,
} from "@/lib/contact-guard";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

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
        `<tr>
          <td style="padding:10px 16px 10px 0;color:#6B7280;font-family:Consolas,Monaco,monospace;font-size:11px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;vertical-align:top;white-space:nowrap;">${label}</td>
          <td style="padding:10px 0;color:#111827;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.5;vertical-align:top;">${escapeHtml(String(value))}</td>
        </tr>`,
    )
    .join("");

  const description = escapeHtml(body.description ?? "");

  return `
    <div style="margin:0;padding:24px;background:#F3F4F6;font-family:Arial,Helvetica,sans-serif;">
      <div style="max-width:640px;margin:0 auto;background:#FFFFFF;border:1px solid #E5E7EB;border-radius:8px;overflow:hidden;">
        <div style="padding:20px 24px;background:#0A0D13;border-bottom:3px solid #FF6A39;">
          <p style="margin:0 0 6px;font-family:Consolas,Monaco,monospace;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#FF6A39;">INCODECRAFT</p>
          <h1 style="margin:0;font-size:22px;line-height:1.3;font-weight:700;color:#FFFFFF;">Cerere nouă de proiect</h1>
        </div>
        <div style="padding:24px;">
          <table style="width:100%;border-collapse:collapse;">${details}</table>
          <h2 style="margin:28px 0 12px;font-size:14px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:#374151;">Descriere proiect</h2>
          <div style="padding:16px;background:#F9FAFB;border:1px solid #E5E7EB;border-radius:6px;color:#111827;font-size:15px;line-height:1.65;white-space:pre-wrap;">${description}</div>
        </div>
      </div>
    </div>
  `;
}

function spamAccepted() {
  // Silently accept so automated senders do not adapt.
  return NextResponse.json({ success: true });
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const ip = getClientIp(request);

    if (isHoneypotTriggered(body) || (body.email && isSuspiciousEmail(body.email))) {
      return spamAccepted();
    }

    const rate = await checkContactRateLimit(ip);
    if (!rate.allowed) {
      return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
    }

    const turnstileOk = await verifyTurnstile(body.turnstileToken, ip);
    if (!turnstileOk) {
      return NextResponse.json({ error: "Verification failed. Please try again." }, { status: 400 });
    }

    const payload = sanitizeContactPayload(body);
    const { name, email, description } = payload;

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
        html: formatEmailHtml(payload),
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
          body: JSON.stringify(payload),
        });
        if (!res.ok) {
          return NextResponse.json({ error: "Failed to forward submission." }, { status: 502 });
        }
      } else {
        console.log("Contact form submission (no email provider configured):", payload);
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Unexpected error." }, { status: 500 });
  }
}
