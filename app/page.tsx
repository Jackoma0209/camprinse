import { AnnouncementBar } from "@/components/announcement-bar";
import { FAQAccordion } from "@/components/faq-accordion";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { LifestyleBenefits } from "@/components/lifestyle-benefits";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
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
        <ProblemSection />
        <SolutionSteps />
        <ProductDetail />
        <PricingSection />
        <LifestyleBenefits />
        <UseCasesSection />
        <SocialProofPlaceholder />
        <FAQAccordion />
        <SafetySection />
        <FinalCTA />
      </main>
      <Footer />
      <MobileStickyCta />
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
