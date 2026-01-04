import { useEffect } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ProblemSection from './components/ProblemSection'
import HowItWorksSection from './components/HowItWorksSection'
import FeaturesSection from './components/FeaturesSection'
import DashboardPreview from './components/DashboardPreview'
import PricingSection from './components/PricingSection'
import TestimonialsSection from './components/TestimonialsSection'
import FAQSection from './components/FAQSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

export default function App() {
  // Smooth scroll polyfill for older browsers
  useEffect(() => {
    // Handle anchor links with smooth scroll
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]')
      if (target) {
        const href = target.getAttribute('href')
        if (href && href !== '#') {
          e.preventDefault()
          const element = document.querySelector(href)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)
    return () => document.removeEventListener('click', handleAnchorClick)
  }, [])

  return (
    <div className="min-h-screen bg-dark-950 text-dark-100">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Hero - Above the fold */}
        <HeroSection />

        {/* Problem - Agitate the pain */}
        <ProblemSection />

        {/* How It Works - Show the solution */}
        <HowItWorksSection />

        {/* Features - Build value */}
        <FeaturesSection />

        {/* Dashboard Preview - Social proof through product */}
        <DashboardPreview />

        {/* Pricing - Make decision easy */}
        <PricingSection />

        {/* Testimonials - Social proof */}
        <TestimonialsSection />

        {/* FAQ - Handle objections */}
        <FAQSection />

        {/* Final CTA - Close the sale */}
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
