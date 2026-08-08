import Image from "next/image";
import { getSiteImage } from "@/lib/assets";
import { commerce } from "@/lib/commerce";

export function SocialProofPlaceholder() {
  const beforeImage = getSiteImage("before");
  const afterImage = getSiteImage("after");
  const hasPhotos = beforeImage.available && afterImage.available;

  return (
    <section id="reviews" className="py-16 sm:py-20">
      <div className="section-shell">
        {hasPhotos ? (
          <>
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
                {
                  image: beforeImage,
                  label: "Before",
                  title: "Muddy paws at the car",
                },
                {
                  image: afterImage,
                  label: "After",
                  title: "Clean paws ready for the ride home",
                },
              ].map(({ image, label, title }) => (
                <article
                  key={label}
                  className="overflow-hidden rounded-[2rem] border border-green-950/10 bg-white/70"
                >
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
                    <h3 className="mt-4 text-xl font-black text-charcoal-green">
                      {title}
                    </h3>
                  </div>
                </article>
              ))}
            </div>
          </>
        ) : (
          <div className="rounded-[2rem] border border-green-950/10 bg-cream p-6 shadow-sm sm:p-10">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-accent-green">
                Trust CampRinse
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-charcoal-green sm:text-4xl">
                Built for real muddy UK walks.
              </h2>
              <p className="mx-auto mt-4 leading-8 text-green-950/70">
                We only publish verified customer reviews after real orders.
                Until then, here is what you can trust today.
              </p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                commerce.checkoutPromise,
                commerce.deliveryPromise,
                commerce.returnsPromise,
                commerce.supportPromise,
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-3xl bg-white p-5 text-center text-sm font-bold text-charcoal-green"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
