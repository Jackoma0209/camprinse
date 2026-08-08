import { CheckoutButton } from "@/components/checkout-button";
import { pricingBundles } from "@/lib/pricing";

export function PricingSection() {
  return (
    <section id="pricing" className="py-16 sm:py-20">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-accent-green">
            Dog Rinse Kits
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-charcoal-green sm:text-5xl">
            Pick the kit that matches your walks.
          </h2>
          <p className="mt-4 text-lg leading-8 text-green-950/70">
            Built for UK dog owners. One primary goal: muddy paws stay outside
            the car, the van and the house. UK delivery · simple setup ·
            checkout ready when configured.
          </p>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {pricingBundles.map((bundle) => (
            <article
              key={bundle.id}
              className={`relative rounded-[2rem] border p-6 shadow-sm ${
                bundle.badge
                  ? "border-charcoal-green bg-charcoal-green text-cream shadow-xl shadow-green-950/15"
                  : "border-green-950/10 bg-white/80 text-charcoal-green"
              }`}
            >
              {bundle.badge ? (
                <span className="absolute right-5 top-5 rounded-full bg-sand px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-charcoal-green">
                  {bundle.badge}
                </span>
              ) : null}
              <h3 className="pr-28 text-2xl font-black">{bundle.name}</h3>
              <p
                className={`mt-3 leading-7 ${
                  bundle.badge ? "text-cream/78" : "text-green-950/70"
                }`}
              >
                {bundle.description}
              </p>
              <p className="mt-6 text-5xl font-black tracking-tight">
                {bundle.price}
              </p>
              <ul
                className={`mt-6 space-y-3 text-sm font-semibold leading-6 ${
                  bundle.badge ? "text-cream/82" : "text-green-950/72"
                }`}
              >
                {bundle.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <CheckoutButton
                bundleId={bundle.id}
                label={
                  bundle.id === "adventure"
                    ? "Shop the Dog Rinse Kit"
                    : "Shop this kit"
                }
                className={
                  bundle.badge
                    ? "mt-8 w-full bg-cream text-charcoal-green hover:bg-white"
                    : "mt-8 w-full"
                }
              />
            </article>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm font-semibold leading-6 text-green-950/60">
          Shop with confidence — UK-focused support, clear returns process, and
          no invented reviews. Real dog-owner feedback appears after verified
          customers buy.
        </p>
      </div>
    </section>
  );
}
