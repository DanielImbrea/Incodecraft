export const site = {
  name: "INCODECRAFT",
  legalName: "INCODECRAFT",
  descriptor: "Website-uri · Aplicații · E-commerce · AI",
  tagline: "Produse digitale, create cu cod.",
  description:
    "INCODECRAFT este un studio digital independent, condus de developer, care construiește website-uri moderne, aplicații web personalizate, platforme e-commerce și produse digitale cu AI pentru afaceri ambițioase.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.incodecraft.com",
  email: "hello@incodecraft.com",
  location: {
    country: "România",
    footerLine: "Studio din România · Colaborăm național și internațional",
    serves: "Afaceri din România și clienți internaționali",
  },
  social: {
    github: "https://github.com/incodecraft",
    linkedin: "https://www.linkedin.com/company/incodecraft",
    x: "https://x.com/incodecraft",
  },
  nav: [
    { label: "Proiecte", href: "/work" },
    { label: "Servicii", href: "/services" },
    { label: "Proces", href: "/process" },
    { label: "Despre", href: "/about" },
    { label: "Blog", href: "/blog" },
  ],
  footerLinks: {
    services: [
      { label: "Dezvoltare web", href: "/services/web-development" },
      { label: "Aplicații web", href: "/services/web-applications" },
      { label: "E-commerce", href: "/services/ecommerce" },
      { label: "Dezvoltare AI", href: "/services/ai-development" },
    ],
    studio: [
      { label: "Proiecte", href: "/work" },
      { label: "Despre", href: "/about" },
      { label: "Proces", href: "/process" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
    legal: [
      { label: "Politica de confidențialitate", href: "/privacy-policy" },
      { label: "Termeni și condiții", href: "/terms" },
    ],
  },
};
