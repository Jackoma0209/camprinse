"use client";

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
    const trackingWindow = window as TrackingWindow;
    const payload = {
      currency: "GBP",
      value,
      items: [
        {
          item_name: "CampRinse Dog Rinse Kit",
          quantity: 1,
          price: value,
        },
      ],
    };

    trackingWindow.gtag?.("event", "begin_checkout", payload);
    trackingWindow.fbq?.("track", "InitiateCheckout", {
      currency: "GBP",
      value,
    });
    trackingWindow.ttq?.track?.("InitiateCheckout", {
      currency: "GBP",
      value,
    });
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
