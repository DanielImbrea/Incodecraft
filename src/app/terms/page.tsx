import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/metadata";
import { site } from "@/data/site";

export const metadata = buildMetadata({
  title: "Terms & Conditions",
  description: `Terms and conditions for using the ${site.name} website and engaging ${site.name} for project work.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Terms & Conditions", href: "/terms" }]} />
      <article className="section pt-10">
        <div className="container-xl max-w-prose">
          <p className="eyebrow mb-4">Legal</p>
          <h1 className="mb-6 text-display-md text-ink-50">Terms & Conditions</h1>
          <p className="mb-8 font-mono text-xs text-ink-500">Last updated: [Add date before launch]</p>

          <div className="space-y-8 leading-relaxed text-ink-300">
            <p>
              <strong className="text-ink-100">This is a placeholder terms document.</strong> It provides
              a general structure and must be reviewed and customized — ideally with legal guidance — to
              reflect your actual business terms before the site goes live.
            </p>

            <section>
              <h2 className="mb-3 font-display text-xl text-ink-50">1. Use of this website</h2>
              <p>
                This website is provided for informational purposes to represent the services of {site.name}.
                Content on this site should not be treated as a binding offer or quote; actual project scope
                and pricing are confirmed directly with each client.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-display text-xl text-ink-50">2. Project engagements</h2>
              <p>
                Any development project undertaken by {site.name} is governed by a separate written agreement
                specific to that project, covering scope, timeline, pricing and deliverables. These general
                terms do not replace that agreement.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-display text-xl text-ink-50">3. Intellectual property</h2>
              <p>
                Unless otherwise agreed in a project contract, ownership of custom-developed code and
                deliverables transfers to the client upon full payment. Pre-existing tools, libraries and
                internal frameworks used in delivery remain the property of {site.name}.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-display text-xl text-ink-50">4. Limitation of liability</h2>
              <p>
                [This section should be reviewed and finalized with appropriate legal guidance before launch,
                to reflect the liability terms appropriate for your jurisdiction and business structure.]
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-display text-xl text-ink-50">5. Contact</h2>
              <p>For any questions about these terms, contact {site.email}.</p>
            </section>
          </div>
        </div>
      </article>
    </>
  );
}
