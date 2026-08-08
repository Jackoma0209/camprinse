import Image from "next/image";
import { CheckoutButton } from "@/components/checkout-button";
import { getSiteImage } from "@/lib/assets";
import { commerce } from "@/lib/commerce";

export function HeroSection() {
  const heroImage = getSiteImage("hero");

  return (
    <section className="relative overflow-hidden py-12 sm:py-20 lg:py-24">
      <div className="section-shell grid min-w-0 items-center gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:gap-12">
        <div className="min-w-0">
          <p className="inline-flex rounded-full border border-green-950/10 bg-white/70 px-4 py-2 text-sm font-bold text-accent-green shadow-sm">
            The rinse kit made for muddy dog walks
          </p>
          <h1 className="mt-5 max-w-full text-[clamp(2.45rem,10.5vw,3.25rem)] font-black leading-[0.96] tracking-normal text-charcoal-green sm:mt-6 sm:max-w-3xl sm:text-5xl lg:text-7xl">
            Mud Stays Outside.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-green-950/72 sm:mt-6 sm:text-xl">
            Rinse muddy paws at the car before they reach the boot, seats,
            hallway or sofa. CampRinse is rechargeable, portable and works from
            a separate clean-water container — no outdoor tap needed.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CheckoutButton
              bundleId="adventure"
              label="Get CampRinse — £44.99"
              className="sm:min-w-52"
            />
            <a
              href="#how-it-works"
              className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full border border-green-950/15 bg-white/70 px-6 text-sm font-black text-charcoal-green transition hover:-translate-y-0.5 hover:bg-white"
            >
              See how it works
            </a>
          </div>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-green-950/65">
            <span>{commerce.checkoutPromise}</span>
            <span>{commerce.deliveryPromise}</span>
            <span>{commerce.supportPromise}</span>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 text-sm font-semibold text-green-950/70 sm:grid-cols-4">
            <span className="rounded-2xl bg-white/65 p-4">Rinse at the car</span>
            <span className="rounded-2xl bg-white/65 p-4">Rechargeable pump</span>
            <span className="rounded-2xl bg-white/65 p-4">No tap needed</span>
            <span className="rounded-2xl bg-white/65 p-4">Compact boot kit</span>
          </div>
        </div>

        <div className="relative min-w-0">
          <div className="rounded-[2rem] border border-green-950/10 bg-white/80 p-4 shadow-2xl shadow-green-950/12 sm:p-5">
            {heroImage.available ? (
              <div className="relative min-h-[340px] overflow-hidden rounded-[1.5rem] sm:min-h-[440px]">
                <Image
                  src={heroImage.src}
                  alt={heroImage.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal-green/80 to-transparent p-5">
                  <span className="rounded-full bg-cream px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-charcoal-green">
                    Rinse before the ride home
                  </span>
                  <p className="mt-3 text-sm font-semibold leading-6 text-cream">
                    Clean paws at the boot. Mud left at the trail.
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex min-h-[340px] flex-col justify-between overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-water-blue/20 via-cream to-sand/45 p-6 sm:min-h-[440px] sm:p-8">
                <div>
                  <span className="rounded-full bg-charcoal-green px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-cream">
                    The boot-side routine
                  </span>
                  <h2 className="mt-6 max-w-sm text-3xl font-black tracking-tight text-charcoal-green sm:text-4xl">
                    Walk. Rinse. Drive home clean.
                  </h2>
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  {["Add clean water", "Drop in the pump", "Rinse muddy paws"].map(
                    (step, index) => (
                      <div key={step} className="rounded-2xl bg-white/80 p-4 shadow-sm">
                        <span className="text-xs font-black text-accent-green">0{index + 1}</span>
                        <p className="mt-2 text-sm font-bold leading-6 text-charcoal-green">{step}</p>
                      </div>
                    ),
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
