import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center">
      <div className="container-xl text-center">
        <p className="eyebrow mb-4 justify-center">Error 404</p>
        <h1 className="text-display-lg text-ink-50">
          <span className="font-mono text-signal">404:</span> page not found
          <span className="cursor-blink" />
        </h1>
        <p className="mx-auto mt-6 max-w-md text-ink-300">
          The page you&apos;re looking for doesn&apos;t exist, or has moved somewhere else.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/" className="btn-primary">
            Back to home <ArrowUpRight size={16} />
          </Link>
          <Link href="/contact" className="btn-secondary">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
