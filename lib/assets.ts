import { existsSync } from "node:fs";
import path from "node:path";

/**
 * Drop-in image slots for conversion photography.
 * Place files under public/images/ with these exact names to go live.
 * See docs/dog-photography-brief.md for shot requirements.
 */
export const siteImages = {
  hero: {
    file: "hero-dog-boot.jpg",
    src: "/images/hero-dog-boot.jpg",
    alt: "Muddy dog having paws rinsed at the car boot with CampRinse",
  },
  before: {
    file: "before-muddy-paws.jpg",
    src: "/images/before-muddy-paws.jpg",
    alt: "Muddy dog paws and dirty car boot after a wet walk",
  },
  after: {
    file: "after-clean-paws.jpg",
    src: "/images/after-clean-paws.jpg",
    alt: "Clean dog paws after rinsing with CampRinse before getting in the car",
  },
  product: {
    file: "product-kit.jpg",
    src: "/images/product-kit.jpg",
    alt: "CampRinse Dog Rinse Kit packed for the car boot",
  },
} as const;

export type SiteImageKey = keyof typeof siteImages;

function publicImagePath(fileName: string) {
  return path.join(process.cwd(), "public", "images", fileName);
}

export function hasSiteImage(key: SiteImageKey): boolean {
  return existsSync(publicImagePath(siteImages[key].file));
}

export function getSiteImage(key: SiteImageKey) {
  const image = siteImages[key];
  return {
    ...image,
    available: hasSiteImage(key),
  };
}
