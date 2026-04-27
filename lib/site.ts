export const site = {
  name: "CampRinse",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://camprinse.com",
  ukUrl: "https://camprinse.co.uk",
  email: "hello@camprinse.com",
  description:
    "CampRinse is a portable rechargeable rinse kit for camping, beaches, muddy boots, pets and outdoor gear.",
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
  { label: "Use cases", href: "#use-cases" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Bundles", href: "#pricing" },
  { label: "Safety", href: "#safety" },
  { label: "FAQ", href: "#faq" },
] as const;

export const legalPages = [
  { label: "Shipping", href: "/shipping-policy" },
  { label: "Returns", href: "/returns-policy" },
  { label: "Privacy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms" },
  { label: "Product safety", href: "/product-safety" },
  { label: "Contact", href: "/contact" },
] as const;
