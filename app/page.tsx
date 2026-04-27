import { AnnouncementBar } from "@/components/announcement-bar";
import { ComparisonTable } from "@/components/comparison-table";
import { FAQAccordion } from "@/components/faq-accordion";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { PricingSection } from "@/components/pricing-section";
import { ProblemSection } from "@/components/problem-section";
import { ProductDetail } from "@/components/product-detail";
import { SafetySection } from "@/components/safety-section";
import { SocialProofPlaceholder } from "@/components/social-proof-placeholder";
import { SolutionSteps } from "@/components/solution-steps";
import { UseCasesSection } from "@/components/use-cases-section";
import { buildFaqSchema, buildProductSchema } from "@/lib/schema";

export default function Home() {
  const productSchema = buildProductSchema();
  const faqSchema = buildFaqSchema();

  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>
        <HeroSection />
        <UseCasesSection />
        <ProblemSection />
        <SolutionSteps />
        <ProductDetail />
        <ComparisonTable />
        <PricingSection />
        <SocialProofPlaceholder />
        <FAQAccordion />
        <SafetySection />
        <FinalCTA />
      </main>
      <Footer />
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/40 bg-cream/95 px-4 py-3 shadow-2xl backdrop-blur md:hidden">
        <a
          href="#pricing"
          className="focus-ring flex h-12 items-center justify-center rounded-full bg-charcoal-green px-5 text-sm font-bold text-white shadow-lg shadow-green-950/20"
        >
          Shop CampRinse
        </a>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
