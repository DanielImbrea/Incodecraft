/** Public GA4 measurement ID — visible in page source on every site that uses GA. */
export const GA_MEASUREMENT_ID = "G-F2D7QT2908";

function isValidGaId(value: string | undefined): value is string {
  return typeof value === "string" && /^G-[A-Z0-9]+$/.test(value);
}

/** Prefer env override in dev/preview; ignore masked or invalid Vercel values. */
export function getGaMeasurementId(): string | null {
  const fromEnv = process.env.NEXT_PUBLIC_GA_ID;
  if (isValidGaId(fromEnv)) return fromEnv;
  return GA_MEASUREMENT_ID;
}
