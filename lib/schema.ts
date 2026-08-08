import { schemaAvailabilityUrl } from "@/lib/commerce";
import { faqs } from "@/lib/faq";
import { pricingBundles } from "@/lib/pricing";
import { product } from "@/lib/product";
import { site } from "@/lib/site";

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
      priceCurrency: product.currency,
      availability: schemaAvailabilityUrl(),
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
