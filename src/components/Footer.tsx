import { Link } from "@/i18n/routing";
import { Linkedin, ArrowUpRight } from "lucide-react";
import { getSite } from "@/data";
import type { Locale } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import { BrandLogo } from "@/components/BrandLogo";
import { CookieSettingsLink } from "@/components/CookieSettingsLink";
import { TerminalLine } from "@/components/SignalAccent";

export async function Footer({ locale }: { locale: Locale }) {
  const site = getSite(locale);
  const t = await getTranslations({ locale, namespace: "common" });
  const tf = await getTranslations({ locale, namespace: "footer" });

  return (
    <footer className="border-t border-surface-border bg-surface/40">
      <div className="container-xl py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2">
            <Link href="/">
              <BrandLogo />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-400">{tf("tagline")}</p>
            <TerminalLine className="mt-5">{tf("terminal")}</TerminalLine>
            <p className="mt-6 font-mono text-xs text-ink-500">
              {site.location.footerLine}
            </p>
          </div>

          <FooterColumn title={t("services")} links={site.footerLinks.services} />
          <FooterColumn title={t("studio")} links={site.footerLinks.studio} />

          <div>
            <p className="eyebrow mb-4">{t("contact")}</p>
            <a href={`mailto:${site.email}`} className="text-sm text-ink-200 hover:text-signal">
              {site.email}
            </a>
            <div className="mt-6 flex gap-4">
              <a href={site.social.linkedin} aria-label="LinkedIn" className="text-ink-400 hover:text-ink-50">
                <Linkedin size={18} />
              </a>
            </div>
            <Link href="/contact" className="btn-secondary mt-6 w-fit">
              {t("startProject")} <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-surface-border pt-8 text-xs text-ink-500 md:flex-row md:items-center">
          <p>© 2023–{new Date().getFullYear()} INCODECRAFT. {t("copyright")}</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {site.footerLinks.legal.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-ink-200">
                {l.label}
              </Link>
            ))}
            <CookieSettingsLink />
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <p className="eyebrow mb-4">{title}</p>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-sm text-ink-300 hover:text-ink-50">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
