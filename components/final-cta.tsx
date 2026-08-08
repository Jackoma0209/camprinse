import { CheckoutButton } from "@/components/checkout-button";
import { commerce } from "@/lib/commerce";

export function FinalCTA() {
  return (
    <section className="py-16 pb-28 sm:py-24 md:pb-24">
      <div className="section-shell rounded-[2.25rem] border border-green-950/10 bg-cream p-8 text-center shadow-2xl shadow-green-950/10 sm:p-12">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-water-blue">
          Mud Stays Outside
        </p>
        <h2 className="mx-auto mt-3 max-w-3xl text-4xl font-black tracking-tight text-charcoal-green sm:text-5xl lg:text-6xl">
          Finish the walk without bringing it home.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-green-950/70">
          Keep CampRinse in the boot, rinse muddy paws before your dog jumps in,
          then drive home without the usual trail of mud through the car and house.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4">
          <CheckoutButton bundleId="adventure" />
          <p className="text-sm font-semibold text-green-950/60">
            {commerce.checkoutPromise} · {commerce.deliveryPromise} · {commerce.returnsPromise}
          </p>
        </div>
      </div>
    </section>
  );
}
