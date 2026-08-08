import Link from "next/link";
import { legalPages, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-green-950/10 bg-charcoal-green pb-20 text-cream md:pb-0">
      <div className="section-shell grid gap-8 py-10 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <Link href="/" className="focus-ring inline-flex rounded-full text-2xl font-black">
            {site.name}
          </Link>
          <p className="mt-4 max-w-md leading-7 text-cream/72">
            The portable dog rinse system that keeps mud outside — stop dirty
            paws wrecking your car, van and home. Also useful for boots, beach
            and outdoor gear.
          </p>
          <p className="mt-4 text-sm text-cream/60">
            Primary domain: {site.url.replace("https://", "")} | UK domain:{" "}
            {site.ukUrl.replace("https://", "")}
          </p>
        </div>
        <nav className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
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
