import { LpNavbar1 } from "@/components/pro-blocks/landing-page/lp-navbars/lp-navbar-1";
import { HeroSection2 } from "@/components/pro-blocks/landing-page/hero-sections/hero-section-2";
import { LogoSection10 } from "@/components/pro-blocks/landing-page/logo-sections/logo-section-7";
import TestimonialsSection1 from "@/components/pro-blocks/landing-page/testimonials-sections/testimonials-section-1";
import { BentoGrid6 } from "@/components/pro-blocks/landing-page/bento-grids/bento-grid-6";
import { FeatureSection9 } from "@/components/pro-blocks/landing-page/feature-sections/feature-section-9";
import { StatsSection4 } from "@/components/pro-blocks/landing-page/stats-sections/stats-section-4";
import { PricingSection3 } from "@/components/pro-blocks/landing-page/pricing-sections/pricing-section-3";
import { FaqSection2 } from "@/components/pro-blocks/landing-page/faq-sections/faq-section-2";
import { Footer1 } from "@/components/pro-blocks/landing-page/footers/footer-1";
import { HomepageIntegrationGrid } from "@/components/homepage-integration-grid";
import { HomepageStorySections } from "@/components/homepage-story-sections";
import { HomepageBlogSection } from "@/components/homepage-blog-section";

export default function Page() {
  return (
    <main>
      <LpNavbar1 />
      <HeroSection2 />
      <LogoSection10 />
      <TestimonialsSection1
        quote="Priworth helped us turn a complex product idea into a dependable platform our customers could use from day one."
        authorName="David Park"
        authorRole="Engineering Manager at TechCorp"
        avatarSrc="/DavidPark.png"
      />
      <BentoGrid6 />
      <FeatureSection9 />
      <StatsSection4 />
      <HomepageIntegrationGrid />
      <HomepageStorySections />
      <TestimonialsSection1
        quote="The team brought senior engineering discipline to every decision. We moved from prototype to a product our customers rely on."
        authorName="Monica Kurt"
        authorRole="Project Manager at TechStar"
        avatarSrc="/MonicaKurt.png"
      />
      <HomepageBlogSection />
      <PricingSection3 />
      <FaqSection2 />
      <Footer1 />
    </main>
  );
}
