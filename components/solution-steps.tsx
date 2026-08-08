import Image from "next/image";
import { getSiteImage } from "@/lib/assets";

const steps = [
  {
    title: "Keep CampRinse in the boot",
    text: "Store it with the lead, towel and wellies so it’s ready the moment the walk ends.",
    imageKey: "bootStorage" as const,
  },
  {
    title: "Place the pump in clean water",
    text: "Use a bottle or container — no outdoor tap needed at the car park or trail head.",
    imageKey: "howWater" as const,
  },
  {
    title: "Rinse muddy paws before the dog gets in",
    text: "Wash mud off at the car. Dog goes home clean. Car, hallway and sofa stay cleaner.",
    imageKey: "howRinse" as const,
  },
];

export function SolutionSteps() {
  return (
    <section id="how-it-works" className="py-16 sm:py-20">
      <div className="section-shell rounded-[2rem] bg-cream p-6 shadow-xl shadow-green-950/8 sm:p-10">
        <div className="max-w-2xl">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-water-blue">
            How it works
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-charcoal-green">
            Three steps. Mud stays outside.
          </h2>
          <p className="mt-4 leading-7 text-green-950/70">
            A simple tap-free rinse routine built for dog walks — not a complicated
            camping setup.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => {
            const image = getSiteImage(step.imageKey);
            return (
              <article
                key={step.title}
                className="overflow-hidden rounded-3xl border border-green-950/10 bg-white"
              >
                {image.available ? (
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="flex aspect-[4/3] items-end bg-gradient-to-br from-water-blue/15 via-cream to-sand/40 p-5">
                    <span className="rounded-full bg-charcoal-green px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-cream">
                      Step {index + 1}
                    </span>
                  </div>
                )}
                <div className="p-6">
                  <span className="font-mono text-sm font-black text-accent-green">
                    STEP {index + 1}
                  </span>
                  <h3 className="mt-3 text-xl font-black text-charcoal-green">
                    {step.title}
                  </h3>
                  <p className="mt-3 leading-7 text-green-950/70">{step.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
