import { commerce } from "@/lib/commerce";

const businessAddress = process.env.NEXT_PUBLIC_BUSINESS_ADDRESS?.trim() || "";
const legalName = process.env.NEXT_PUBLIC_BUSINESS_NAME?.trim() || "CampRinse";

export const site = {
  name: "CampRinse",
  legalName,
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://camprinse.com",
  ukUrl: "https://camprinse.co.uk",
  email: commerce.supportEmail,
  businessAddress,
  returnsAddress: commerce.returnsAddress,
  description:
    "CampRinse is the portable dog rinse kit for UK muddy walks. Rinse dirty paws at the car boot before they reach your seats, hallway or sofa. Mud stays outside.",
  organizationSchema: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CampRinse",
    legalName,
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://camprinse.com",
    email: commerce.supportEmail,
    ...(businessAddress
      ? {
          address: {
            "@type": "PostalAddress",
            streetAddress: businessAddress,
            addressCountry: "GB",
          },
        }
      : {}),
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: commerce.supportEmail,
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
  { label: "The kit", href: "#product" },
  { label: "Reviews", href: "#reviews" },
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
