import Image from "next/image";
import { getSiteImage } from "@/lib/assets";

export function SocialProofPlaceholder() {
  const beforeImage = getSiteImage("before");
  const afterImage = getSiteImage("after");
  const hasPhotos = beforeImage.available || afterImage.available;

  return (
    <section className="py-16 sm:py-20">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-accent-green">
            Real dog owners
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-charcoal-green sm:text-4xl">
            Before & after the muddy walk.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-8 text-green-950/70">
            {hasPhotos
              ? "Real walk moments — mud at the car, then clean paws ready for the drive home."
              : "Verified photos and reviews from UK dog owners will appear here after launch. We never invent testimonials or star ratings."}
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <article className="overflow-hidden rounded-[2rem] border border-dashed border-green-950/20 bg-white/60">
            {beforeImage.available ? (
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={beforeImage.src}
                  alt={beforeImage.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            ) : null}
            <div className="p-6 sm:p-8">
              <span className="rounded-full bg-charcoal-green/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-charcoal-green">
                Before
              </span>
              <h3 className="mt-4 text-xl font-black text-charcoal-green">
                Muddy paws, filthy boot, wet dog on the seats
              </h3>
              <p className="mt-3 leading-7 text-green-950/70">
                {beforeImage.available
                  ? "The messy moment every UK dog owner knows too well."
                  : "Add public/images/before-muddy-paws.jpg — dirty paws at the car door, mud on the liner, dog ready to jump in."}
              </p>
            </div>
          </article>

          <article className="overflow-hidden rounded-[2rem] border border-dashed border-accent-green/40 bg-white/60">
            {afterImage.available ? (
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={afterImage.src}
                  alt={afterImage.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            ) : null}
            <div className="p-6 sm:p-8">
              <span className="rounded-full bg-accent-green/15 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-accent-green">
                After
              </span>
              <h3 className="mt-4 text-xl font-black text-charcoal-green">
                Rinsed paws, clean car, mud left outside
              </h3>
              <p className="mt-3 leading-7 text-green-950/70">
                {afterImage.available
                  ? "CampRinse at the boot — clean paws, clean car, mud stays outside."
                  : "Add public/images/after-clean-paws.jpg — CampRinse at the boot, clean paws, dog hopping into a clean car."}
              </p>
            </div>
          </article>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            "UK delivery focused",
            "No fake reviews — ever",
            "Built for real muddy walks",
          ].map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-green-950/10 bg-cream p-5 text-center text-sm font-bold text-charcoal-green"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
