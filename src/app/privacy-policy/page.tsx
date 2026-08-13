import { Breadcrumbs } from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/metadata";
import { site } from "@/data/site";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: `Privacy policy for ${site.name} — how contact and project inquiry data is collected and used.`,
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Privacy Policy", href: "/privacy-policy" }]} />
      <article className="section pt-10">
        <div className="container-xl max-w-prose">
          <p className="eyebrow mb-4">Legal</p>
          <h1 className="mb-6 text-display-md text-ink-50">Privacy Policy</h1>
          <p className="mb-8 font-mono text-xs text-ink-500">Last updated: [Add date before launch]</p>

          <div className="space-y-8 leading-relaxed text-ink-300">
            <p>
              <strong className="text-ink-100">This is a placeholder privacy policy.</strong> It outlines
              a standard structure for a small studio website and must be reviewed and customized —
              ideally with legal guidance appropriate to your jurisdiction and applicable regulations
              such as GDPR — before the site goes live.
            </p>

            <section>
              <h2 className="mb-3 font-display text-xl text-ink-50">1. Information we collect</h2>
              <p>
                When you submit the contact form on this website, we collect the information you provide,
                which may include your name, company, email address, phone number, and details about your
                project. We do not collect this information through any means other than what you actively submit.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-display text-xl text-ink-50">2. How we use your information</h2>
              <p>
                Information submitted through the contact form is used solely to respond to your inquiry and,
                if a project moves forward, to communicate about that project. We do not sell or share your
                information with third parties for marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-display text-xl text-ink-50">3. Analytics</h2>
              <p>
                This site may use privacy-respecting analytics tools (such as Google Analytics 4) to
                understand aggregate visitor behavior. [Specify which analytics tools are actually enabled
                and update this section accordingly before launch.]
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-display text-xl text-ink-50">4. Data retention</h2>
              <p>
                Contact form submissions are retained only as long as necessary to respond to your inquiry
                or, where a project proceeds, for the duration of the business relationship and any
                legally required retention period afterward.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-display text-xl text-ink-50">5. Your rights</h2>
              <p>
                You may request access to, correction of, or deletion of any personal information you have
                submitted by contacting {site.email}.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-display text-xl text-ink-50">6. Contact</h2>
              <p>
                For any questions about this privacy policy, contact {site.email}.
              </p>
            </section>
          </div>
        </div>
      </article>
    </>
  );
}
