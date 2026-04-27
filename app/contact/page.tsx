import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Contact | CampRinse",
  description: "Contact CampRinse about orders, fulfilment and product questions.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Header compact />
      <main className="section-shell py-16 sm:py-24">
        <article className="max-w-3xl rounded-3xl border border-green-900/10 bg-cream p-6 shadow-sm sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-green">
            CampRinse support
          </p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-charcoal-green">
            Contact
          </h1>
          <div className="mt-8 space-y-5 text-base leading-8 text-green-950/75">
            <p>
              For launch enquiries, order support or supplier documentation,
              contact{" "}
              <a className="font-bold text-charcoal-green" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              .
            </p>
            <p>
              Before the checkout links go live, confirm supplier fulfilment,
              delivery estimates, returns handling and safety documentation.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
