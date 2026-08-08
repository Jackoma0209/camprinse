import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { commerce } from "@/lib/commerce";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Shipping Policy | CampRinse",
  description: "CampRinse UK delivery information and dispatch policy.",
  path: "/shipping-policy",
});

export default function ShippingPolicyPage() {
  return (
    <>
      <Header compact />
      <main className="section-shell py-16 sm:py-24">
        <article className="max-w-3xl rounded-3xl border border-green-900/10 bg-cream p-6 shadow-sm sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-green">
            CampRinse delivery
          </p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-charcoal-green">
            Shipping Policy
          </h1>
          <div className="mt-8 space-y-5 text-base leading-8 text-green-950/75">
            <p>
              <strong className="text-charcoal-green">Current promise:</strong>{" "}
              {commerce.deliveryPromise}. The available delivery service,
              estimated arrival window and any delivery charge are shown before
              you complete payment.
            </p>
            <p>
              We currently sell to supported UK delivery addresses. Once your
              order is accepted, you will receive an order confirmation at the
              email address provided during checkout.
            </p>
            <p>
              Where tracking is available, dispatch or tracking information will
              be sent after the order leaves fulfilment. Delivery estimates can
              be affected by weekends, bank holidays, severe weather and courier
              disruption.
            </p>
            <p>
              If no different delivery period has been agreed with you, UK
              distance-selling rules require goods to be delivered without undue
              delay and normally no later than 30 days after the contract is
              made.
            </p>
            <p>
              If an order has not arrived within the delivery window shown at
              checkout, contact{" "}
              <a className="font-bold text-charcoal-green" href={`mailto:${site.email}`}>
                {site.email}
              </a>{" "}
              with your order details so we can investigate.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
