import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy | CampRinse",
  description: "CampRinse privacy policy and data handling summary.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header compact />
      <main className="section-shell py-16 sm:py-24">
        <article className="max-w-3xl rounded-3xl border border-green-900/10 bg-cream p-6 shadow-sm sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-green">
            CampRinse policy
          </p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-charcoal-green">
            Privacy Policy
          </h1>
          <div className="mt-8 space-y-5 text-base leading-8 text-green-950/75">
            <p>
              CampRinse only needs lightweight site analytics and external
              checkout links at MVP stage. Checkout, payment and order data
              should be collected by the configured checkout provider, not by
              this static site.
            </p>
            <p>
              Analytics scripts are only loaded when their public environment
              variables are configured. The final privacy notice should name the
              active providers and explain cookie or tracking choices.
            </p>
            <p>
              Do not commit secret keys, customer exports or `.env` files to the
              repository.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
