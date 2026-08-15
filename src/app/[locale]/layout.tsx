import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import "../globals.css";
import { Navbar } from "@/components/Navbar";
import { CookieConsent } from "@/components/CookieConsent";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { getSite } from "@/data";
import { routing, type Locale } from "@/i18n/routing";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk", display: "swap" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const site = getSite(locale);

  return {
    metadataBase: new URL(site.url),
    title: {
      default: `${site.name} — ${site.descriptor}`,
      template: `%s | ${site.name}`,
    },
    description: site.description,
    keywords: [
      "web development Romania",
      "dezvoltare web România",
      "e-commerce development Romania",
      "web application development Romania",
      "custom web development Romania",
      "AI development studio",
    ],
    authors: [{ name: site.name }],
    creator: site.name,
    openGraph: {
      type: "website",
      locale: locale === "ro" ? "ro_RO" : "en_US",
      url: site.url,
      siteName: site.name,
      title: `${site.name} — Independent Digital Studio`,
      description: site.description,
      images: [{ url: `${site.url}/og-image.png`, width: 1200, height: 630, alt: site.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${site.name} — Independent Digital Studio`,
      description: site.description,
    },
    icons: {
      icon: [
        { url: "/logos/favicon.ico", sizes: "any" },
        { url: "/logos/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/logos/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/logos/favicon-48x48.png", sizes: "48x48", type: "image/png" },
        { url: "/logos/favicon-96x96.png", sizes: "96x96", type: "image/png" },
        { url: "/logos/incodecraft-icon-square.svg", type: "image/svg+xml" },
      ],
      apple: "/logos/apple-touch-icon-180x180.png",
    },
    manifest: "/site.webmanifest",
    verification: process.env.NEXT_PUBLIC_GSC_VERIFICATION
      ? { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION }
      : undefined,
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const site = getSite(locale);
  const messages = await getMessages();
  const t = await getTranslations({ locale, namespace: "common" });

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    name: site.name,
    url: site.url,
    email: site.email,
    description: site.description,
    address: {
      "@type": "PostalAddress",
      addressCountry: "RO",
    },
    areaServed: ["RO"],
    sameAs: [site.social.linkedin],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    inLanguage: locale,
  };

  return (
    <html lang={locale} className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <JsonLd data={organizationJsonLd} />
          <JsonLd data={websiteJsonLd} />
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-signal focus:px-4 focus:py-2 focus:text-ink-950"
          >
            {t("skipToContent")}
          </a>
          <Navbar locale={locale} />
          <main id="main-content">{children}</main>
          <Footer locale={locale} />
          <CookieConsent />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
