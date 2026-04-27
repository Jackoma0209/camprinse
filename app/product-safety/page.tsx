import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Product Safety | CampRinse",
  description: "Product safety notes for using the CampRinse portable rinse kit.",
  path: "/product-safety",
});

export default function ProductSafetyPage() {
  return (
    <>
      <Header compact />
      <main className="section-shell py-16 sm:py-24">
        <article className="max-w-3xl rounded-3xl border border-green-900/10 bg-cream p-6 shadow-sm sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-green">
            CampRinse policy
          </p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-charcoal-green">
            Product Safety
          </h1>
          <div className="mt-8 space-y-5 text-base leading-8 text-green-950/75">
            <p>
              CampRinse is positioned as a portable rechargeable rinse and
              shower kit for outdoor clean-up. It should be used with clean
              water and handled according to the supplier manual supplied with
              the final product.
            </p>
            <p>
              Do not use the kit as a drinking-water product, a pressure washer
              or a heated shower unless supplier documentation explicitly
              confirms that use.
            </p>
            <p>
              Keep charging accessories, connectors and electrical parts away
              from unsafe conditions. Confirm all UK compliance, labelling and
              manual requirements before accepting orders.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
