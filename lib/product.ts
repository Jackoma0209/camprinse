export const product = {
  brand: "CampRinse",
  name: "CampRinse Dog Rinse Kit",
  sku: "CR-DOG-01",
  price: "£44.99",
  priceValue: 44.99,
  currency: "GBP",
  shortDescription:
    "The portable rinse kit that lives in your car boot. Rinse muddy paws after the walk before they reach the boot, seats, hallway or sofa.",
  tagline: "Walk → Rinse → Drive home clean.",
  included: [
    "Rechargeable portable rinse pump",
    "Rinse hose",
    "Shower / rinse head",
    "Standard accessories supplied with the unit",
  ],
  // Only populate when confirmed by supplier documentation.
  verifiedSpecs: [] as readonly { label: string; value: string }[],
  safeClaims: [
    "Rechargeable portable rinse kit for dog walks",
    "Designed for muddy paws and outdoor clean-up",
    "Works from a separate clean-water source — no outdoor tap required",
    "Also useful for muddy boots, beach sand, bikes and camping gear",
  ],
} as const;

export const lifestyleBenefits = [
  {
    title: "At the trail",
    text: "Mud gets rinsed away before your dog jumps back into the car.",
  },
  {
    title: "In the car",
    text: "Less mess on seats, mats, door sills and boot liners.",
  },
  {
    title: "At home",
    text: "Less towelling at the door and fewer muddy paw prints indoors.",
  },
] as const;

export const useCases = [
  "Muddy dog paws",
  "Muddy boots",
  "Beach sand rinse-offs",
  "Camping clean-ups",
  "Bike and outdoor gear",
  "Festivals and van-life",
] as const;
