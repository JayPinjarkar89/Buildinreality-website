import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { TechnologySection } from "@/components/technology-section"
import { CTASection } from "@/components/cta-section"
import { ChallengeSection } from "@/components/challenge-section"
import { MatrixBanner } from "@/components/matrix-banner"
import { Ecosystem } from "@/components/ecosystem-section"
import { RealitySystem } from "@/components/reality-system-section"
import { BuildForYou } from "@/components/build-for-you-section"
// import WhoWeEmpower from "@/components/WhoWeEmpower"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ChallengeSection />
      <MatrixBanner />
      <FeaturesSection />
      <Ecosystem />
      {/* <RealitySystem /> */}
      {/* <TechnologySection /> */}
      <BuildForYou />
      {/* <WhoWeEmpower /> */}
      <CTASection />
    </main>
  )
}
