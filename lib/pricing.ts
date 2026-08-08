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
    name: "Weekend Walk Kit",
    price: "£34.99",
    description:
      "The essentials for occasional muddy walks — rinse paws at the car before the mess comes home.",
    envKey: "NEXT_PUBLIC_CHECKOUT_URL_STARTER",
    includes: [
      "CampRinse portable rinse kit",
      "Ideal for 1 dog & weekend walks",
      "Compact setup for the car boot",
    ],
  },
  {
    id: "adventure",
    name: "Dog Rinse Kit",
    price: "£44.99",
    badge: "Most Popular",
    description:
      "The go-to kit for dog owners who walk daily. Stop muddy paws wrecking your car, hallway and sofa.",
    envKey: "NEXT_PUBLIC_CHECKOUT_URL_ADVENTURE",
    includes: [
      "CampRinse portable rinse kit",
      "Built for regular muddy dog walks",
      "Also great for boots, beach & bikes",
      "Best value for active dog owners",
    ],
  },
  {
    id: "family",
    name: "Multi-Dog / Family Kit",
    price: "£59.99",
    description:
      "For multi-dog homes, family walks and van life — more capacity when every walk ends muddy.",
    envKey: "NEXT_PUBLIC_CHECKOUT_URL_FAMILY",
    includes: [
      "CampRinse portable rinse kit",
      "Sized for multi-dog & family use",
      "Perfect for van life & big clean-ups",
      "Keeps cars, vans and homes cleaner",
    ],
  },
];
