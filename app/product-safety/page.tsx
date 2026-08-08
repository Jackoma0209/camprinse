import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Product Safety | CampRinse",
  description: "Practical safety guidance for using the CampRinse portable dog rinse kit.",
  path: "/product-safety",
});

export default function ProductSafetyPage() {
  return (
    <>
      <Header compact />
      <main className="section-shell py-16 sm:py-24">
        <article className="max-w-3xl rounded-3xl border border-green-900/10 bg-cream p-6 shadow-sm sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-green">
            CampRinse guidance
          </p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-charcoal-green">
            Product Safety
          </h1>
          <div className="mt-8 space-y-5 text-base leading-8 text-green-950/75">
            <p>
              CampRinse is a portable rechargeable rinse system intended for
              outdoor clean-up, including rinsing muddy dog paws. Read and follow
              the instructions supplied with your product before first use.
            </p>
            <p>
              Use clean water at a safe temperature for the animal or item being
              rinsed. CampRinse does not heat the water and should not be treated
              as a pressure washer or drinking-water product.
            </p>
            <p>
              Keep charging accessories, plugs and charging connections dry while
              charging. Do not continue to use a damaged cable, connector, pump or
              housing.
            </p>
            <p>
              Supervise use around children and animals and store the kit securely
              when not in use. If you have a safety or product question, contact{" "}
              <a className="font-bold text-charcoal-green" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              .
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
