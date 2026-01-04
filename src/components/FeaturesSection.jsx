import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Bot,
  BellRing,
  Calendar,
  MessageCircle,
  LayoutDashboard,
  Clock
} from 'lucide-react'
import { FeatureCard } from './ui/Card'

const features = [
  {
    icon: Bot,
    title: 'Smart SMS Response',
    description: 'AI-powered text conversations that feel personal and human. Patients get instant engagement.',
  },
  {
    icon: BellRing,
    title: 'Instant Notifications',
    description: 'Get alerts the moment a patient responds. Never wait to follow up with a hot lead.',
  },
  {
    icon: Calendar,
    title: 'Google Calendar Sync',
    description: 'Auto-book appointments directly to your calendar. No double-booking, no manual entry.',
  },
  {
    icon: MessageCircle,
    title: 'Conversation History',
    description: 'Review every SMS thread. Understand patient needs and improve your follow-up process.',
  },
  {
    icon: LayoutDashboard,
    title: 'Lead Dashboard',
    description: 'Track and manage all captured leads in one place. See who called, when, and why.',
  },
  {
    icon: Clock,
    title: 'Works 24/7',
    description: 'After hours, weekends, holidays — SmileDesk never sleeps. Capture missed calls around the clock.',
  },
]

export default function FeaturesSection() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  return (
    <section className="section-padding relative overflow-hidden" id="features">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900/30 to-dark-950" />
      <div className="gradient-orb w-[500px] h-[500px] bg-accent-500/10 top-0 left-1/2 -translate-x-1/2" />

      <div className="container-custom relative z-10" ref={containerRef}>
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-100 mb-6">
            Everything You Need,{' '}
            <span className="text-gradient">Nothing You Don't</span>
          </h2>
          <p className="text-lg text-dark-400">
            Powerful features designed specifically for dental practices. Simple to use, impossible to outgrow.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                className="h-full"
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="text-dark-400 mb-6">
            And much more coming soon: Custom greetings, multi-location support, analytics dashboard...
          </p>
          <a
            href="#pricing"
            className="text-accent-400 hover:text-accent-300 font-medium inline-flex items-center gap-2 transition-colors"
          >
            See all features
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
