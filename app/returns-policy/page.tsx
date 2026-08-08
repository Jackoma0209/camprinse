import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Returns Policy | CampRinse",
  description: "CampRinse returns, cancellation and faulty-goods information.",
  path: "/returns-policy",
});

export default function ReturnsPolicyPage() {
  return (
    <>
      <Header compact />
      <main className="section-shell py-16 sm:py-24">
        <article className="max-w-3xl rounded-3xl border border-green-900/10 bg-cream p-6 shadow-sm sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-green">
            CampRinse returns
          </p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-charcoal-green">
            Returns Policy
          </h1>
          <div className="mt-8 space-y-5 text-base leading-8 text-green-950/75">
            <p>
              For most UK online purchases, you normally have 14 days after
              receiving the goods to tell us that you want to cancel the order.
              You then normally have a further 14 days to return the goods.
            </p>
            <p>
              To start a return, email{" "}
              <a className="font-bold text-charcoal-green" href={`mailto:${site.email}`}>
                {site.email}
              </a>{" "}
              with your order number and the email address used at checkout. We
              will send the return instructions and return address that apply to
              your order.
              {site.returnsAddress
                ? ` Returns for your order are directed to: ${site.returnsAddress}.`
                : " The return address may be a fulfilment warehouse rather than the business correspondence address."}
            </p>
            <p>
              For a change-of-mind return, you are responsible for the cost of
              sending the item back unless we tell you otherwise. Please package
              the product securely and keep proof of postage. We may make a
              lawful deduction if handling has reduced the value of the goods
              beyond what is reasonably necessary to inspect them.
            </p>
            <p>
              If an item arrives faulty, damaged, incorrect or materially not as
              described, contact us promptly with your order details and, where
              useful, photographs. Your statutory rights are separate from the
              change-of-mind cancellation right and are not affected by this
              policy.
            </p>
            <p>
              Eligible refunds are returned to the original payment method. For
              cancelled online orders, the standard outbound delivery charge is
              refunded where required by law; any premium delivery upgrade above
              the standard service may not be refundable in full.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
