"use client";

import { useRef, useState, type FormEvent } from "react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react";
import { useTranslations } from "next-intl";

type Status = "idle" | "submitting" | "success" | "error";

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export function ContactForm() {
  const t = useTranslations("contactForm");
  const [status, setStatus] = useState<Status>("idle");
  const [errorKind, setErrorKind] = useState<"generic" | "rateLimit" | "verification">("generic");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileRef = useRef<TurnstileInstance>(null);

  const projectTypes = t.raw("projectTypes") as string[];
  const budgets = t.raw("budgets") as string[];
  const timelines = t.raw("timelines") as string[];
  const heardFrom = t.raw("heardFromOptions") as string[];

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorKind("generic");

    if (TURNSTILE_SITE_KEY && !turnstileToken) {
      setStatus("error");
      setErrorKind("verification");
      return;
    }

    setStatus("submitting");
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    if (turnstileToken) {
      payload.turnstileToken = turnstileToken;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.status === 429) {
        setErrorKind("rateLimit");
        throw new Error("Rate limited");
      }

      if (res.status === 400) {
        setErrorKind("verification");
        turnstileRef.current?.reset();
        setTurnstileToken(null);
        throw new Error("Verification failed");
      }

      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="card flex flex-col items-center gap-4 px-8 py-16 text-center">
        <CheckCircle2 size={40} className="text-signal" />
        <h3 className="font-display text-xl text-ink-50">{t("messageSent")}</h3>
        <p className="max-w-sm text-sm text-ink-300">{t("successMessage")}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-6 p-6 md:p-8">
      <div className="grid gap-6 md:grid-cols-2">
        <Field label={t("name")} name="name" required placeholder={t("namePlaceholder")} />
        <Field label={t("company")} name="company" placeholder={t("companyPlaceholder")} />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Field label={t("email")} name="email" type="email" required placeholder={t("emailPlaceholder")} />
        <Field label={t("phone")} name="phone" placeholder={t("phonePlaceholder")} />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <SelectField label={t("projectType")} name="projectType" options={projectTypes} placeholder={t("selectOption")} />
        <SelectField label={t("budget")} name="budget" options={budgets} placeholder={t("selectOption")} />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <SelectField label={t("timeline")} name="timeline" options={timelines} placeholder={t("selectOption")} />
        <SelectField label={t("heardFrom")} name="heardFrom" options={heardFrom} placeholder={t("selectOption")} />
      </div>

      <div>
        <label htmlFor="description" className="mb-2 block font-mono text-xs uppercase tracking-wide text-ink-400">
          {t("description")}
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={5}
          placeholder={t("descriptionPlaceholder")}
          className="w-full rounded-sm border border-surface-border bg-ink-950/60 px-4 py-3 text-sm text-ink-100 placeholder:text-ink-500 focus:border-signal focus:outline-none"
        />
      </div>

      {/* Honeypot: hidden from humans, often filled by bots */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          defaultValue=""
        />
      </div>

      {TURNSTILE_SITE_KEY && (
        <Turnstile
          ref={turnstileRef}
          siteKey={TURNSTILE_SITE_KEY}
          onSuccess={setTurnstileToken}
          onExpire={() => setTurnstileToken(null)}
          options={{ theme: "dark", size: "flexible" }}
        />
      )}

      <button type="submit" disabled={status === "submitting"} className="btn-primary w-full sm:w-auto">
        {status === "submitting" ? (
          <>
            <Loader2 size={16} className="animate-spin" /> {t("sending")}
          </>
        ) : (
          <>
            {t("sendDetails")} <ArrowUpRight size={16} />
          </>
        )}
      </button>

      {status === "error" && (
        <p className="font-mono text-xs text-signal">
          {errorKind === "rateLimit"
            ? t("rateLimitMessage")
            : errorKind === "verification"
              ? t("verificationMessage")
              : t("errorMessage")}{" "}
          {errorKind === "generic" && (
            <>
              <a href="mailto:hello@incodecraft.com" className="underline">
                hello@incodecraft.com
              </a>{" "}
              {t("errorDirect")}
            </>
          )}
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block font-mono text-xs uppercase tracking-wide text-ink-400">
        {label} {required && <span className="text-signal">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-sm border border-surface-border bg-ink-950/60 px-4 py-3 text-sm text-ink-100 placeholder:text-ink-500 focus:border-signal focus:outline-none"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
  placeholder,
}: {
  label: string;
  name: string;
  options: string[];
  placeholder: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block font-mono text-xs uppercase tracking-wide text-ink-400">
        {label}
      </label>
      <select
        id={name}
        name={name}
        defaultValue=""
        className="form-select w-full rounded-sm border border-surface-border bg-ink-950/60 px-4 py-3 text-sm text-ink-100 focus:border-signal focus:outline-none"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
