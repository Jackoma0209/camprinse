export function SafetySection() {
  return (
    <section id="safety" className="py-16 sm:py-20">
      <div className="section-shell rounded-[2rem] bg-charcoal-green p-6 text-cream shadow-xl shadow-green-950/15 sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-sand">
              Product safety
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight">
              Safe for real walks — documented first.
            </h2>
            <p className="mt-4 leading-7 text-cream/75">
              Dog owners trust products that are careful with claims. We only
              publish safety and performance wording once supplier evidence is
              confirmed.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Confirm manual, labelling and safety wording before launch.",
              "Do not claim heating, waterproof ratings, pressure ratings or certifications without supplier proof.",
              "Use clean water and follow the final product manual.",
              "Keep checkout paused until fulfilment and returns handling are documented.",
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
