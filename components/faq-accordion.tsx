import { faqs } from "@/lib/faq";

export function FAQAccordion() {
  return (
    <section id="faq" className="py-16 sm:py-20">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-accent-green">
            FAQ
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-charcoal-green">
            Clear answers, no inflated claims.
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-3xl border border-green-950/10 bg-white/80 p-5"
            >
              <summary className="cursor-pointer list-none text-lg font-black text-charcoal-green">
                <span className="flex items-center justify-between gap-4">
                  {faq.question}
                  <span className="text-2xl text-accent-green group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-4 leading-8 text-green-950/70">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
