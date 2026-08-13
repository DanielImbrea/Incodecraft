export type Project = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  description: string;
  href?: string;
  year: string;
  technology: string[];
  featured: boolean;
  isPlaceholder?: boolean;
  caseStudy: {
    overview: string;
    challenge: string;
    approach: string;
    solution: string;
    features: string[];
    outcome: string;
    takeaways: string[];
  };
};

export const projects: Project[] = [
  {
    slug: "pixiqueai",
    name: "PixiqueAI",
    category: "AI SaaS Platform",
    summary:
      "An AI-powered image processing platform for creators and businesses, covering uploads, transformation, credits and billing.",
    description:
      "PixiqueAI is a SaaS product for AI-assisted image processing — upload, transform and export images through a fast, modern web interface backed by a credits-based billing system.",
    href: "https://pixiqueai.com/",
    year: "2024–2025",
    technology: ["Next.js", "TypeScript", "Supabase", "Stripe", "Replicate", "Vercel", "Cloudflare"],
    featured: true,
    caseStudy: {
      overview:
        "PixiqueAI needed a product that could take AI image processing — historically a technical, script-driven workflow — and turn it into something anyone could use directly from the browser, without sacrificing the performance and reliability a paying user expects from a SaaS product.",
      challenge:
        "AI image transformation is compute-heavy and asynchronous by nature. The core challenge was designing an interface and backend architecture that could handle uploads, queued AI processing, credit consumption and billing, while still feeling instant and predictable to the end user.",
      approach:
        "The build started with the data model: how images, jobs, credits and users relate to each other, and how state moves from 'uploaded' to 'processing' to 'ready' without leaving the user guessing. From there, the interface was designed around that state machine rather than the other way around — every screen reflects exactly where a job stands.",
      solution:
        "The result is a Next.js and TypeScript application with Supabase handling authentication, storage and the relational data layer, Replicate powering the underlying AI image models, and Stripe managing subscriptions and credit top-ups. Cloudflare sits in front of media delivery for fast, cached image loading worldwide, and the entire application is deployed on Vercel for fast, reliable global delivery.",
      features: [
        "Drag-and-drop image uploads with client-side validation and progress feedback",
        "Asynchronous AI processing queue with real-time job status",
        "Credit-based usage system tied to Stripe subscriptions and one-off top-ups",
        "Secure authentication and per-user storage via Supabase",
        "Batch processing for multiple images in a single job",
        "Responsive, modern SaaS interface built for both desktop and mobile use",
        "CDN-backed image delivery for fast load times globally",
      ],
      outcome:
        "PixiqueAI shipped as a working, production SaaS product with a complete end-to-end flow — from sign-up, to upload, to AI processing, to billing — running live in production today.",
      takeaways: [
        "Designing around asynchronous state early prevents a fragile interface later.",
        "A credits-based billing model needs to be enforced consistently on both the client and the server to stay trustworthy.",
        "Offloading heavy compute to a specialised AI infrastructure provider (Replicate) kept the core application lean and maintainable.",
      ],
    },
  },
  {
    slug: "commerce-platform",
    name: "Custom E-commerce Platform",
    category: "E-commerce",
    summary:
      "A custom-built online store with product management, Stripe checkout and an admin dashboard for inventory and orders.",
    description:
      "A fully custom e-commerce platform built to move a growing retail business away from a restrictive template-based store and onto an architecture the business actually owns.",
    year: "2024",
    technology: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    featured: true,
    isPlaceholder: true,
    caseStudy: {
      overview:
        "This project replaced a rigid template storefront with a custom platform designed around the business's actual catalog, fulfilment process and growth plans.",
      challenge:
        "The previous platform limited product variants, made bulk catalog updates painful, and offered no real flexibility for promotions or shipping rules specific to the business.",
      approach:
        "Work began with a full audit of the existing catalog and checkout flow, mapping every edge case — variants, bundles, discounts and shipping tiers — before a single line of interface code was written.",
      solution:
        "A custom storefront and admin panel were built with structured product data, a Stripe-backed checkout, and an inventory dashboard that lets non-technical staff manage products, orders and stock without touching code.",
      features: [
        "Custom product catalog with variants, bundles and filtering",
        "Stripe-powered checkout with saved payment methods",
        "Admin dashboard for inventory, order and customer management",
        "Shipping rules and rate configuration",
        "SEO-optimised product and category pages",
      ],
      outcome:
        "The business now runs on a platform it fully owns, with the flexibility to add features and promotions that were not possible on the previous template.",
      takeaways: [
        "Mapping edge cases in the catalog before building the UI avoided costly rework.",
        "A custom admin panel pays for itself quickly once a team relies on it daily.",
      ],
    },
  },
  {
    slug: "operations-dashboard",
    name: "Business Operations Dashboard",
    category: "Web Application",
    summary:
      "An internal dashboard for tracking operations, customers and tasks, replacing a patchwork of spreadsheets.",
    description:
      "A custom internal tool built to give a small operations team a single, reliable view of customers, tasks and workload — replacing a set of disconnected spreadsheets.",
    year: "2023–2024",
    technology: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    featured: true,
    isPlaceholder: true,
    caseStudy: {
      overview:
        "The team was coordinating operations across multiple spreadsheets that regularly fell out of sync. The goal was one dependable internal system.",
      challenge:
        "Data lived in separate spreadsheets maintained by different people, leading to conflicting numbers and manual reconciliation every week.",
      approach:
        "The first step was consolidating the team's real workflow into a single data model, then designing views around how each role actually used the information day to day.",
      solution:
        "A role-based dashboard was built with customer records, task tracking and lightweight reporting, backed by a proper relational database instead of spreadsheet files.",
      features: [
        "Centralised customer and task records",
        "Role-based views for different team functions",
        "Lightweight reporting and status overviews",
        "Search and filtering across records",
      ],
      outcome:
        "The team now works from one shared source of truth instead of reconciling spreadsheets, with a system that can grow as the operation scales.",
      takeaways: [
        "Internal tools succeed when they mirror how a team already works, not how a system 'should' work.",
        "Replacing spreadsheets is as much a change-management exercise as a technical one.",
      ],
    },
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
