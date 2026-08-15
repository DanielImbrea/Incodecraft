import { extraBlogPosts } from "./blog-extra";
import { blogPosts2024 } from "./blog-2024";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readingTime: string;
  contentHtml: string;
  faqs?: { question: string; answer: string }[];
  relatedSlugs?: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-much-does-a-website-cost-in-romania",
    title: "How Much Does a Website Cost in Romania? A Realistic Breakdown",
    excerpt:
      "Website pricing varies enormously depending on scope. Here's a realistic breakdown of what drives cost for businesses in Romania and beyond.",
    category: "Web Development",
    author: "INCODECRAFT",
    date: "2026-01-12",
    readingTime: "7 min read",
    contentHtml: `
      <p>One of the first questions any business owner asks before starting a website project is simple: how much will it cost? The honest answer is that it depends heavily on scope, but you can still reason about it in a structured way.</p>
      <h2>The main cost drivers</h2>
      <p>Website cost is mostly a function of three things: how much custom design work is required, how much custom functionality the site needs beyond a page of content, and how much content strategy and copywriting is involved.</p>
      <ul>
        <li><strong>A simple brochure website</strong> with a handful of pages and standard functionality sits at the lower end of the range.</li>
        <li><strong>A custom-designed marketing site</strong> with a tailored design system, animations and a content structure built for SEO costs more, because more design and engineering hours go into it.</li>
        <li><strong>A website with custom functionality</strong> — booking forms, gated content, integrations with other systems — moves further up the range because it stops being "just a website" and becomes lightweight software.</li>
      </ul>
      <h2>Typical ranges</h2>
      <p>For the Romanian market, a professionally built, custom small-business website commonly falls in the €1,000–€3,000 range. At INCODECRAFT, projects can start from €500 when the project is clearly and well defined. We work with a steady flow of clients, and for us what matters less is maximising each invoice and what matters more is delivering properly, leaving you satisfied and earning your recommendation — that is how we grow together over the long term, without compromising on quality. A more ambitious marketing website with a bespoke design system and more pages typically lands between €3,000–€5,000. Once a project moves into custom web application territory — dashboards, portals, non-standard functionality — pricing moves into project-specific quotes rather than a fixed package.</p>
      <h2>What actually changes the number</h2>
      <table>
        <thead><tr><th>Factor</th><th>Effect on price</th></tr></thead>
        <tbody>
          <tr><td>Number of unique page templates</td><td>More templates, more design and build time</td></tr>
          <tr><td>Custom animations and interactions</td><td>Increases engineering time</td></tr>
          <tr><td>Content you provide vs. content that needs writing</td><td>Copywriting adds meaningful time</td></tr>
          <tr><td>Integrations (booking, CRM, payments)</td><td>Shifts the project from website to application</td></tr>
        </tbody>
      </table>
      <h2>How to get an accurate number</h2>
      <p>The only reliable way to get an accurate quote is to describe your actual goals, pages and functionality rather than asking for a price in the abstract. A short discovery conversation is usually enough to scope a project properly.</p>
    `,
    faqs: [
      {
        question: "Is a cheap website ever a good option?",
        answer:
          "For a very early-stage business that just needs a placeholder presence, a low-cost templated site can be a reasonable temporary step. It usually needs to be replaced once the business starts relying on the website for growth.",
      },
      {
        question: "Do you charge a fixed price or hourly?",
        answer:
          "Most projects are scoped as a fixed price based on a defined set of pages and features, agreed before development starts, so there are no surprises.",
      },
    ],
    relatedSlugs: ["custom-website-vs-template", "how-to-choose-a-web-development-company"],
  },
  {
    slug: "how-much-does-an-ecommerce-website-cost",
    title: "How Much Does an E-commerce Website Cost?",
    excerpt:
      "E-commerce pricing depends on catalog complexity, payment and shipping needs, and whether you need a custom admin system. Here's how to think about it.",
    category: "E-commerce",
    author: "INCODECRAFT",
    date: "2026-01-19",
    readingTime: "8 min read",
    contentHtml: `
      <p>E-commerce projects have a wider price range than standard websites because the underlying complexity varies so much — a 20-product store and a 2,000-product store with variants are fundamentally different engineering problems.</p>
      <h2>Platform-based vs. custom-built</h2>
      <p>A platform-based store — built on Shopify or WooCommerce — is usually the faster and more cost-effective route for businesses with a fairly standard catalog and checkout flow. A fully custom-built store makes sense once you need behaviour the platform genuinely can't support: unusual pricing logic, non-standard product configuration, or deep integration with internal systems.</p>
      <h2>What drives the cost</h2>
      <ul>
        <li><strong>Catalog size and structure</strong> — number of products, variants and categories</li>
        <li><strong>Payment setup</strong> — Stripe and local payment methods relevant to Romanian customers</li>
        <li><strong>Shipping logic</strong> — flat rates, carrier integrations, or more complex rules</li>
        <li><strong>Admin tooling</strong> — how much your team needs to manage without developer involvement</li>
        <li><strong>Design</strong> — a templated theme versus a fully custom storefront</li>
      </ul>
      <h2>Typical ranges</h2>
      <p>A platform-based store with custom theming commonly falls in the €2,000–€5,000 range depending on catalog complexity. A fully custom-built storefront with a bespoke admin panel typically starts around €5,000 and scales with functionality.</p>
      <h2>Costs beyond the build</h2>
      <p>Payment processing fees, hosting, and platform subscription costs (for Shopify) are ongoing costs separate from the development price, and it's worth budgeting for them from the start rather than being surprised later.</p>
    `,
    faqs: [
      {
        question: "Shopify or WooCommerce — which is cheaper?",
        answer:
          "WooCommerce has no platform subscription fee but requires hosting and more setup responsibility. Shopify has a monthly fee but includes hosting and more built-in reliability. Total cost of ownership depends on your specific needs.",
      },
    ],
    relatedSlugs: ["shopify-vs-woocommerce", "how-to-improve-ecommerce-conversion"],
  },
  {
    slug: "custom-website-vs-template",
    title: "Custom Website vs. Template: What's Actually Different?",
    excerpt:
      "Templates and custom builds solve different problems. Here's how to decide which one is right for your business right now.",
    category: "Web Development",
    author: "INCODECRAFT",
    date: "2026-01-26",
    readingTime: "6 min read",
    contentHtml: `
      <p>The choice between a template and a custom-built website isn't about quality in the abstract — good templates exist, and bad custom builds exist too. It's about fit between the tool and the business's stage and goals.</p>
      <h2>When a template makes sense</h2>
      <p>A template is a reasonable choice when your website's job is simple: present basic information, look professional, and get online quickly with a limited budget. Many early-stage businesses are well served by a well-chosen template.</p>
      <h2>When a custom build makes sense</h2>
      <p>A custom build earns its cost once your website needs to do something a template can't do well: reflect a specific brand identity precisely, support unusual content structures, integrate custom functionality, or be built around a serious SEO strategy from the ground up.</p>
      <h2>The real trade-offs</h2>
      <ul>
        <li><strong>Speed to launch</strong> — templates are faster to get live</li>
        <li><strong>Uniqueness</strong> — a custom design can't be mistaken for a competitor's site built on the same theme</li>
        <li><strong>Performance ceiling</strong> — custom code has fewer unused dependencies weighing pages down</li>
        <li><strong>Flexibility over time</strong> — custom architecture bends to new requirements more easily than a theme built for general use</li>
      </ul>
      <h2>A practical way to decide</h2>
      <p>If your website is central to how customers evaluate and choose your business — which is true for most service businesses, e-commerce stores and SaaS products — a custom build is usually the better long-term investment. If the website is a secondary channel, a template can be perfectly reasonable.</p>
    `,
    relatedSlugs: ["how-much-does-a-website-cost-in-romania", "how-to-choose-a-web-development-company"],
  },
  {
    slug: "shopify-vs-woocommerce",
    title: "Shopify vs. WooCommerce: Choosing the Right Platform",
    excerpt:
      "Both platforms can power a serious online store. The right choice depends on your technical resources, catalog and growth plans.",
    category: "E-commerce",
    author: "INCODECRAFT",
    date: "2026-02-02",
    readingTime: "7 min read",
    contentHtml: `
      <p>Shopify and WooCommerce are both capable of running a serious e-commerce business, and the decision between them usually comes down to how much control you want versus how much you want handled for you.</p>
      <h2>Shopify</h2>
      <p>Shopify is a fully hosted platform: hosting, security and infrastructure are handled for you, and it comes with a large ecosystem of apps. The trade-off is a monthly subscription fee, transaction fees on some plans, and less flexibility for genuinely unusual requirements.</p>
      <h2>WooCommerce</h2>
      <p>WooCommerce is a WordPress plugin, which means you own the hosting and have far more flexibility to customise behaviour. The trade-off is more setup responsibility and a greater need for ongoing maintenance.</p>
      <h2>A side-by-side comparison</h2>
      <table>
        <thead><tr><th></th><th>Shopify</th><th>WooCommerce</th></tr></thead>
        <tbody>
          <tr><td>Hosting</td><td>Included</td><td>Self-managed</td></tr>
          <tr><td>Monthly cost</td><td>Subscription fee</td><td>Hosting cost only</td></tr>
          <tr><td>Flexibility</td><td>Good, within app ecosystem</td><td>Very high</td></tr>
          <tr><td>Maintenance</td><td>Handled by Shopify</td><td>Your responsibility</td></tr>
          <tr><td>Best for</td><td>Teams that want less technical overhead</td><td>Teams that want full control</td></tr>
        </tbody>
      </table>
      <h2>Our take</h2>
      <p>For most small and mid-sized businesses that want to move fast with less ongoing technical responsibility, Shopify is the more predictable choice. For businesses with unusual catalog logic, or that want full ownership of their stack, WooCommerce is worth the extra setup.</p>
    `,
    relatedSlugs: ["how-much-does-an-ecommerce-website-cost", "how-to-improve-ecommerce-conversion"],
  },
  {
    slug: "how-to-improve-website-speed",
    title: "How to Improve Website Speed: A Practical Checklist",
    excerpt:
      "Site speed affects both user experience and search rankings. Here's a practical, non-technical checklist to work through.",
    category: "Performance",
    author: "INCODECRAFT",
    date: "2026-02-09",
    readingTime: "6 min read",
    contentHtml: `
      <p>Website speed is one of the few technical factors that directly affects both user experience and search visibility, which makes it worth taking seriously even if you're not technical yourself.</p>
      <h2>Where speed problems usually come from</h2>
      <ul>
        <li><strong>Unoptimised images</strong> — the single most common cause of slow websites</li>
        <li><strong>Too many third-party scripts</strong> — trackers, chat widgets and embeds that each add load time</li>
        <li><strong>Unnecessary animation libraries</strong> — heavy JavaScript for effects that add little value</li>
        <li><strong>Poor hosting or server response time</strong> — the foundation everything else sits on</li>
      </ul>
      <h2>A practical checklist</h2>
      <ol>
        <li>Compress and correctly size every image before upload</li>
        <li>Use modern image formats (WebP or AVIF) where supported</li>
        <li>Audit third-party scripts and remove anything not actively used</li>
        <li>Load non-critical scripts after the main content, not before it</li>
        <li>Choose fonts carefully and avoid loading unused font weights</li>
        <li>Test on a real mobile connection, not just a fast office Wi-Fi</li>
      </ol>
      <h2>Why it matters for search rankings</h2>
      <p>Search engines use page experience signals, including loading speed, as part of ranking. A faster site doesn't guarantee a higher ranking on its own, but a slow site can hold an otherwise strong page back.</p>
    `,
    faqs: [
      {
        question: "What's a good target load time?",
        answer:
          "As a general guideline, aim for your main content to be visible in under 2.5 seconds on a typical mobile connection, which aligns with commonly used Core Web Vitals thresholds.",
      },
    ],
    relatedSlugs: ["custom-website-vs-template"],
  },
  {
    slug: "what-is-a-web-application",
    title: "What Is a Web Application? And How Is It Different From a Website?",
    excerpt:
      "The line between 'website' and 'web application' is blurry in conversation but matters a lot for planning and budget. Here's a clear way to think about it.",
    category: "Web Applications",
    author: "INCODECRAFT",
    date: "2026-02-16",
    readingTime: "6 min read",
    contentHtml: `
      <p>In everyday conversation, "website" and "web application" often get used interchangeably, but the distinction matters once you're planning a project and a budget.</p>
      <h2>A useful working definition</h2>
      <p>A website is primarily about presenting information: pages, content, and calls to action. A web application is primarily about letting users do something — manage data, complete a workflow, interact with a system that changes based on their actions.</p>
      <h2>Examples on each side</h2>
      <ul>
        <li><strong>Website:</strong> a company's marketing site, a landing page, a blog</li>
        <li><strong>Web application:</strong> a customer dashboard, a booking system, a CRM, an internal operations tool</li>
      </ul>
      <p>Many real projects sit somewhere in between — a marketing website with a login-protected client portal, for example, has elements of both.</p>
      <h2>Why the distinction matters for planning</h2>
      <p>Web applications typically require more upfront thinking about data structure, user roles and permissions, and how the system behaves over time as data accumulates. That planning work shows up in both timeline and budget, and it's worth naming clearly from the start rather than discovering it mid-project.</p>
      <h2>How to describe your project accurately</h2>
      <p>A simple test: if your project's value comes mainly from what users can do inside it rather than what they read on it, you're describing a web application, and it should be scoped and estimated as one.</p>
    `,
    relatedSlugs: ["how-much-does-a-custom-web-application-cost"],
  },
  {
    slug: "how-much-does-a-custom-web-application-cost",
    title: "How Much Does a Custom Web Application Cost?",
    excerpt:
      "Custom software pricing depends on data complexity, user roles and integrations far more than visual design. Here's how to think about it.",
    category: "Web Applications",
    author: "INCODECRAFT",
    date: "2026-02-23",
    readingTime: "7 min read",
    contentHtml: `
      <p>Custom web application pricing is harder to generalise than website pricing, because the cost is driven mostly by underlying complexity rather than visual polish.</p>
      <h2>What drives the cost</h2>
      <ul>
        <li><strong>Data model complexity</strong> — how many entities, relationships and edge cases the system needs to handle</li>
        <li><strong>User roles and permissions</strong> — a single-user tool is far simpler than a multi-role system</li>
        <li><strong>Integrations</strong> — connecting to payment providers, external APIs or existing business systems</li>
        <li><strong>Reporting needs</strong> — from a simple list view to detailed analytics</li>
      </ul>
      <h2>Rough starting points</h2>
      <p>A focused internal tool solving one clear problem — a booking calendar, a lightweight CRM for a small team — typically starts around €3,000–€6,000. A more complete multi-role platform with several core workflows and integrations usually starts from €6,000–€12,000, scaling from there based on scope.</p>
      <h2>Why fixed-price "web app packages" rarely work</h2>
      <p>Unlike a website, where a page count gives a reasonable proxy for scope, a web application's cost depends on business logic that's invisible in a page count. This is why serious web application quotes almost always follow a discovery conversation rather than a flat price list.</p>
      <h2>How to keep costs under control</h2>
      <p>The most effective way to control cost is to define a clear first version — the smallest set of features that actually solves the core problem — and treat everything else as a planned second phase rather than trying to build the complete vision on day one.</p>
    `,
    relatedSlugs: ["what-is-a-web-application", "how-to-choose-a-web-development-company"],
  },
  {
    slug: "how-to-choose-a-web-development-company",
    title: "How to Choose a Web Developer or Development Studio",
    excerpt:
      "Choosing who builds your website or application is a bigger decision than most businesses treat it as. Here's what actually matters.",
    category: "Business",
    author: "INCODECRAFT",
    date: "2026-03-02",
    readingTime: "7 min read",
    contentHtml: `
      <p>Choosing who builds your website or web application matters more than most businesses treat it as, because the decision affects not just launch quality but how easy the product is to change later.</p>
      <h2>Questions worth asking</h2>
      <ul>
        <li>Can they show real, working projects — not just static mockups?</li>
        <li>Do they explain their process clearly, or is scope vague from the start?</li>
        <li>Will you own the final codebase, or is it locked into a proprietary system?</li>
        <li>Who will you actually communicate with during the project?</li>
        <li>How do they handle changes and revisions after launch?</li>
      </ul>
      <h2>Agency vs. independent developer</h2>
      <p>Larger agencies offer more resourcing for very large projects, but often add layers of account management between you and the person actually building your product. An independent, developer-led studio trades that scale for direct collaboration — you work with the person responsible for the code, with fewer handoffs and less translation loss.</p>
      <h2>Red flags worth watching for</h2>
      <ul>
        <li>No clear process or timeline before you've paid anything</li>
        <li>Portfolios that only show design mockups, not live products</li>
        <li>Vague answers about who owns the final code and hosting</li>
        <li>Pressure to decide immediately without a proper discovery conversation</li>
      </ul>
      <h2>What good collaboration looks like</h2>
      <p>A strong working relationship starts with a real discovery conversation about your goals, a clear process with defined stages, and transparency about what's included and what isn't — regardless of whether you're working with an agency or an independent studio.</p>
    `,
    relatedSlugs: ["custom-website-vs-template", "how-much-does-a-custom-web-application-cost"],
  },
  {
    slug: "how-ai-can-automate-a-small-business",
    title: "How AI Can Automate Parts of a Small Business",
    excerpt:
      "AI is genuinely useful for specific, well-defined tasks. Here's a grounded look at where it actually helps a small business today.",
    category: "AI",
    author: "INCODECRAFT",
    date: "2026-03-09",
    readingTime: "6 min read",
    contentHtml: `
      <p>AI is often discussed in sweeping terms, which makes it hard to know what it actually means for a specific small business. The most useful way to think about it is task by task, not as a single transformation.</p>
      <h2>Where AI genuinely helps today</h2>
      <ul>
        <li><strong>Repetitive content processing</strong> — image transformation, document parsing, categorisation</li>
        <li><strong>First-line customer support</strong> — answering common questions before human handoff</li>
        <li><strong>Internal search and summarisation</strong> — making existing business knowledge easier to find</li>
        <li><strong>Workflow automation</strong> — connecting AI models to existing business systems for specific, repeatable tasks</li>
      </ul>
      <h2>Where it's less reliable</h2>
      <p>AI is weakest in situations with high ambiguity, high stakes, and little room for error — final decision-making without human review, for example. Successful implementations tend to keep a human in the loop for exactly these cases.</p>
      <h2>A practical starting point</h2>
      <p>The most successful small-business AI projects start narrow: pick one specific, repetitive task, automate it well, and expand from there — rather than trying to build a general-purpose AI system on day one.</p>
      <h2>What an implementation actually involves</h2>
      <p>In practice, this usually means connecting an AI model to your existing data and workflow through a proper application layer — not just a chat window, but a system with checks, fallbacks and a clear boundary around what the AI is trusted to do on its own.</p>
    `,
    relatedSlugs: ["what-is-a-web-application"],
  },
];

blogPosts.push({
  slug: "how-to-improve-ecommerce-conversion",
  title: "How to Improve E-commerce Conversion Rate: A Practical Guide",
  excerpt:
    "Conversion improvements usually come from removing friction, not adding flashy features. Here's where to focus first.",
  category: "E-commerce",
  author: "INCODECRAFT",
  date: "2026-03-16",
  readingTime: "7 min read",
  contentHtml: `
    <p>Conversion rate optimisation is often treated as a growth-hacking topic full of clever tricks. In practice, the biggest gains usually come from removing basic friction that's quietly costing sales every day.</p>
    <h2>Start with checkout</h2>
    <p>Checkout is where most e-commerce revenue is lost. Common friction points include forcing account creation before purchase, hiding shipping costs until the final step, and requiring too many form fields.</p>
    <ul>
      <li>Offer guest checkout as the default path</li>
      <li>Show shipping costs and estimated delivery as early as possible</li>
      <li>Keep the checkout form to the fields you genuinely need</li>
      <li>Support the payment methods your actual customers prefer</li>
    </ul>
    <h2>Product pages that answer real questions</h2>
    <p>A strong product page answers the questions a buyer actually has: what does this look like in use, what are the exact dimensions or specifications, and what happens if it doesn't work out. Clear photography, honest descriptions and visible return policy details all reduce hesitation at the point of decision.</p>
    <h2>Site speed and mobile experience</h2>
    <p>Slow pages and clunky mobile layouts quietly suppress conversion even when nobody complains about them directly — visitors simply leave. See our companion article on website speed for a practical checklist.</p>
    <h2>Trust signals that actually matter</h2>
    <table>
      <thead><tr><th>Signal</th><th>Why it matters</th></tr></thead>
      <tbody>
        <tr><td>Clear return policy</td><td>Reduces perceived risk of a wrong decision</td></tr>
        <tr><td>Visible contact information</td><td>Signals a real, reachable business</td></tr>
        <tr><td>Secure checkout indicators</td><td>Reassures at the exact moment of payment</td></tr>
      </tbody>
    </table>
    <h2>Measure before you optimise</h2>
    <p>Before changing anything, it's worth knowing where visitors actually drop off — product page, cart, or checkout — since the right fix depends entirely on where the friction sits.</p>
  `,
  faqs: [
    {
      question: "What's a 'good' e-commerce conversion rate?",
      answer:
        "It varies widely by industry and price point, so comparing against a generic average is less useful than tracking your own rate over time and after each specific change you make.",
    },
  ],
  relatedSlugs: ["how-much-does-an-ecommerce-website-cost", "how-to-improve-website-speed"],
});

blogPosts.push(...extraBlogPosts);
blogPosts.push(...blogPosts2024);

export function getPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

export const blogCategories = Array.from(new Set(blogPosts.map((p) => p.category)));
