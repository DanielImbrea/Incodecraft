import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

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
  website?: string;
  turnstileToken?: string;
};

const FALLBACK_WINDOW_MS = 60 * 60 * 1000;
const FALLBACK_MAX_REQUESTS = 5;
const fallbackHits = new Map<string, number[]>();

let ratelimit: Ratelimit | null = null;

function getRatelimit() {
  if (ratelimit) return ratelimit;

  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) return null;

  ratelimit = new Ratelimit({
    redis: new Redis({ url, token }),
    limiter: Ratelimit.slidingWindow(3, "1 h"),
    prefix: "incodecraft:contact",
  });

  return ratelimit;
}

export function getClientIp(request: Request) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

/** Honeypot: bots auto-fill hidden fields; humans never see them. */
export function isHoneypotTriggered(body: ContactPayload) {
  return Boolean(body.website?.trim());
}

export function isSuspiciousEmail(email: string) {
  const normalized = email.trim().toLowerCase();
  const at = normalized.indexOf("@");
  if (at <= 0) return true;

  const local = normalized.slice(0, at);
  const domain = normalized.slice(at + 1);
  if (!domain.includes(".")) return true;

  const dots = (local.match(/\./g) ?? []).length;
  if (dots === 0) return false;

  // Gmail dot-alias trick: pr.ana.bh.ue.c.o.d.e.1@gmail.com
  if (dots >= 3) return true;

  const withoutDots = local.replace(/\./g, "");
  if (dots >= 2 && withoutDots.length <= 8) return true;

  // Single-character segments between dots: a.b.c.d@...
  const segments = local.split(".");
  if (dots >= 2 && segments.every((part) => part.length <= 2)) return true;

  return false;
}

export async function verifyTurnstile(token: string | undefined, ip: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true;

  if (!token) return false;

  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      secret,
      response: token,
      remoteip: ip !== "unknown" ? ip : undefined,
    }),
  });

  if (!res.ok) return false;

  const data = (await res.json()) as { success?: boolean };
  return Boolean(data.success);
}

async function checkFallbackRateLimit(ip: string) {
  const now = Date.now();
  const recent = (fallbackHits.get(ip) ?? []).filter((t) => now - t < FALLBACK_WINDOW_MS);

  if (recent.length >= FALLBACK_MAX_REQUESTS) {
    return { allowed: false, remaining: 0 };
  }

  recent.push(now);
  fallbackHits.set(ip, recent);

  return { allowed: true, remaining: FALLBACK_MAX_REQUESTS - recent.length };
}

export async function checkContactRateLimit(ip: string) {
  const limiter = getRatelimit();

  if (limiter) {
    const result = await limiter.limit(ip);
    return { allowed: result.success, remaining: result.remaining };
  }

  return checkFallbackRateLimit(ip);
}

export type SanitizedContactPayload = Omit<ContactPayload, "website" | "turnstileToken">;

export function sanitizeContactPayload(body: ContactPayload): SanitizedContactPayload {
  const { website: _website, turnstileToken: _token, ...rest } = body;
  return rest;
}

export type { ContactPayload };
