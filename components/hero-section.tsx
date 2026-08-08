import Image from "next/image";
import { CheckoutButton } from "@/components/checkout-button";
import { getSiteImage } from "@/lib/assets";
import { commerce } from "@/lib/commerce";

export function HeroSection() {
  const heroImage = getSiteImage("hero");
  const heroMobile = getSiteImage("heroMobile");

  return (
    <section className="relative overflow-hidden py-12 sm:py-20 lg:py-24">
      <div className="section-shell grid min-w-0 items-center gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:gap-12">
        <div className="min-w-0">
          <p className="inline-flex rounded-full border border-green-950/10 bg-white/70 px-4 py-2 text-sm font-bold text-accent-green shadow-sm">
            Made for muddy dog walks
          </p>
          <h1 className="mt-5 max-w-full text-[clamp(2.45rem,10.5vw,3.25rem)] font-black leading-[0.96] tracking-normal text-charcoal-green sm:mt-6 sm:max-w-3xl sm:text-5xl lg:text-7xl">
            Mud Stays Outside.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-green-950/72 sm:mt-6 sm:text-xl">
            Rinse muddy paws at the car before they reach your boot, seats,
            hallway or sofa. Keep CampRinse in the boot — walk, rinse, drive
            home clean.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CheckoutButton
              bundleId="adventure"
              label={commerce.primaryCtaLabel}
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
        </div>

        <div className="relative min-w-0">
          <div className="rounded-[2rem] border border-green-950/10 bg-white/80 p-4 shadow-2xl shadow-green-950/12 sm:p-5">
            {heroImage.available ? (
              <div className="relative min-h-[340px] overflow-hidden rounded-[1.5rem] sm:min-h-[440px]">
                {heroMobile.available ? (
                  <>
                    <Image
                      src={heroMobile.src}
                      alt={heroMobile.alt}
                      fill
                      priority
                      sizes="100vw"
                      className="object-cover sm:hidden"
                    />
                    <Image
                      src={heroImage.src}
                      alt={heroImage.alt}
                      fill
                      priority
                      sizes="520px"
                      className="hidden object-cover sm:block"
                    />
                  </>
                ) : (
                  <Image
                    src={heroImage.src}
                    alt={heroImage.alt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 520px"
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal-green/85 to-transparent p-5">
                  <span className="rounded-full bg-cream px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-charcoal-green">
                    Walk · Rinse · Drive home clean
                  </span>
                  <p className="mt-3 text-sm font-semibold leading-6 text-cream">
                    Mud left at the trail — not in the car or house.
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
                  <p className="mt-4 max-w-sm text-sm font-semibold leading-6 text-green-950/70">
                    Premium outdoor dog rinse for muddy UK walks — ready when
                    the car park mess begins.
                  </p>
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  {["Keep it in the boot", "Add clean water", "Rinse muddy paws"].map(
                    (step, index) => (
                      <div
                        key={step}
                        className="rounded-2xl bg-white/80 p-4 shadow-sm"
                      >
                        <span className="text-xs font-black text-accent-green">
                          0{index + 1}
                        </span>
                        <p className="mt-2 text-sm font-bold leading-6 text-charcoal-green">
                          {step}
                        </p>
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
