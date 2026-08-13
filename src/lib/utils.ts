import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatDate(dateString: string, locale = "ro") {
  const date = new Date(dateString);
  const intlLocale = locale === "ro" ? "ro-RO" : "en-US";
  return date.toLocaleDateString(intlLocale, { year: "numeric", month: "long", day: "numeric" });
}
