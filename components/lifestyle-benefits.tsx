import { lifestyleBenefits } from "@/lib/product";

export function LifestyleBenefits() {
  return (
    <section className="py-16 sm:py-20">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-accent-green">
            The difference
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-charcoal-green sm:text-5xl">
            From the trail to the sofa — less mess at every step.
          </h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {lifestyleBenefits.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-green-950/10 bg-white/75 p-6 shadow-sm"
            >
              <h3 className="text-xl font-black text-charcoal-green">
                {item.title}
              </h3>
              <p className="mt-3 leading-7 text-green-950/70">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
