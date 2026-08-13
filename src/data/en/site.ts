export const site = {
  name: "INCODECRAFT",
  legalName: "INCODECRAFT",
  descriptor: "Websites · Applications · E-commerce · AI",
  tagline: "Digital products, crafted with code.",
  description:
    "INCODECRAFT is an independent, developer-led digital studio building modern websites, custom web applications, e-commerce platforms and AI-powered digital products for ambitious businesses.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.incodecraft.com",
  email: "hello@incodecraft.com",
  location: {
    city: "Iași",
    region: "Iași County",
    country: "Romania",
    serves: "Romania, Moldova, and international clients",
  },
  social: {
    github: "https://github.com/incodecraft",
    linkedin: "https://www.linkedin.com/company/incodecraft",
    x: "https://x.com/incodecraft",
  },
  nav: [
    { label: "Work", href: "/work" },
    { label: "Services", href: "/services" },
    { label: "Process", href: "/process" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
  ],
  footerLinks: {
    services: [
      { label: "Web Development", href: "/services/web-development" },
      { label: "Web Applications", href: "/services/web-applications" },
      { label: "E-commerce", href: "/services/ecommerce" },
      { label: "AI Development", href: "/services/ai-development" },
    ],
    studio: [
      { label: "Work", href: "/work" },
      { label: "About", href: "/about" },
      { label: "Process", href: "/process" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  },
};
