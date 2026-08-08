import { getCheckoutUrl } from "@/lib/checkout";
import type { BundleId } from "@/lib/pricing";

type CheckoutButtonProps = {
  bundleId: BundleId;
  label?: string;
  className?: string;
};

const baseClass =
  "focus-ring inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-black transition";

export function CheckoutButton({
  bundleId,
  label = "Shop the Dog Rinse Kit",
  className = "",
}: CheckoutButtonProps) {
  const checkoutUrl = getCheckoutUrl(bundleId);

  if (!checkoutUrl) {
    return (
      <span
        className={`${baseClass} cursor-not-allowed bg-green-950/15 text-green-950/55 ${className}`}
        aria-disabled="true"
        title="Add the checkout URL in Vercel environment variables to enable this bundle."
      >
        Checkout opening soon
      </span>
    );
  }

  return (
    <a
      className={`${baseClass} bg-charcoal-green text-white shadow-lg shadow-green-950/20 hover:-translate-y-0.5 hover:bg-deep-green ${className}`}
      href={checkoutUrl}
      rel="noopener noreferrer"
    >
      {label}
    </a>
  );
}
