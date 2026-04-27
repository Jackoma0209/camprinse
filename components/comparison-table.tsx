const rows = [
  ["Tap-free outdoor clean-up", "Yes", "No", "Limited"],
  ["Reusable rinse routine", "Yes", "No", "Sometimes"],
  ["Useful for boots, paws and gear", "Yes", "Limited", "Awkward"],
  ["Fits camping and van-life storage", "Yes", "Yes", "Varies"],
];

export function ComparisonTable() {
  return (
    <section className="py-16 sm:py-20">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-accent-green">
            Practical comparison
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-charcoal-green">
            Built for real outdoor clean-up moments.
          </h2>
        </div>
        <div className="mt-10 overflow-x-auto rounded-[2rem] border border-green-950/10 bg-white/82 shadow-sm">
          <div className="min-w-[680px]">
            <div className="grid grid-cols-4 border-b border-green-950/10 bg-charcoal-green text-sm font-black text-cream">
              <div className="p-4">Need</div>
              <div className="p-4">CampRinse</div>
              <div className="p-4">Wet wipes</div>
              <div className="p-4">Water bottle</div>
            </div>
            {rows.map((row) => (
              <div
                key={row[0]}
                className="grid grid-cols-4 border-b border-green-950/10 last:border-b-0"
              >
                {row.map((cell, index) => (
                  <div
                    key={`${row[0]}-${cell}`}
                    className={`p-4 text-sm leading-6 ${
                      index === 0
                        ? "font-bold text-charcoal-green"
                        : "text-green-950/72"
                    }`}
                  >
                    {cell}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
