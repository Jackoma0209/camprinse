import { useCases } from "@/lib/product";

const helperText = [
  "Freshen up at the pitch before getting into the tent.",
  "Clear sand from feet, boards and beach gear before the car.",
  "Keep boot liners and door sills cleaner after wet walks.",
  "Rinse paws before muddy prints reach the sofa.",
  "Wash down frames, helmets and outdoor kit after trails.",
  "A useful clean-up kit for weekends away and van storage.",
];

export function UseCasesSection() {
  return (
    <section id="use-cases" className="py-16 sm:py-20">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-accent-green">
            Built for the messy bit after the fun bit
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-charcoal-green sm:text-5xl">
            Keep outdoor mess outside.
          </h2>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase, index) => (
            <article
              key={useCase}
              className="rounded-3xl border border-green-950/10 bg-white/72 p-6 shadow-sm"
            >
              <span className="flex size-12 items-center justify-center rounded-2xl bg-water-blue/18 text-lg font-black text-charcoal-green">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-xl font-black text-charcoal-green">
                {useCase}
              </h3>
              <p className="mt-3 leading-7 text-green-950/70">
                {helperText[index]}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
