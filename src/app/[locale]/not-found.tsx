import { Link } from "@/i18n/routing";
import { ArrowUpRight } from "lucide-react";
import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";

export default async function NotFound() {
  const locale = await getLocale();
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "notFound" });
  const tc = await getTranslations({ locale, namespace: "common" });

  return (
    <section className="flex min-h-[70vh] items-center">
      <div className="container-xl text-center">
        <p className="eyebrow mb-4 justify-center">{t("eyebrow")}</p>
        <h1 className="text-display-lg text-ink-50">
          <span className="font-mono text-signal">404:</span> {t("title")}
          <span className="cursor-blink" />
        </h1>
        <p className="mx-auto mt-6 max-w-md text-ink-300">{t("description")}</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/" className="btn-primary">
            {tc("backToHome")} <ArrowUpRight size={16} />
          </Link>
          <Link href="/contact" className="btn-secondary">
            {tc("contactUs")}
          </Link>
        </div>
      </div>
    </section>
  );
}
