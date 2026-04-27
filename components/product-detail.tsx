import { product } from "@/lib/product";

export function ProductDetail() {
  return (
    <section id="product" className="py-16 sm:py-20">
      <div className="section-shell grid gap-8 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-green-950/10 bg-white/78 p-6 shadow-sm sm:p-8">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-accent-green">
            Initial product
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-charcoal-green">
            {product.name}
          </h2>
          <p className="mt-5 text-lg leading-8 text-green-950/72">
            {product.shortDescription}
          </p>
          <dl className="mt-8 grid gap-4 text-sm sm:grid-cols-2">
            <div className="rounded-2xl bg-cream p-4">
              <dt className="font-black text-charcoal-green">Supplier</dt>
              <dd className="mt-1 text-green-950/70">{product.supplier}</dd>
            </div>
            <div className="rounded-2xl bg-cream p-4">
              <dt className="font-black text-charcoal-green">SKU</dt>
              <dd className="mt-1 font-mono text-green-950/70">{product.sku}</dd>
            </div>
          </dl>
        </div>
        <div className="rounded-[2rem] bg-charcoal-green p-6 text-cream shadow-xl shadow-green-950/15 sm:p-8">
          <h3 className="text-2xl font-black">Launch-safe claims only</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div>
              <p className="font-black text-sand">Use on page</p>
              <ul className="mt-3 space-y-3 text-sm leading-6 text-cream/82">
                {product.safeClaims.map((claim) => (
                  <li key={claim}>{claim}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-black text-sand">Do not claim yet</p>
              <ul className="mt-3 space-y-3 text-sm leading-6 text-cream/82">
                {product.excludedClaims.map((claim) => (
                  <li key={claim}>{claim}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
