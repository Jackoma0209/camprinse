export function ProblemSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-accent-green">
            The problem every dog owner knows
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-charcoal-green sm:text-5xl">
            One muddy dog. One ruined car boot. One filthy hallway.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-green-950/70">
            You love the walk. You hate what comes after — wet dog on the
            seats, paw prints on the stairs, and that damp-mud smell that
            never quite leaves the sofa.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              title: "The car pays first",
              text: "Muddy paws hit the boot liner, seats and door sills before you can do anything about it.",
            },
            {
              title: "Then the hallway",
              text: "Towels on the floor, wet dog shaking indoors, paw prints tracking through the house.",
            },
            {
              title: "Then the sofa",
              text: "A “quick jump up” and the clean living room is gone — again.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl bg-charcoal-green p-6 shadow-lg shadow-green-950/15"
            >
              <h3 className="text-lg font-black leading-7 text-cream">
                {item.title}
              </h3>
              <p className="mt-3 text-sm font-semibold leading-7 text-cream/78">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
