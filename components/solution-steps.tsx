const steps = [
  {
    title: "Pack the kit",
    text: "Keep CampRinse in the car, van or camping storage with your outdoor gear.",
  },
  {
    title: "Add a water source",
    text: "Use a suitable clean water container where a tap is not available.",
  },
  {
    title: "Rinse before home",
    text: "Clean sand, mud and everyday outdoor grime before it reaches the upholstery.",
  },
];

export function SolutionSteps() {
  return (
    <section id="how-it-works" className="py-16 sm:py-20">
      <div className="section-shell rounded-[2rem] bg-cream p-6 shadow-xl shadow-green-950/8 sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-water-blue">
              How it works
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-charcoal-green">
              A simple tap-free rinse routine.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {steps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-3xl border border-green-950/10 bg-white p-6"
              >
                <span className="font-mono text-sm font-black text-accent-green">
                  STEP {index + 1}
                </span>
                <h3 className="mt-4 text-xl font-black text-charcoal-green">
                  {step.title}
                </h3>
                <p className="mt-3 leading-7 text-green-950/70">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
