"use client";

import { product } from "@/lib/product";

type TrackedCheckoutLinkProps = {
  href: string;
  label: string;
  className: string;
  value: number;
};

type TrackingWindow = Window & {
  gtag?: (...args: unknown[]) => void;
  fbq?: (...args: unknown[]) => void;
  ttq?: { track?: (event: string, payload?: Record<string, unknown>) => void };
};

export function TrackedCheckoutLink({
  href,
  label,
  className,
  value,
}: TrackedCheckoutLinkProps) {
  function trackCheckout() {
    try {
      const trackingWindow = window as TrackingWindow;
      const payload = {
        currency: "GBP",
        value,
        items: [
          {
            item_id: product.sku,
            item_name: product.name,
            quantity: 1,
            price: value,
          },
        ],
      };

      trackingWindow.gtag?.("event", "begin_checkout", payload);
      trackingWindow.fbq?.("track", "InitiateCheckout", {
        currency: "GBP",
        value,
        content_ids: [product.sku],
        content_name: product.name,
      });
      trackingWindow.ttq?.track?.("InitiateCheckout", {
        currency: "GBP",
        value,
        content_id: product.sku,
      });
    } catch {
      // Analytics must never break checkout.
    }
  }

  return (
    <a
      className={className}
      href={href}
      rel="noopener noreferrer"
      onClick={trackCheckout}
    >
      {label}
    </a>
  );
}
