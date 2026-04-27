import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms | CampRinse",
  description: "CampRinse website and purchase terms summary.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <Header compact />
      <main className="section-shell py-16 sm:py-24">
        <article className="max-w-3xl rounded-3xl border border-green-900/10 bg-cream p-6 shadow-sm sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-green">
            CampRinse policy
          </p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-charcoal-green">
            Terms
          </h1>
          <div className="mt-8 space-y-5 text-base leading-8 text-green-950/75">
            <p>
              This MVP site presents CampRinse product information and sends
              customers to an external checkout provider. Final purchase terms,
              payment terms and fulfilment terms should be aligned with that
              checkout provider before launch.
            </p>
            <p>
              Product information must remain accurate to supplier
              documentation. Avoid adding performance, heating, battery,
              pressure, waterproof or certification claims unless verified.
            </p>
            <p>
              The primary domain is camprinse.com and the UK domain is
              camprinse.co.uk.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
