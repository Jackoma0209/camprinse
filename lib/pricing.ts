import { product } from "@/lib/product";

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
    name: product.name,
    price: product.price,
    badge: "Dog Rinse Kit",
    description:
      "The portable rinse kit for UK dog owners who want muddy paws clean before the dog gets back in the car.",
    envKey: "NEXT_PUBLIC_CHECKOUT_URL_ADVENTURE",
    includes: [...product.included],
  },
];
