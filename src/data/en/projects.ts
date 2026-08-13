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
    slug: "postcadence",
    name: "PostCadence",
    category: "AI · Social Media",
    summary:
      "An AI platform that helps people and businesses post regularly on social media — generated content, scheduled and published from one place.",
    description:
      "A SaaS product built around a simple problem: most people want a consistent social media presence but lack the time or inspiration to post every day. AI generates posts, adapts tone per platform and schedules them automatically.",
    year: "2024–2025",
    technology: ["Next.js", "TypeScript", "Supabase", "OpenAI", "Stripe", "Vercel"],
    featured: true,
    isPlaceholder: true,
    caseStudy: {
      overview:
        "The project started from a common observation: accounts that grow post consistently, but few people have the bandwidth to write something good every day. The goal was a tool that removes friction — not just generating text, but maintaining a publishing rhythm over time.",
      challenge:
        "Content generation is only half the problem. Users abandon tools when they have to copy manually to each platform, when posts sound generic, or when they have no clear view of what goes live next week.",
      approach:
        "The flow was designed around habit: set your brand profile once, choose frequency and tone, and the platform proposes a content calendar you can approve, edit or regenerate — not an empty chat that leaves the user guessing the next step.",
      solution:
        "A web app with AI post generation adapted per platform (captions, hashtags, variations), a content calendar, automatic scheduling and an activity dashboard. Authentication, subscription plans and post history in one product.",
      features: [
        "AI post generation based on brand profile and goals",
        "Tone and format adaptation per platform (Instagram, Facebook, LinkedIn, X)",
        "Content calendar with weekly or monthly scheduling",
        "Edit and regenerate before publishing",
        "Automatic scheduling — posts go live at the set time",
        "Post history and account activity overview",
        "Subscription plans with configurable generation limits",
      ],
      outcome:
        "Users can maintain a steady posting rhythm without starting from scratch every day — AI proposes, the user approves, the platform publishes.",
      takeaways: [
        "Consistency beats virality for most small accounts — the product must optimise for habit, not a single perfect post.",
        "The more AI is embedded in the scheduling workflow, the less manual copy-paste between tool and social networks.",
      ],
    },
  },
  {
    slug: "custom-crm",
    name: "Custom CRM Platform",
    category: "Web Application",
    summary:
      "A bespoke CRM built around real sales and client workflows — pipelines, contacts, tasks and reporting, without the limits of an off-the-shelf tool.",
    description:
      "A fully custom customer relationship management system designed for teams that outgrew spreadsheets and generic SaaS tools, with modules shaped to how the business actually sells and follows up.",
    year: "2023–2025",
    technology: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "REST APIs"],
    featured: true,
    isPlaceholder: true,
    caseStudy: {
      overview:
        "The client needed one place to track leads, active deals, client history and follow-ups — not a bloated enterprise CRM, but something built precisely for their process.",
      challenge:
        "Off-the-shelf CRMs forced awkward workarounds: fields that did not match their pipeline, reports they could not trust, and monthly fees for features they never used.",
      approach:
        "Every stage of the sales and client lifecycle was mapped first — from first contact to closed deal and post-sale follow-up — then translated into a data model and interface the team could adopt without training manuals.",
      solution:
        "A web-based CRM with custom pipeline stages, contact and company records, task reminders, activity history and role-based access, backed by a relational database the client fully owns.",
      features: [
        "Custom sales pipeline with stages matched to the business process",
        "Contact, company and deal records with full activity history",
        "Task assignments, reminders and follow-up tracking",
        "Role-based access for sales, management and admin",
        "Search, filters and lightweight reporting dashboards",
        "Export and integration hooks for email or accounting tools",
      ],
      outcome:
        "The team moved from scattered notes and spreadsheets to one shared system they use daily — with room to add modules as the business grows.",
      takeaways: [
        "A CRM only works if the pipeline mirrors how the team already thinks about deals.",
        "Owning the codebase means new fields and workflows never wait on a vendor roadmap.",
      ],
    },
  },
  {
    slug: "offline-crm",
    name: "Offline-First CRM",
    category: "Web Application",
    summary:
      "Offline CRM systems for municipal registry offices — citizen files, document requests and automatic sync when connectivity returns.",
    description:
      "An offline-capable registry tool for town hall secretary offices and municipal desks in Romania and Moldova — where a stable connection cannot be taken for granted.",
    year: "2024–2025",
    technology: ["Next.js", "TypeScript", "PostgreSQL", "PWA", "IndexedDB", "Service Workers"],
    featured: true,
    isPlaceholder: true,
    caseStudy: {
      overview:
        "Municipal secretaries often work in buildings with weak or intermittent internet. They still need to register citizen files, requests and documents without the system freezing when the connection drops.",
      challenge:
        "Standard cloud CRMs become unusable offline. Staff revert to paper forms, then re-enter data later — doubling work and introducing errors.",
      approach:
        "The architecture was designed offline-first: local storage for day-to-day operations, background sync when connectivity returns, and clear conflict rules so two people updating the same record never silently overwrite each other.",
      solution:
        "A progressive web application that runs in the browser, caches records locally and syncs with the central database when online — focused on registry desks, citizen files and document requests in town halls.",
      features: [
        "Full read/write functionality without an active internet connection",
        "Automatic background sync when the network is available",
        "Citizen file and document request tracking for municipal offices",
        "Incoming/outgoing request log with full status history",
        "Conflict detection and merge for multi-desk front-office environments",
        "Print-friendly summaries and export for archiving",
      ],
      outcome:
        "Front-desk staff can keep working through outages. Data entered offline syncs reliably once connectivity returns, without duplicate entry on paper.",
      takeaways: [
        "Offline-first is a product decision, not a patch — it has to be planned from the database layer up.",
        "Public-sector desks need offline reliability — clinic features (salaries, reports, CSV) live in a separate dedicated CRM.",
      ],
    },
  },
  {
    slug: "clinic-crm",
    name: "Clinic CRM Suite",
    category: "Web Application",
    summary:
      "Custom CRM systems delivered for multiple clinics — patients, scheduling, salary calculation, reports and CSV exports, tailored to each practice.",
    description:
      "Management platforms for private clinics and medical practices: several distinct deployments, each configured to the clinic's workflow — from reception and patient records to financial reporting and accounting extracts.",
    year: "2023–2025",
    technology: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "PWA"],
    featured: true,
    isPlaceholder: true,
    caseStudy: {
      overview:
        "Multiple clinics needed the same thing: one system instead of ledgers, spreadsheets and manual calculations — but each with its own scheduling rules, rates and staff structure.",
      challenge:
        "Every clinic operated differently: doctors on variable commission, reception on shifting schedules, monthly reports required by accounting, and zero tolerance for duplicating data between paper and digital.",
      approach:
        "Each clinic's real workflow was mapped first — patient intake, appointments, services delivered, staff commission — then reusable modules (reports, CSV export, salary calculation) were built on a shared core.",
      solution:
        "Custom web CRMs, one per clinic, with patient records, appointment calendars, service logs, configurable salary and commission rules, daily/monthly reports and CSV export for accounting or external analysis.",
      features: [
        "Patient records and visit / service history",
        "Multi-doctor, multi-room appointment scheduling",
        "Salary and commission calculation with per-clinic configurable rules",
        "Daily, monthly and custom date-range reports",
        "CSV export for accounting, audits or Excel analysis",
        "Separate roles: reception, doctor, admin, management",
        "Offline operation where connectivity is unreliable (PWA + sync)",
        "Filters, search and dashboards for clinic activity",
      ],
      outcome:
        "Each clinic works from one system shaped to how it actually operates — no manual re-entry and reports ready to hand to accounting.",
      takeaways: [
        "Clinic CRMs look similar on the surface, but salary and reporting rules differ radically — configurability beats a fixed template.",
        "CSV export and clear reports earn admin trust faster than any 'smart' feature.",
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
    slug: "presentation-websites",
    name: "Presentation Websites",
    category: "Web Development",
    summary:
      "Custom corporate and brochure websites — fast, clear and built to represent a business credibly online.",
    description:
      "Multi-page sites for companies, freelancers and local services: clear structure, brand-matched design, contact forms and an SEO-ready foundation — no generic template.",
    year: "2023–2025",
    technology: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    featured: true,
    caseStudy: {
      overview:
        "Many businesses need a site that explains what they do, builds trust and turns visitors into leads — not a cluttered page or a template that looks like ten other sites in the same industry.",
      challenge:
        "Cheap template sites look fine at launch but limit structure, speed and differentiation as the business grows or wants to appear seriously in search results.",
      approach:
        "Each page's content and goals are defined first — who the audience is, what action we want from the visitor — then design and implementation follow that structure, not the other way around.",
      solution:
        "Custom sites with service pages, about, contact, blog or dedicated landing pages, built in Next.js for speed, accessibility and correct metadata from day one.",
      features: [
        "Custom design aligned with the brand's visual identity",
        "Clear structure: services, about, contact, legal",
        "Contact forms and lead capture",
        "On-page SEO and per-page metadata",
        "High performance and responsive layout",
        "Code the client owns, no closed platform",
      ],
      outcome:
        "The business has a site that represents it properly, loads fast and can be extended with new pages or features without switching platforms.",
      takeaways: [
        "A successful presentation site is clear first, impressive second.",
        "Building custom from the start costs less than rebuilding a template a year later.",
      ],
    },
  },
  {
    slug: "portfolio-websites",
    name: "Portfolio Websites",
    category: "Web Development",
    summary:
      "Portfolio sites for creators, agencies and professionals — projects, case studies and contact in a clean, fast format that's easy to update.",
    description:
      "Custom online portfolios for designers, developers, photographers, architects and small studios — focused on the work shown, not unnecessary effects.",
    year: "2023–2025",
    technology: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    featured: true,
    caseStudy: {
      overview:
        "A good portfolio does the filtering work: it quickly shows what kind of work you do, how you think and how someone can reach you — without the visitor hunting through scattered links.",
      challenge:
        "Free portfolio platforms or generic templates look similar, load slowly or don't allow the case study structure a senior professional needs.",
      approach:
        "Representative projects are selected and ordered strategically, each with brief context — problem, approach, outcome — not just a grid of images with no explanation.",
      solution:
        "A custom portfolio site with a home page, project grid, case study pages, about page and direct contact — easy to extend when a new project is ready.",
      features: [
        "Project grid with categories and filtering",
        "Case study pages with project detail",
        "About page and contact section",
        "Design that puts the work centre stage, not the template",
        "Performance optimised for fast image loading",
        "Structure that's easy to update when new projects are added",
      ],
      outcome:
        "The professional has a portfolio that looks as good as the work it presents — and can add new projects without rebuilding the site.",
      takeaways: [
        "Fewer projects explained well beat a large grid with no context.",
        "A portfolio that works well on mobile matters just as much as on desktop.",
      ],
    },
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
