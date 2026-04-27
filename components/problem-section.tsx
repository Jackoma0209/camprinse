export function ProblemSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-accent-green">
            The problem
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-charcoal-green sm:text-5xl">
            Mud, sand and kit grime travel fast.
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            "No tap near the car park, pitch or beach steps.",
            "Wet wipes and bottles are awkward for bigger clean-ups.",
            "The mess ends up in the car, van, tent or hallway.",
          ].map((item) => (
            <div
              key={item}
              className="rounded-3xl bg-charcoal-green p-6 text-lg font-bold leading-8 text-cream shadow-lg shadow-green-950/15"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
