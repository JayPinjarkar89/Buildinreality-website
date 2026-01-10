import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { TechnologySection } from "@/components/technology-section"
import { CTASection } from "@/components/cta-section"
// import WhoWeEmpower from "@/components/WhoWeEmpower"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <TechnologySection />
      {/* <WhoWeEmpower /> */}
      <CTASection />
    </main>
  )
}
