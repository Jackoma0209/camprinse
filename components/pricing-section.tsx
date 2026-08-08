import { CheckoutButton } from "@/components/checkout-button";
import { commerce } from "@/lib/commerce";
import { pricingBundles } from "@/lib/pricing";
import { product } from "@/lib/product";

export function PricingSection() {
  const bundle = pricingBundles[0];

  return (
    <section id="pricing" className="py-16 sm:py-20">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-accent-green">
            Get CampRinse
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-charcoal-green sm:text-5xl">
            One kit. One clear price.
          </h2>
          <p className="mt-4 text-lg leading-8 text-green-950/70">
            Everything you need for the CampRinse rinse setup — presented as a
            single launch offer for UK dog owners.
          </p>
        </div>

        <article className="mx-auto mt-10 max-w-3xl rounded-[2rem] border border-charcoal-green bg-charcoal-green p-6 text-cream shadow-xl shadow-green-950/15 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-start">
            <div>
              <span className="rounded-full bg-sand px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-charcoal-green">
                {bundle.badge}
              </span>
              <h3 className="mt-5 text-3xl font-black">{bundle.name}</h3>
              <p className="mt-3 max-w-xl leading-7 text-cream/78">
                {bundle.description}
              </p>
              <ul className="mt-6 grid gap-3 text-sm font-semibold leading-6 text-cream/85 sm:grid-cols-2">
                {bundle.includes.map((item) => (
                  <li key={item} className="rounded-2xl bg-white/10 px-4 py-3">
                    ✓ {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl bg-cream p-5 text-charcoal-green lg:min-w-64">
              <p className="text-sm font-bold text-green-950/60">One-off purchase</p>
              <p className="mt-2 text-5xl font-black tracking-tight">
                {product.price}
              </p>
              <CheckoutButton
                bundleId={bundle.id}
                label={commerce.primaryCtaLabel}
                className="mt-5 w-full"
              />
              <div className="mt-5 space-y-2 text-sm font-semibold leading-6 text-green-950/65">
                <p>{commerce.checkoutPromise}</p>
                <p>{commerce.deliveryPromise}</p>
                <p>{commerce.returnsPromise}</p>
                <p>{commerce.supportPromise}</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
