import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { CTASection } from "@/components/cta-section"
import { ChallengeSection } from "@/components/challenge-section"
import { MatrixBanner } from "@/components/matrix-banner"
import { Ecosystem } from "@/components/ecosystem-section"
import { BuildForYou } from "@/components/build-for-you-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ChallengeSection />
      <MatrixBanner />
      <FeaturesSection />
      <Ecosystem />
      <BuildForYou />
      <CTASection />
    </main>
  )
}
