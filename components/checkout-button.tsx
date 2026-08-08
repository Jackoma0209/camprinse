import { TrackedCheckoutLink } from "@/components/tracked-checkout-link";
import { getCheckoutUrl } from "@/lib/checkout";
import { pricingBundles, type BundleId } from "@/lib/pricing";

type CheckoutButtonProps = {
  bundleId: BundleId;
  label?: string;
  className?: string;
};

const baseClass =
  "focus-ring inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-black transition";

export function CheckoutButton({
  bundleId,
  label = "Get CampRinse",
  className = "",
}: CheckoutButtonProps) {
  const checkoutUrl = getCheckoutUrl(bundleId);
  const bundle = pricingBundles.find((item) => item.id === bundleId);
  const value = bundle ? Number(bundle.price.replace("£", "")) : 44.99;

  if (!checkoutUrl) {
    return (
      <span
        className={`${baseClass} cursor-not-allowed bg-green-950/15 text-green-950/55 ${className}`}
        aria-disabled="true"
        title="Checkout is temporarily unavailable."
      >
        Checkout temporarily unavailable
      </span>
    );
  }

  return (
    <TrackedCheckoutLink
      className={`${baseClass} bg-charcoal-green text-white shadow-lg shadow-green-950/20 hover:-translate-y-0.5 hover:bg-deep-green ${className}`}
      href={checkoutUrl}
      label={label}
      value={value}
    />
  );
}
