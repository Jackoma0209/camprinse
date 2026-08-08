export function SafetySection() {
  return (
    <section id="safety" className="py-16 sm:py-20">
      <div className="section-shell rounded-[2rem] bg-charcoal-green p-6 text-cream shadow-xl shadow-green-950/15 sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-sand">
              Simple, sensible use
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight">
              Rinse the dog — not the electrics.
            </h2>
            <p className="mt-4 leading-7 text-cream/75">
              CampRinse is a rechargeable outdoor rinse kit. Use clean water,
              follow the instructions supplied with your product and keep
              charging accessories dry and protected.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Use clean water at a safe, comfortable temperature for your dog.",
              "CampRinse does not heat water and is not sold as a pressure washer.",
              "Keep chargers, plugs and charging connections away from water while charging.",
              "Stop use if the product, cable or connector appears damaged and contact support.",
            ].map((item) => (
              <div key={item} className="rounded-3xl bg-white/10 p-5 leading-7">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
