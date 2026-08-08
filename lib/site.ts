export const site = {
  name: "CampRinse",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://camprinse.com",
  ukUrl: "https://camprinse.co.uk",
  email: "hello@camprinse.com",
  description:
    "CampRinse is the portable dog rinse system that keeps mud outside — stop dirty paws wrecking your car, van and home. Also useful for boots, beach and outdoor gear.",
  organizationSchema: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CampRinse",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://camprinse.com",
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: "hello@camprinse.com",
        contactType: "customer support",
        areaServed: "GB",
        availableLanguage: "en-GB",
      },
    ],
  },
  websiteSchema: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "CampRinse",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://camprinse.com",
  },
} as const;

export const navItems = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Dog kits", href: "#pricing" },
  { label: "Use cases", href: "#use-cases" },
  { label: "FAQ", href: "#faq" },
  { label: "Safety", href: "#safety" },
] as const;

export const legalPages = [
  { label: "Shipping", href: "/shipping-policy" },
  { label: "Returns", href: "/returns-policy" },
  { label: "Privacy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms" },
  { label: "Product safety", href: "/product-safety" },
  { label: "Contact", href: "/contact" },
] as const;
