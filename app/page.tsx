import { MolecularBackground } from "@/components/molecular-background"
import { NavHeader } from "@/components/nav-header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { CategoryHighlight } from "@/components/category-highlight"
import { ProductShowcase } from "@/components/product-showcase"
import { HowItWorks } from "@/components/how-it-works"
import { ReviewsSection } from "@/components/reviews-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <>
      <MolecularBackground />
      <div className="relative z-10">
        <NavHeader />
        <main>
          <HeroSection />
          <AboutSection />
          <CategoryHighlight />
          <ProductShowcase />
          <HowItWorks />
          <ReviewsSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  )
}
