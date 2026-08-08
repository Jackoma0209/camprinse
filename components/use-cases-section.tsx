import { useCases } from "@/lib/product";

const helperText = [
  "Rinse muddy paws at the car boot before they hit the seats, hallway or sofa.",
  "Knock trail mud off boots before it coats the footwell and carpets.",
  "Clear sand from feet and beach gear before the car journey home.",
  "Freshen up at the pitch so the tent and sleeping kit stay cleaner.",
  "Wash down frames, helmets and outdoor kit after muddy trails.",
  "A compact clean-up kit for weekends away and van storage.",
];

export function UseCasesSection() {
  return (
    <section id="use-cases" className="py-16 sm:py-20">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-accent-green">
            Dogs first
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-charcoal-green sm:text-5xl">
            Built for muddy paws. Useful for everything else.
          </h2>
          <p className="mt-4 text-lg leading-8 text-green-950/70">
            CampRinse is for dog owners first. Secondary outdoor uses stay
            available — without diluting the hero job.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase, index) => (
            <article
              key={useCase}
              className={`rounded-3xl border p-6 shadow-sm ${
                index === 0
                  ? "border-charcoal-green bg-charcoal-green text-cream"
                  : "border-green-950/10 bg-white/72"
              }`}
            >
              <h3
                className={`text-xl font-black ${
                  index === 0 ? "text-cream" : "text-charcoal-green"
                }`}
              >
                {useCase}
                {index === 0 ? (
                  <span className="ml-2 rounded-full bg-sand px-2 py-0.5 text-xs font-black uppercase tracking-[0.12em] text-charcoal-green">
                    Primary
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
