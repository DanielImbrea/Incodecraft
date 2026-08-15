"use client";

import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Link, usePathname } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { getSite } from "@/data";
import type { Locale } from "@/i18n/routing";
import { BrandLogo } from "@/components/BrandLogo";
import { cn } from "@/lib/utils";

export function Navbar({ locale }: { locale: Locale }) {
  const t = useTranslations("common");
  const site = getSite(locale);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-surface-border bg-ink/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="container-xl flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="group">
          <BrandLogo />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium text-ink-300 hover:text-ink-50",
                pathname === item.href && "text-ink-50"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <LanguageSwitcher locale={locale} />
          <Link href="/contact" className="btn-primary">
            {t("startProject")} <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitcher locale={locale} />
          <button
            aria-label={open ? t("closeMenu") : t("openMenu")}
            className="text-ink-100"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-surface-border bg-ink px-6 pb-8 pt-4 md:hidden">
          <div className="flex flex-col gap-1">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-sm px-3 py-3 text-base font-medium text-ink-200 hover:bg-surface-raised hover:text-ink-50"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary mt-3 w-full">
              {t("startProject")} <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
