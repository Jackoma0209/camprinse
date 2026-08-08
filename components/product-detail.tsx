import Image from "next/image";
import { getSiteImage } from "@/lib/assets";
import { product } from "@/lib/product";

const kitHighlights = [
  {
    title: "Rinse at the boot",
    text: "Clean muddy paws before they hit seats, mats or the hallway.",
  },
  {
    title: "No outdoor tap needed",
    text: "Use a bottle or container of clean water wherever the walk ends.",
  },
  {
    title: "Lives in the car",
    text: "Compact rechargeable kit that stays packed with your walking gear.",
  },
  {
    title: "Secondary outdoor uses",
    text: "Also handy for muddy boots, beach sand, bikes and camping.",
  },
];

export function ProductDetail() {
  const productImage = getSiteImage("product");

  return (
    <section id="product" className="py-16 sm:py-20">
      <div className="section-shell grid gap-8 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-green-950/10 bg-white/78 p-6 shadow-sm sm:p-8">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-accent-green">
            What&apos;s in the kit
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-charcoal-green">
            {product.name}
          </h2>
          <p className="mt-5 text-lg leading-8 text-green-950/72">
            {product.shortDescription}
          </p>

          <div className="relative mt-8 overflow-hidden rounded-[1.5rem] border border-green-950/10 bg-cream">
            {productImage.available ? (
              <Image
                src={productImage.src}
                alt={productImage.alt}
                width={960}
                height={720}
                className="h-auto w-full object-cover"
              />
            ) : (
              <div className="flex min-h-56 flex-col justify-end bg-gradient-to-br from-charcoal-green/10 via-cream to-sand/40 p-6">
                <p className="text-sm font-black uppercase tracking-[0.16em] text-accent-green">
                  Kit contents
                </p>
                <p className="mt-2 text-2xl font-black text-charcoal-green">
                  Pump · hose · rinse head
                </p>
              </div>
            )}
          </div>

          <ul className="mt-8 space-y-3">
            {product.included.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-2xl bg-cream px-4 py-3 text-sm font-semibold leading-6 text-charcoal-green"
              >
                <span
                  className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-accent-green/15 text-xs font-black text-accent-green"
                  aria-hidden
                >
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {product.verifiedSpecs.length > 0 ? (
            <dl className="mt-8 grid gap-3 sm:grid-cols-2">
              {product.verifiedSpecs.map((spec) => (
                <div key={spec.label} className="rounded-2xl border border-green-950/10 p-4">
                  <dt className="text-xs font-black uppercase tracking-[0.14em] text-green-950/50">
                    {spec.label}
                  </dt>
                  <dd className="mt-1 text-sm font-bold text-charcoal-green">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>
          ) : null}
        </div>

        <div className="rounded-[2rem] bg-charcoal-green p-6 text-cream shadow-xl shadow-green-950/15 sm:p-8">
          <h3 className="text-2xl font-black">Why dog owners keep it in the boot</h3>
          <p className="mt-3 text-sm leading-6 text-cream/75">
            One job: stop mud travelling from the trail into your car and home.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {kitHighlights.map((item) => (
              <div key={item.title} className="rounded-3xl bg-white/10 p-5">
                <h4 className="font-black text-sand">{item.title}</h4>
                <p className="mt-2 text-sm leading-6 text-cream/82">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-sand">
              Honest positioning
            </p>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-cream/82">
              {product.safeClaims.map((claim) => (
                <li key={claim}>{claim}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
