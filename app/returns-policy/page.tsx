import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Returns Policy | CampRinse",
  description: "CampRinse returns policy for the portable rinse kit.",
  path: "/returns-policy",
});

export default function ReturnsPolicyPage() {
  return (
    <>
      <Header compact />
      <main className="section-shell py-16 sm:py-24">
        <article className="max-w-3xl rounded-3xl border border-green-900/10 bg-cream p-6 shadow-sm sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-green">
            CampRinse policy
          </p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-charcoal-green">
            Returns Policy
          </h1>
          <div className="mt-8 space-y-5 text-base leading-8 text-green-950/75">
            <p>
              CampRinse should provide customers with clear return instructions
              before launch, including the return address, time limits and the
              condition items must be returned in.
            </p>
            <p>
              Any defective, damaged or incorrect item reports should be handled
              promptly with supporting photos and order details so the supplier
              issue can be investigated.
            </p>
            <p>
              This page should be reviewed against current UK consumer law and
              the final checkout provider terms before going live.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
