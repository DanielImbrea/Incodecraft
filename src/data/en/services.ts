export type Service = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  summary: string;
  whoFor: string[];
  whatIBuild: string[];
  typicalFeatures: string[];
  businessValue: string[];
};

export const services: Service[] = [
  {
    slug: "web-development",
    name: "Web Development",
    shortName: "Websites",
    tagline: "Modern, fast websites built to represent your business properly.",
    summary:
      "Corporate websites, landing pages and marketing sites, custom-built and optimised for speed, search visibility and conversion — not assembled from a generic template.",
    whoFor: [
      "Businesses that need a professional website that reflects how they actually operate",
      "Companies outgrowing a template-based or outdated website",
      "Teams launching a new product, service or brand",
    ],
    whatIBuild: [
      "Corporate and business websites",
      "Marketing and landing pages",
      "Multi-page brochure sites with CMS-ready content",
      "SEO-ready site architecture from day one",
    ],
    typicalFeatures: [
      "Custom design system tailored to your brand",
      "Fast, accessible, mobile-first implementation",
      "On-page SEO structure and metadata",
      "Contact and lead-capture forms",
      "Analytics-ready setup",
    ],
    businessValue: [
      "A site that loads fast and represents your business credibly",
      "Structure that search engines can actually index well",
      "A foundation that's easy to extend as your business grows",
    ],
  },
  {
    slug: "web-applications",
    name: "Web Applications",
    shortName: "Applications",
    tagline: "Custom software for the parts of your business that spreadsheets can't handle.",
    summary:
      "Dashboards, CRMs, booking systems, customer portals and internal tools — built around your actual workflow, not a rigid off-the-shelf template.",
    whoFor: [
      "Businesses coordinating operations across spreadsheets or disconnected tools",
      "Teams that need a customer-facing portal or booking system",
      "Companies that need software matched to a specific internal process",
    ],
    whatIBuild: [
      "Business dashboards and internal tools",
      "CRM and customer management systems",
      "Booking and scheduling platforms",
      "Customer portals",
      "SaaS products, from first version to ongoing iteration",
    ],
    typicalFeatures: [
      "Authentication and role-based access",
      "Custom data models built around your workflow",
      "Reporting and lightweight analytics",
      "Integrations with the tools you already use",
      "Clean, maintainable architecture that can scale with the business",
    ],
    businessValue: [
      "Replace fragile spreadsheets with one dependable system",
      "Software shaped around how your team actually works",
      "A codebase you own, not a locked-in third-party platform",
    ],
  },
  {
    slug: "ecommerce",
    name: "E-commerce Development",
    shortName: "E-commerce",
    tagline: "Online stores built to sell — not just to look good.",
    summary:
      "Custom online stores and platform-based builds (Shopify, WooCommerce) covering catalog, checkout, shipping and admin tooling, built with Romanian and Moldovan e-commerce needs in mind.",
    whoFor: [
      "Businesses launching a new online store",
      "Retailers outgrowing a restrictive template storefront",
      "Companies that need custom checkout, shipping or catalog logic",
    ],
    whatIBuild: [
      "Custom-built online stores",
      "WooCommerce and Shopify implementations",
      "Product catalog and inventory systems",
      "Stripe and local payment integrations",
      "Shipping and fulfilment integrations",
      "Admin panels for non-technical store management",
    ],
    typicalFeatures: [
      "Advanced product search and filtering",
      "Cart and streamlined checkout flow",
      "Inventory and order management",
      "SEO-optimised product and category pages",
      "Performance-tuned for fast load times on mobile",
    ],
    businessValue: [
      "A store built around your catalog and fulfilment process, not a generic template",
      "Faster pages and smoother checkout, which matters directly for conversion",
      "An admin system your team can run without developer help",
    ],
  },
  {
    slug: "ai-development",
    name: "AI-Powered Applications",
    shortName: "AI",
    tagline: "Practical AI features that solve a real problem in your product.",
    summary:
      "AI integrations, automation workflows and AI-powered applications — from image processing pipelines to assistants embedded directly in your product.",
    whoFor: [
      "Products that need an AI feature to work reliably, not just as a demo",
      "Businesses looking to automate a manual, repetitive workflow",
      "Teams that want an AI assistant embedded in an existing product",
    ],
    whatIBuild: [
      "AI integrations inside existing web applications",
      "AI-powered image processing pipelines",
      "Automation workflows connecting AI models to business systems",
      "AI assistants and chat-based interfaces",
    ],
    typicalFeatures: [
      "Integration with leading AI model providers",
      "Asynchronous job processing for compute-heavy tasks",
      "Usage tracking and credit or quota systems",
      "Clear fallback and error handling when AI results are uncertain",
    ],
    businessValue: [
      "AI features that hold up in production, not just in a demo",
      "Automation that removes real manual work from your team",
      "A technical partner who understands both the AI layer and the product around it",
    ],
  },
  {
    slug: "integrations",
    name: "Custom Integrations",
    shortName: "Integrations",
    tagline: "Connect the tools your business already relies on.",
    summary:
      "APIs, payment providers, email systems, CRMs and other external services, integrated cleanly into your existing product or website.",
    whoFor: [
      "Businesses that need two systems to talk to each other reliably",
      "Teams adding payments, email or CRM connections to an existing site or app",
    ],
    whatIBuild: [
      "Payment integrations (Stripe and others)",
      "Email and notification systems",
      "CRM and third-party API integrations",
      "Automation between existing business tools",
    ],
    typicalFeatures: [
      "Secure handling of credentials and environment configuration",
      "Error handling and retry logic for external calls",
      "Clear logging so issues can be diagnosed quickly",
    ],
    businessValue: [
      "Less manual work moving data between systems",
      "Fewer errors from copy-pasting information between tools",
    ],
  },
  {
    slug: "maintenance",
    name: "Maintenance & Improvements",
    shortName: "Maintenance",
    tagline: "Keep an existing site or product fast, secure and current.",
    summary:
      "Ongoing performance work, bug fixing, new features, security updates and SEO improvements for websites and applications already in production.",
    whoFor: [
      "Businesses with an existing site or app that needs ongoing attention",
      "Teams without an in-house developer to maintain their product",
    ],
    whatIBuild: [
      "Performance and Core Web Vitals improvements",
      "Bug fixes and stability work",
      "New feature development on existing codebases",
      "Security patches and dependency updates",
      "SEO and technical audits",
    ],
    typicalFeatures: [
      "Regular health checks on performance and security",
      "Clear reporting on what was changed and why",
    ],
    businessValue: [
      "A product that stays fast, secure and current over time",
      "Direct access to the person maintaining your codebase",
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
