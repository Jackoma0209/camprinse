import { CheckoutButton } from "@/components/checkout-button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-12 sm:py-20 lg:py-24">
      <div className="section-shell grid min-w-0 items-center gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:gap-12">
        <div className="min-w-0">
          <p className="inline-flex rounded-full border border-green-950/10 bg-white/70 px-4 py-2 text-sm font-bold text-accent-green shadow-sm">
            CampRinse Portable Shower Kit
          </p>
          <h1 className="mt-5 max-w-full break-normal text-[clamp(2.45rem,10.5vw,3.25rem)] font-black leading-[0.96] tracking-normal text-charcoal-green [overflow-wrap:break-word] sm:mt-6 sm:max-w-3xl sm:text-5xl lg:text-7xl">
            Rinse Off Anywhere — No Tap Needed
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-green-950/72 sm:mt-6 sm:text-xl">
            A portable rechargeable rinse kit for camping showers, beach sand,
            muddy boots, pets and outdoor gear. Keep it in the car, van or
            camping kit and clean up before the mess comes home.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CheckoutButton
              bundleId="adventure"
              label="Shop CampRinse"
              className="sm:min-w-44"
            />
            <a
              href="#how-it-works"
              className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full border border-green-950/15 bg-white/70 px-6 text-sm font-black text-charcoal-green transition hover:-translate-y-0.5 hover:bg-white"
            >
              See how it works
            </a>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 text-sm font-semibold text-green-950/70 sm:grid-cols-4">
            <span className="rounded-2xl bg-white/65 p-4">Tap-free setup</span>
            <span className="rounded-2xl bg-white/65 p-4">Rechargeable kit</span>
            <span className="rounded-2xl bg-white/65 p-4">Portable rinse kit</span>
            <span className="rounded-2xl bg-white/65 p-4">Outdoor clean-up</span>
          </div>
        </div>

        <div className="relative min-w-0">
          <div className="rounded-[2rem] border border-green-950/10 bg-white/80 p-4 shadow-2xl shadow-green-950/12 sm:p-5">
            <div className="relative min-h-[340px] overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-water-blue/20 via-cream to-sand/45 p-4 sm:min-h-[440px] sm:p-6">
              <div className="absolute left-7 top-8 h-24 w-24 rounded-full border-[16px] border-water-blue/25 sm:h-28 sm:w-28 sm:border-[18px]" />
              <div className="absolute bottom-0 right-0 h-44 w-44 rounded-tl-[4rem] bg-charcoal-green/10 sm:h-56 sm:w-56 sm:rounded-tl-[5rem]" />
              <div className="relative z-10 flex h-full min-h-[308px] flex-col justify-between sm:min-h-[388px]">
                <div className="flex justify-end">
                  <span className="rounded-full bg-charcoal-green px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-cream">
                    MVP launch
                  </span>
                </div>
                <div className="mx-auto w-full max-w-sm">
                  <div className="rounded-[1.5rem] border border-green-950/10 bg-cream p-4 shadow-xl shadow-green-950/10 sm:rounded-[2rem] sm:p-5">
                    <div className="h-18 rounded-3xl bg-charcoal-green sm:h-24" />
                    <div className="mt-4 grid grid-cols-[1fr_auto] gap-4">
                      <div>
                        <div className="h-3 w-28 rounded-full bg-accent-green/50" />
                        <div className="mt-3 h-3 w-44 rounded-full bg-green-950/15" />
                        <div className="mt-2 h-3 w-36 rounded-full bg-green-950/15" />
                      </div>
                      <div className="size-16 rounded-full border-[12px] border-water-blue/45" />
                    </div>
                    <div className="mt-4 rounded-3xl bg-white p-4 sm:mt-5">
                      <div className="flex items-center gap-3">
                        <span className="size-9 rounded-full bg-water-blue/25" />
                        <span className="h-2 flex-1 rounded-full bg-green-950/15" />
                      </div>
                      <div className="mt-4 h-14 rounded-2xl bg-sand/45 sm:h-20" />
                    </div>
                  </div>
                </div>
                <p className="rounded-3xl bg-white/75 p-4 text-sm font-semibold leading-6 text-green-950/75">
                  Visual placeholder: replace with verified supplier product
                  photography before paid traffic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
