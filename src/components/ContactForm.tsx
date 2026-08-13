"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react";

const projectTypes = ["Website", "E-commerce", "Web Application", "SaaS", "AI Application", "Custom Software", "Other"];
const budgets = ["€500–€1,000", "€1,000–€3,000", "€3,000–€5,000", "€5,000–€10,000", "€10,000+"];
const timelines = ["As soon as possible", "Within 1 month", "1–3 months", "3+ months", "Not sure yet"];
const heardFrom = ["Search engine", "Referral", "Social media", "GitHub", "Other"];

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
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
        <h3 className="font-display text-xl text-ink-50">Message sent</h3>
        <p className="max-w-sm text-sm text-ink-300">
          Thanks for reaching out. Every project starts with understanding what you actually need — expect a reply within 1–2 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-6 p-6 md:p-8">
      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Name" name="name" required placeholder="Your full name" />
        <Field label="Company" name="company" placeholder="Company name (optional)" />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Email" name="email" type="email" required placeholder="you@company.com" />
        <Field label="Phone" name="phone" placeholder="Optional" />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <SelectField label="Project type" name="projectType" options={projectTypes} />
        <SelectField label="Budget" name="budget" options={budgets} />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <SelectField label="Timeline" name="timeline" options={timelines} />
        <SelectField label="How did you hear about us?" name="heardFrom" options={heardFrom} />
      </div>

      <div>
        <label htmlFor="description" className="mb-2 block font-mono text-xs uppercase tracking-wide text-ink-400">
          Project description
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={5}
          placeholder="What are you building? What problem should this project solve?"
          className="w-full rounded-sm border border-surface-border bg-ink-950/60 px-4 py-3 text-sm text-ink-100 placeholder:text-ink-500 focus:border-signal focus:outline-none"
        />
      </div>

      <button type="submit" disabled={status === "submitting"} className="btn-primary w-full sm:w-auto">
        {status === "submitting" ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Sending
          </>
        ) : (
          <>
            Send project details <ArrowUpRight size={16} />
          </>
        )}
      </button>

      {status === "error" && (
        <p className="font-mono text-xs text-signal">
          Something went wrong. Please email {" "}
          <a href="mailto:hello@incodecraft.com" className="underline">
            hello@incodecraft.com
          </a>{" "}
          directly.
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

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block font-mono text-xs uppercase tracking-wide text-ink-400">
        {label}
      </label>
      <select
        id={name}
        name={name}
        defaultValue=""
        className="w-full rounded-sm border border-surface-border bg-ink-950/60 px-4 py-3 text-sm text-ink-100 focus:border-signal focus:outline-none"
      >
        <option value="" disabled>
          Select an option
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
