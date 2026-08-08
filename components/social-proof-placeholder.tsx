import Image from "next/image";
import { getSiteImage } from "@/lib/assets";

export function SocialProofPlaceholder() {
  const beforeImage = getSiteImage("before");
  const afterImage = getSiteImage("after");
  const hasPhotos = beforeImage.available && afterImage.available;

  if (!hasPhotos) {
    return (
      <section className="py-16 sm:py-20">
        <div className="section-shell">
          <div className="rounded-[2rem] border border-green-950/10 bg-cream p-6 shadow-sm sm:p-10">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-accent-green">
                Why CampRinse
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-charcoal-green sm:text-4xl">
                Built around the moment the walk gets messy.
              </h2>
              <p className="mx-auto mt-4 leading-8 text-green-950/70">
                The value is simple: deal with mud at the car, not after it has
                spread through the car and house.
              </p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ["At the trail", "Rinse paws before your dog jumps back in."],
                ["On the drive", "Keep wet mud away from seats, mats and door sills."],
                ["Back home", "Less towelling, fewer paw prints and less clean-up."],
              ].map(([title, text]) => (
                <article key={title} className="rounded-3xl bg-white p-5">
                  <h3 className="font-black text-charcoal-green">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-green-950/70">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 sm:py-20">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-accent-green">
            Real walks
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-charcoal-green sm:text-4xl">
            Before & after the rinse.
          </h2>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {[
            { image: beforeImage, label: "Before", title: "Muddy paws at the car" },
            { image: afterImage, label: "After", title: "Clean paws ready for the ride home" },
          ].map(({ image, label, title }) => (
            <article key={label} className="overflow-hidden rounded-[2rem] border border-green-950/10 bg-white/70">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="rounded-full bg-charcoal-green/10 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-charcoal-green">
                  {label}
                </span>
                <h3 className="mt-4 text-xl font-black text-charcoal-green">{title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
