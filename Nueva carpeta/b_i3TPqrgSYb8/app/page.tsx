import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { DestinationsSection } from "@/components/destinations-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <DestinationsSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
