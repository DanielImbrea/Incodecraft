import Link from "next/link";
import { Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-surface-border bg-surface/40">
      <div className="container-xl py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 font-display text-lg font-semibold text-ink-50">
              <span className="flex h-7 w-7 items-center justify-center rounded-xs border border-signal/40 bg-signal/10 font-mono text-xs text-signal">
                {"</>"}
              </span>
              INCODECRAFT
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-400">
              Independent, developer-led digital studio. Design and development under one roof, from idea to launch.
            </p>
            <p className="mt-6 font-mono text-xs text-ink-500">
              {site.location.city}, {site.location.country} — {site.location.serves}
            </p>
          </div>

          <FooterColumn title="Services" links={site.footerLinks.services} />
          <FooterColumn title="Studio" links={site.footerLinks.studio} />

          <div>
            <p className="eyebrow mb-4">Contact</p>
            <a href={`mailto:${site.email}`} className="text-sm text-ink-200 hover:text-signal">
              {site.email}
            </a>
            <div className="mt-6 flex gap-4">
              <a href={site.social.github} aria-label="GitHub" className="text-ink-400 hover:text-ink-50">
                <Github size={18} />
              </a>
              <a href={site.social.linkedin} aria-label="LinkedIn" className="text-ink-400 hover:text-ink-50">
                <Linkedin size={18} />
              </a>
              <a href={site.social.x} aria-label="X" className="text-ink-400 hover:text-ink-50">
                <Twitter size={18} />
              </a>
            </div>
            <Link href="/contact" className="btn-secondary mt-6 w-fit">
              Start a project <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-surface-border pt-8 text-xs text-ink-500 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} INCODECRAFT. All rights reserved.</p>
          <div className="flex gap-6">
            {site.footerLinks.legal.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-ink-200">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <p className="eyebrow mb-4">{title}</p>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-sm text-ink-300 hover:text-ink-50">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
