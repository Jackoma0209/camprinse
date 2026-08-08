import { CheckoutButton } from "@/components/checkout-button";

export function FinalCTA() {
  return (
    <section className="py-16 pb-28 sm:py-24 md:pb-24">
      <div className="section-shell rounded-[2.25rem] border border-green-950/10 bg-cream p-8 text-center shadow-2xl shadow-green-950/10 sm:p-12">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-water-blue">
          Mud Stays Outside
        </p>
        <h2 className="mx-auto mt-3 max-w-3xl text-4xl font-black tracking-tight text-charcoal-green sm:text-6xl">
          Stop muddy dogs wrecking your car and home.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-green-950/70">
          Keep CampRinse in the boot. Rinse paws after every walk. Enjoy the
          walk — without the clean-up dread. Also handy for boots, beach sand
          and outdoor kit when you need it.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4">
          <CheckoutButton
            bundleId="adventure"
            label="Shop the Dog Rinse Kit"
          />
          <p className="text-sm font-semibold text-green-950/60">
            UK dog owners · clear returns · real reviews only after launch
          </p>
        </div>
      </div>
    </section>
  );
}
