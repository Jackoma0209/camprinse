import { CheckoutButton } from "@/components/checkout-button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-14 sm:py-20 lg:py-24">
      <div className="section-shell grid items-center gap-12 lg:grid-cols-[1.04fr_0.96fr]">
        <div>
          <p className="inline-flex rounded-full border border-green-950/10 bg-white/70 px-4 py-2 text-sm font-bold text-accent-green shadow-sm">
            CampRinse Portable Shower Kit
          </p>
          <h1 className="mt-6 max-w-3xl text-5xl font-black tracking-tight text-charcoal-green sm:text-6xl lg:text-7xl">
            Rinse Off Anywhere — No Tap Needed
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-green-950/72 sm:text-xl">
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
          <div className="mt-8 grid gap-3 text-sm font-semibold text-green-950/70 sm:grid-cols-3">
            <span className="rounded-2xl bg-white/65 p-4">Tap-free setup</span>
            <span className="rounded-2xl bg-white/65 p-4">Rechargeable kit</span>
            <span className="rounded-2xl bg-white/65 p-4">Outdoor clean-up</span>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[2rem] border border-green-950/10 bg-white/80 p-5 shadow-2xl shadow-green-950/12">
            <div className="relative min-h-[440px] overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-water-blue/20 via-cream to-sand/45 p-6">
              <div className="absolute left-7 top-8 h-28 w-28 rounded-full border-[18px] border-water-blue/25" />
              <div className="absolute bottom-0 right-0 h-56 w-56 rounded-tl-[5rem] bg-charcoal-green/10" />
              <div className="relative z-10 flex h-full min-h-[388px] flex-col justify-between">
                <div className="flex justify-end">
                  <span className="rounded-full bg-charcoal-green px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-cream">
                    MVP launch
                  </span>
                </div>
                <div className="mx-auto w-full max-w-sm">
                  <div className="rounded-[2rem] border border-green-950/10 bg-cream p-5 shadow-xl shadow-green-950/10">
                    <div className="h-24 rounded-3xl bg-charcoal-green" />
                    <div className="mt-4 grid grid-cols-[1fr_auto] gap-4">
                      <div>
                        <div className="h-3 w-28 rounded-full bg-accent-green/50" />
                        <div className="mt-3 h-3 w-44 rounded-full bg-green-950/15" />
                        <div className="mt-2 h-3 w-36 rounded-full bg-green-950/15" />
                      </div>
                      <div className="size-16 rounded-full border-[12px] border-water-blue/45" />
                    </div>
                    <div className="mt-5 rounded-3xl bg-white p-4">
                      <div className="flex items-center gap-3">
                        <span className="size-9 rounded-full bg-water-blue/25" />
                        <span className="h-2 flex-1 rounded-full bg-green-950/15" />
                      </div>
                      <div className="mt-4 h-20 rounded-2xl bg-sand/45" />
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
