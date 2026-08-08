const stages = [
  {
    step: "01",
    title: "Muddy walk",
    text: "The best part of the day — until the car park clean-up starts.",
  },
  {
    step: "02",
    title: "Muddy car",
    text: "Paws hit the boot, seats and door sills before you can stop them.",
  },
  {
    step: "03",
    title: "Muddy hallway",
    text: "Towels on the floor, wet dog shaking, prints on the stairs.",
  },
  {
    step: "04",
    title: "Muddy sofa",
    text: "One jump up and the living room is ruined — again.",
  },
];

export function ProblemSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-accent-green">
            The problem every dog owner knows
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-charcoal-green sm:text-5xl">
            Muddy walk → muddy car → muddy hallway → muddy sofa.
          </h2>
          <p className="mt-5 text-lg leading-8 text-green-950/70">
            You love the walk. You hate what comes after — wet dog on the seats,
            paw prints through the house, and that damp-mud smell on the sofa.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stages.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl bg-charcoal-green p-6 shadow-lg shadow-green-950/15"
            >
              <span className="font-mono text-xs font-black uppercase tracking-[0.16em] text-sand">
                {item.step}
              </span>
              <h3 className="mt-3 text-xl font-black text-cream">{item.title}</h3>
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
