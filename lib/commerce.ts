const configuredDeliveryPromise = process.env.NEXT_PUBLIC_DELIVERY_PROMISE?.trim();
const configuredAvailability = process.env.NEXT_PUBLIC_PRODUCT_AVAILABILITY?.trim().toLowerCase();
const configuredSupportEmail = process.env.NEXT_PUBLIC_SUPPORT_EMAIL?.trim();
const configuredReturnsAddress = process.env.NEXT_PUBLIC_RETURNS_ADDRESS?.trim();

export type ProductAvailability = "preorder" | "in_stock" | "out_of_stock";

function resolveAvailability(value?: string): ProductAvailability {
  if (value === "in_stock" || value === "out_of_stock" || value === "preorder") {
    return value;
  }
  return "preorder";
}

export const commerce = {
  deliveryPromise:
    configuredDeliveryPromise && configuredDeliveryPromise.length > 0
      ? configuredDeliveryPromise
      : "UK delivery — timing shown at checkout",
  supportPromise: "UK customer support",
  checkoutPromise: "Secure checkout via Stripe",
  returnsPromise: "14-day online cancellation window",
  availability: resolveAvailability(configuredAvailability),
  supportEmail:
    configuredSupportEmail && configuredSupportEmail.includes("@")
      ? configuredSupportEmail
      : "hello@camprinse.com",
  returnsAddress:
    configuredReturnsAddress && configuredReturnsAddress.length > 0
      ? configuredReturnsAddress
      : "",
  announcement:
    resolveAvailability(configuredAvailability) === "in_stock"
      ? "In UK stock · Fast UK dispatch · Secure checkout"
      : "UK delivery · Secure Stripe checkout · UK customer support",
  stickyCtaLabel: "Get CampRinse — £44.99",
  primaryCtaLabel: "Get CampRinse — £44.99",
} as const;

export function schemaAvailabilityUrl() {
  if (commerce.availability === "in_stock") {
    return "https://schema.org/InStock";
  }
  if (commerce.availability === "out_of_stock") {
    return "https://schema.org/OutOfStock";
  }
  return "https://schema.org/PreOrder";
}
