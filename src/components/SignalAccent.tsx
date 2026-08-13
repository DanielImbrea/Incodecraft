import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function TerminalLine({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("font-mono text-sm text-ink-500", className)}>
      <span className="text-signal">$</span> {children}
      <span className="cursor-blink" />
    </p>
  );
}

export function Eyebrow({
  children,
  className,
  cursor = false,
}: {
  children: ReactNode;
  className?: string;
  cursor?: boolean;
}) {
  return (
    <p className={cn("eyebrow", className)}>
      {children}
      {cursor && <span className="cursor-blink" />}
    </p>
  );
}

export function SignalDecor({
  variant = "glow",
  className,
}: {
  variant?: "glow" | "glow-sm" | "line-v" | "line-h";
  className?: string;
}) {
  if (variant === "line-v") {
    return (
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute left-0 top-8 h-20 w-px bg-signal signal-breathe",
          className,
        )}
      />
    );
  }

  if (variant === "line-h") {
    return (
      <div
        aria-hidden
        className={cn(
          "pointer-events-none signal-accent-h signal-breathe",
          className,
        )}
      />
    );
  }

  if (variant === "glow-sm") {
    return (
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute h-32 w-32 rounded-full bg-signal/20 blur-[70px] signal-breathe",
          className,
        )}
      />
    );
  }

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute h-48 w-48 rounded-full bg-signal/15 blur-[90px] signal-breathe",
        className,
      )}
    />
  );
}
