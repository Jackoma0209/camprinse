import { faqs } from "@/lib/faq";
import { pricingBundles } from "@/lib/pricing";
import { product } from "@/lib/product";
import { site } from "@/lib/site";

const isConfirmedInStock =
  process.env.NEXT_PUBLIC_PRODUCT_AVAILABILITY?.trim().toLowerCase() === "in_stock";

export function buildProductSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    brand: {
      "@type": "Brand",
      name: product.brand,
    },
    sku: product.sku,
    description: product.shortDescription,
    offers: pricingBundles.map((bundle) => ({
      "@type": "Offer",
      name: bundle.name,
      price: bundle.price.replace("£", ""),
      priceCurrency: "GBP",
      availability: isConfirmedInStock
        ? "https://schema.org/InStock"
        : "https://schema.org/PreOrder",
      url: `${site.url}/#pricing`,
    })),
  };
}

export function buildFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
