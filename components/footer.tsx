import Link from "next/link";
import { legalPages, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-green-950/10 bg-charcoal-green pb-20 text-cream md:pb-0">
      <div className="section-shell grid gap-8 py-10 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <Link
            href="/"
            className="focus-ring inline-flex rounded-full text-2xl font-black"
          >
            {site.name}
          </Link>
          <p className="mt-4 max-w-md leading-7 text-cream/72">
            The portable dog rinse kit that keeps mud outside. Rinse paws at the
            car before they reach your seats, hallway or sofa.
          </p>
          <p className="mt-4 text-sm text-cream/65">
            Support:{" "}
            <a className="font-bold text-cream hover:text-white" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
          {site.businessAddress ? (
            <p className="mt-2 text-sm text-cream/55">{site.businessAddress}</p>
          ) : null}
        </div>
        <nav className="grid gap-3 sm:grid-cols-2">
          {legalPages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="focus-ring rounded-full text-sm font-bold text-cream/78 hover:text-white"
            >
              {page.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
