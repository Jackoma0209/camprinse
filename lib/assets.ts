import { existsSync } from "node:fs";
import path from "node:path";

/**
 * Image slots for conversion photography.
 * Place files under public/images/ — when present they render automatically.
 * Customer-facing UI never exposes filenames.
 */
export const siteImages = {
  hero: {
    file: "hero-dog-boot.jpg",
    src: "/images/hero-dog-boot.jpg",
    alt: "Muddy dog being rinsed at an open UK car boot with CampRinse",
  },
  heroMobile: {
    file: "hero-dog-boot-mobile.jpg",
    src: "/images/hero-dog-boot-mobile.jpg",
    alt: "Muddy dog and CampRinse at the car boot after a walk",
  },
  before: {
    file: "before-muddy-paws.jpg",
    src: "/images/before-muddy-paws.jpg",
    alt: "Close-up of muddy dog paws beside a car after a wet walk",
  },
  after: {
    file: "after-clean-paws.jpg",
    src: "/images/after-clean-paws.jpg",
    alt: "Clean dog paws after rinsing with CampRinse",
  },
  product: {
    file: "product-kit.jpg",
    src: "/images/product-kit.jpg",
    alt: "CampRinse Dog Rinse Kit product contents laid out cleanly",
  },
  howWater: {
    file: "how-it-works-water.jpg",
    src: "/images/how-it-works-water.jpg",
    alt: "CampRinse pump placed into a clean water container",
  },
  howRinse: {
    file: "how-it-works-rinse.jpg",
    src: "/images/how-it-works-rinse.jpg",
    alt: "Owner rinsing muddy dog paws with CampRinse at the car",
  },
  bootStorage: {
    file: "boot-storage.jpg",
    src: "/images/boot-storage.jpg",
    alt: "CampRinse stored in a family car boot beside lead, boots and towel",
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
