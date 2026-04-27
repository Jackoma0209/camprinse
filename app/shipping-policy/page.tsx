import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Shipping Policy | CampRinse",
  description: "CampRinse shipping policy for the portable rinse kit.",
  path: "/shipping-policy",
});

export default function ShippingPolicyPage() {
  return (
    <>
      <Header compact />
      <main className="section-shell py-16 sm:py-24">
        <article className="max-w-3xl rounded-3xl border border-green-900/10 bg-cream p-6 shadow-sm sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-green">
            CampRinse policy
          </p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-charcoal-green">
            Shipping Policy
          </h1>
          <div className="mt-8 space-y-5 text-base leading-8 text-green-950/75">
            <p>
              CampRinse is built for a Vercel-first launch with fulfilment
              through our supplier workflow. Shipping estimates, courier
              services and final delivery windows should be confirmed before
              launch and shown clearly at checkout.
            </p>
            <p>
              Orders should only be accepted where the checkout page can show
              the current delivery cost, destination eligibility and estimated
              fulfilment window.
            </p>
            <p>
              Customers should receive an order confirmation after checkout and
              a dispatch update once tracking is available.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
