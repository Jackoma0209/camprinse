export type BundleId = "starter" | "adventure" | "family";

export type PricingBundle = {
  id: BundleId;
  name: string;
  price: string;
  badge?: string;
  description: string;
  includes: string[];
  envKey:
    | "NEXT_PUBLIC_CHECKOUT_URL_STARTER"
    | "NEXT_PUBLIC_CHECKOUT_URL_ADVENTURE"
    | "NEXT_PUBLIC_CHECKOUT_URL_FAMILY";
};

export const pricingBundles: PricingBundle[] = [
  {
    id: "starter",
    name: "Starter Kit",
    price: "£34.99",
    description: "Simple outdoor clean-up kit for weekend trips and beach days.",
    envKey: "NEXT_PUBLIC_CHECKOUT_URL_STARTER",
    includes: ["CampRinse rinse kit", "Great for car boots", "Compact clean-up setup"],
  },
  {
    id: "adventure",
    name: "Adventure Kit",
    price: "£44.99",
    badge: "Most Popular",
    description: "The go-to kit for camping, dogs, bikes and muddy gear.",
    envKey: "NEXT_PUBLIC_CHECKOUT_URL_ADVENTURE",
    includes: ["CampRinse rinse kit", "Outdoor-ready bundle positioning", "Best fit for regular trips"],
  },
  {
    id: "family",
    name: "Family / Van-Life Kit",
    price: "£59.99",
    description: "A wider-use bundle for family trips, van-life and repeat clean-ups.",
    envKey: "NEXT_PUBLIC_CHECKOUT_URL_FAMILY",
    includes: ["CampRinse rinse kit", "Family and van-life positioning", "Useful for shared outdoor kit"],
  },
];
