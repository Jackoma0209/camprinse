import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Terms | CampRinse",
  description: "CampRinse website and purchase terms.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <Header compact />
      <main className="section-shell py-16 sm:py-24">
        <article className="max-w-3xl rounded-3xl border border-green-900/10 bg-cream p-6 shadow-sm sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-green">
            CampRinse terms
          </p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-charcoal-green">
            Terms of Sale
          </h1>
          <div className="mt-8 space-y-5 text-base leading-8 text-green-950/75">
            <p>
              These terms apply when you buy a CampRinse product through
              camprinse.com. Payment is processed through the checkout provider
              shown when you place your order.
            </p>
            <p>
              Product descriptions, prices and delivery information are shown in
              pounds sterling and should be read together with our Shipping,
              Returns and Product Safety pages. If we discover a material error
              in an order or cannot fulfil it, we will contact you and provide an
              appropriate refund where payment has already been taken.
            </p>
            <p>
              CampRinse products must be used in accordance with the instructions
              supplied with the item. We do not make unverified claims about
              heating, waterproofing, pressure, battery duration or certification.
            </p>
            <p>
              Nothing in these terms limits the rights you have under UK consumer
              law for goods that are faulty, misdescribed or otherwise do not meet
              the required standard.
            </p>
            <p>
              Questions about an order can be sent to{" "}
              <a className="font-bold text-charcoal-green" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              .
            </p>
            {site.businessAddress ? (
              <p>
                <strong className="text-charcoal-green">Business address:</strong>{" "}
                {site.businessAddress}
              </p>
            ) : null}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
