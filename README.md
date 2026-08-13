# INCODECRAFT — Digital Studio Website

Production-ready marketing website and portfolio for INCODECRAFT, an independent, developer-led
digital studio. Built with Next.js 14 (App Router), TypeScript and Tailwind CSS.

## Tech stack

- **Framework:** Next.js 14 (App Router, React Server Components)
- **Language:** TypeScript
- **Styling:** Tailwind CSS with a custom design system (`tailwind.config.ts`)
- **Animation:** Framer Motion (scroll reveals, subtle interactions)
- **Icons:** lucide-react
- **Content:** Structured local data files (`src/data/*`) — no database required
- **Deployment target:** Vercel

## Project structure

```
src/
  app/                  # Routes (App Router)
    work/               # /work, /work/[slug]
    services/           # /services, /services/[slug]
    blog/               # /blog, /blog/[slug]
    about/ process/ contact/ privacy-policy/ terms/
    api/contact/        # Contact form submission handler
    sitemap.ts robots.ts  # Dynamic SEO files
  components/           # Reusable UI components
  data/                 # Site content: projects, services, blog posts, FAQs
  lib/                  # Metadata + utility helpers
public/                 # Static assets (favicon, OG image)
```

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Production build

```bash
npm run lint
npm run build
npm run start
```

> **Note:** This project was generated in a sandboxed environment without network access, so
> `npm install` / `npm run build` could not be executed here to verify the build. Run the build
> locally (or in CI) before deploying, and fix any dependency-resolution issues that surface —
> the code has been written carefully against the documented Next.js 14 / Tailwind 3 APIs, but a
> real build pass is the only way to guarantee a green build in your environment.

## Environment variables

Copy `.env.example` to `.env.local` and configure:

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL, used in metadata, sitemap and structured data |
| `CONTACT_FORM_ENDPOINT` | Where contact form submissions are forwarded (e.g. Resend, Formspree, or your own serverless function). If unset, submissions are only logged server-side. |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 measurement ID (optional) |
| `NEXT_PUBLIC_GSC_VERIFICATION` | Google Search Console verification token (optional) |

## Adding a new portfolio project

Edit `src/data/projects.ts` and add a new object to the `projects` array following the existing
`Project` type — including a full case study (`overview`, `challenge`, `approach`, `solution`,
`features`, `outcome`, `takeaways`). The `/work` and `/work/[slug]` pages pick it up automatically.
Set `isPlaceholder: true` if you don't yet have final project imagery.

## Adding a new blog post

Edit `src/data/blog.ts` and add a new object to the `blogPosts` array. `contentHtml` accepts
hand-authored HTML (headings, paragraphs, lists, tables) styled by the `.prose-blog` classes in
`globals.css`. The `/blog` and `/blog/[slug]` pages, sitemap, and Article/FAQ structured data are
generated automatically.

## Changing the brand

The brand name, descriptor, contact email, location and social links are centralized in
`src/data/site.ts`. Update that file to rebrand the site without touching individual pages.
Primary brand colors and typography live in `tailwind.config.ts` (`colors.signal`, `fontFamily`).

## Updating contact information

- Email, location and social links: `src/data/site.ts`
- Contact form fields and options (project types, budget ranges, timelines): `src/components/ContactForm.tsx`
- Form submission handling: `src/app/api/contact/route.ts`

## SEO configuration

- Global metadata defaults: `src/app/layout.tsx`
- Per-page metadata: each page exports a `metadata` object built via `buildMetadata()` in `src/lib/metadata.ts`
- Structured data (Organization, WebSite, Service, Article, FAQPage, BreadcrumbList): `src/components/JsonLd.tsx` usage across pages
- Sitemap: `src/app/sitemap.ts` (auto-generated from data files)
- Robots: `src/app/robots.ts`

Set `NEXT_PUBLIC_SITE_URL` to your real production domain before deploying — it feeds canonical
URLs, Open Graph tags, the sitemap and structured data.

## Deploying to Vercel

1. Push this repository to GitHub (see below).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Set the environment variables listed above in the Vercel project settings.
4. Deploy. Vercel will detect the Next.js framework automatically.

## Opening in Cursor

1. Extract this project.
2. Open the folder in Cursor (`File → Open Folder`).
3. Run `npm install` in the integrated terminal.
4. Run `npm run dev` and open `http://localhost:3000`.

## Uploading to GitHub

```bash
cd incodecraft
git init
git add .
git commit -m "Initial commit — INCODECRAFT website"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

## Content you still need to replace

- **Portrait photo** on `/about` (currently a placeholder frame)
- **Project screenshots/visuals** for all three portfolio case studies (currently styled placeholder frames — PixiqueAI has real project details and technology, but no screenshots were provided)
- **OG image** (`public/og-image.png`) — a simple generated placeholder is included; replace with a designed brand image before launch
- **Legal pages** (`/privacy-policy`, `/terms`) — placeholder structure included; review with legal guidance appropriate to your jurisdiction before launch
- **Social links** in `src/data/site.ts` (GitHub/LinkedIn/X currently point to placeholder `incodecraft` handles)
- **Contact form delivery** — set `CONTACT_FORM_ENDPOINT` to an actual email/form service, or replace `src/app/api/contact/route.ts` with your preferred provider's SDK
