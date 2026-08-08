import { useCases } from "@/lib/product";

const helperText = [
  "Rinse muddy paws at the car boot before they hit the seats, hallway or sofa.",
  "Knock trail mud off boots before it coats the footwell and carpets.",
  "Clear sand from feet, boards and beach gear before the car journey home.",
  "Freshen up at the pitch so the tent and sleeping kit stay cleaner.",
  "Wash down frames, helmets and outdoor kit after muddy trails.",
  "A compact clean-up kit for weekends away, family trips and van storage.",
];

export function UseCasesSection() {
  return (
    <section id="use-cases" className="py-16 sm:py-20">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-accent-green">
            Dogs first — outdoor life second
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-charcoal-green sm:text-5xl">
            Built for muddy paws. Useful for everything else.
          </h2>
          <p className="mt-4 text-lg leading-8 text-green-950/70">
            CampRinse is designed around dog owners who refuse to let mud
            take over the car and home — with secondary uses for the rest of
            outdoor life.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase, index) => (
            <article
              key={useCase}
              className={`rounded-3xl border p-6 shadow-sm ${
                index === 0
                  ? "border-charcoal-green bg-charcoal-green text-cream sm:col-span-2 lg:col-span-1"
                  : "border-green-950/10 bg-white/72"
              }`}
            >
              <span
                className={`flex size-12 items-center justify-center rounded-2xl text-lg font-black ${
                  index === 0
                    ? "bg-white/15 text-cream"
                    : "bg-water-blue/18 text-charcoal-green"
                }`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3
                className={`mt-5 text-xl font-black ${
                  index === 0 ? "text-cream" : "text-charcoal-green"
                }`}
              >
                {useCase}
                {index === 0 ? (
                  <span className="ml-2 rounded-full bg-sand px-2 py-0.5 text-xs font-black uppercase tracking-[0.12em] text-charcoal-green">
                    Hero use
                  </span>
                ) : null}
              </h3>
              <p
                className={`mt-3 leading-7 ${
                  index === 0 ? "text-cream/78" : "text-green-950/70"
                }`}
              >
                {helperText[index]}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
