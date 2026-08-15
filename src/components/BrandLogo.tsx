import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  showText?: boolean;
};

export function BrandLogo({ className, showText = true }: BrandLogoProps) {
  return (
    <span
      className={cn(
        "flex items-center gap-2 font-display text-lg font-semibold tracking-tight text-ink-50",
        className
      )}
    >
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xs border border-signal/40 bg-signal/10 font-mono text-xs text-signal">
        {"</>"}
      </span>
      {showText && <span>INCODECRAFT</span>}
      <Image
        src="/logos/incodecraft-mark-transparent.svg"
        alt=""
        aria-hidden
        width={36}
        height={36}
        className="h-9 w-9 shrink-0"
        unoptimized
      />
    </span>
  );
}
