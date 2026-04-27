import { CheckoutButton } from "@/components/checkout-button";

export function FinalCTA() {
  return (
    <section className="py-16 pb-28 sm:py-24 md:pb-24">
      <div className="section-shell rounded-[2.25rem] border border-green-950/10 bg-cream p-8 text-center shadow-2xl shadow-green-950/10 sm:p-12">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-water-blue">
          CampRinse Portable Shower Kit
        </p>
        <h2 className="mx-auto mt-3 max-w-3xl text-4xl font-black tracking-tight text-charcoal-green sm:text-6xl">
          Ready for the clean-up before the drive home.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-green-950/70">
          A practical rinse kit for camping, beach days, muddy trails, dog walks
          and outdoor kit.
        </p>
        <div className="mt-8">
          <CheckoutButton bundleId="adventure" label="Shop CampRinse" />
        </div>
      </div>
    </section>
  );
}
