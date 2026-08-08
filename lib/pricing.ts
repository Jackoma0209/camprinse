export type BundleId = "adventure";

export type PricingBundle = {
  id: BundleId;
  name: string;
  price: string;
  badge?: string;
  description: string;
  includes: string[];
  envKey: "NEXT_PUBLIC_CHECKOUT_URL_ADVENTURE";
};

export const pricingBundles: PricingBundle[] = [
  {
    id: "adventure",
    name: "CampRinse Dog Rinse Kit",
    price: "£44.99",
    badge: "Launch Kit",
    description:
      "The portable rinse kit for dog owners who want muddy paws clean before the dog gets back in the car.",
    envKey: "NEXT_PUBLIC_CHECKOUT_URL_ADVENTURE",
    includes: [
      "Rechargeable portable rinse pump",
      "Rinse hose and shower head",
      "Tap-free setup for a separate water container",
      "Compact setup for the car boot",
    ],
  },
];
