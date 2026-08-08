import { getCheckoutUrl } from "@/lib/checkout";
import { commerce } from "@/lib/commerce";
import { TrackedCheckoutLink } from "@/components/tracked-checkout-link";
import { product } from "@/lib/product";

export function MobileStickyCta() {
  const checkoutUrl = getCheckoutUrl("adventure");
  const label = commerce.stickyCtaLabel;
  const baseClass =
    "focus-ring flex h-12 items-center justify-center rounded-full bg-charcoal-green px-5 text-sm font-bold text-white shadow-lg shadow-green-950/20";

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/40 bg-cream/95 px-4 py-3 shadow-2xl backdrop-blur md:hidden">
      {checkoutUrl ? (
        <TrackedCheckoutLink
          href={checkoutUrl}
          label={label}
          className={baseClass}
          value={product.priceValue}
        />
      ) : (
        <a href="#pricing" className={baseClass}>
          {label}
        </a>
      )}
    </div>
  );
}
