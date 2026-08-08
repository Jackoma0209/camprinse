const businessAddress = process.env.NEXT_PUBLIC_BUSINESS_ADDRESS?.trim() || "";
const legalName = process.env.NEXT_PUBLIC_BUSINESS_NAME?.trim() || "CampRinse";

export const site = {
  name: "CampRinse",
  legalName,
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://camprinse.com",
  ukUrl: "https://camprinse.co.uk",
  email: "hello@camprinse.com",
  businessAddress,
  description:
    "CampRinse is the portable dog rinse system that keeps mud outside — rinse dirty paws at the car before they reach your seats, hallway or sofa.",
  organizationSchema: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CampRinse",
    legalName,
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://camprinse.com",
    ...(businessAddress ? { address: businessAddress } : {}),
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
  { label: "The kit", href: "#pricing" },
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
