const configuredDeliveryPromise = process.env.NEXT_PUBLIC_DELIVERY_PROMISE?.trim();

export const commerce = {
  deliveryPromise:
    configuredDeliveryPromise && configuredDeliveryPromise.length > 0
      ? configuredDeliveryPromise
      : "UK delivery — timing shown at checkout",
  supportPromise: "UK customer support",
  checkoutPromise: "Secure checkout via Stripe",
  returnsPromise: "14-day online cancellation window",
} as const;
