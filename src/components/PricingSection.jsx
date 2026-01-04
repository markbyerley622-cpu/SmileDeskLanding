import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check, Sparkles, ArrowRight } from 'lucide-react'
import Button from './ui/Button'

const features = [
  'Unlimited AI SMS responses',
  'Instant notifications',
  'Google Calendar integration',
  'Full conversation history',
  'Lead management dashboard',
  '24/7 coverage',
  'Custom message templates',
  'Priority support',
]

const comingSoonFeatures = [
  'Multi-location support',
  'Team member accounts',
  'Advanced analytics',
  'CRM integrations',
]

export default function PricingSection() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  return (
    <section className="section-padding relative overflow-hidden" id="pricing">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900/30 to-dark-950" />

      <div className="container-custom relative z-10" ref={containerRef}>
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-100 mb-6">
            Simple,{' '}
            <span className="text-gradient">Transparent Pricing</span>
          </h2>
          <p className="text-lg text-dark-400">
            One plan with everything you need. No hidden fees, no surprises.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Main Pricing Card */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-accent-500/20 blur-3xl rounded-3xl" />
            <div className="glass-card p-8 relative gradient-border">
              {/* Popular Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="px-4 py-1.5 bg-gradient-to-r from-accent-500 to-purple-500 rounded-full text-white text-sm font-medium flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Most Popular
                </div>
              </div>

              {/* Plan Name */}
              <div className="text-center mb-8 pt-4">
                <h3 className="text-xl font-semibold text-dark-100 mb-2">Professional</h3>
                <p className="text-dark-400 text-sm">Everything you need to capture every missed call</p>
              </div>

              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-bold text-dark-100">$99</span>
                  <span className="text-dark-400">/month</span>
                </div>
                <p className="text-dark-500 text-sm mt-2">Billed monthly. Cancel anytime.</p>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-success-500/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-success-400" />
                    </div>
                    <span className="text-dark-300">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button className="w-full" size="lg" href="https://dentist-saasapp.vercel.app/register">
                Start 14-Day Free Trial
                <ArrowRight className="w-5 h-5" />
              </Button>

              <p className="text-center text-dark-500 text-sm mt-4">
                No credit card required
              </p>
            </div>
          </motion.div>

          {/* Pro Tier Teaser */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="glass-card p-8 h-full opacity-75 relative">
              {/* Coming Soon Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="px-4 py-1.5 bg-dark-700 border border-dark-600 rounded-full text-dark-300 text-sm font-medium">
                  Coming Soon
                </div>
              </div>

              {/* Plan Name */}
              <div className="text-center mb-8 pt-4">
                <h3 className="text-xl font-semibold text-dark-100 mb-2">Enterprise</h3>
                <p className="text-dark-400 text-sm">For multi-location practices</p>
              </div>

              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-bold text-dark-300">$199</span>
                  <span className="text-dark-500">/month</span>
                </div>
                <p className="text-dark-500 text-sm mt-2">Per location</p>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                <p className="text-dark-400 text-sm mb-4">Everything in Professional, plus:</p>
                {comingSoonFeatures.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-dark-700 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-dark-500" />
                    </div>
                    <span className="text-dark-400">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button variant="secondary" className="w-full" size="lg" disabled>
                Join Waitlist
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Money Back Guarantee */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-dark-400 text-sm">
            💰 <span className="text-dark-300">30-day money-back guarantee.</span> Try it risk-free.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
