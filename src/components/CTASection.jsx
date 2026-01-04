import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, MessageSquare, CheckCircle } from 'lucide-react'
import Button from './ui/Button'

export default function CTASection() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-950" />
      <div className="absolute inset-0 bg-gradient-to-b from-accent-500/5 via-purple-500/5 to-dark-950" />
      <div className="gradient-orb w-[600px] h-[600px] bg-accent-500/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="container-custom relative z-10" ref={containerRef}>
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Icon */}
          <motion.div
            className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent-500 to-purple-500 flex items-center justify-center mx-auto mb-8"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <MessageSquare className="w-10 h-10 text-white" />
          </motion.div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-100 mb-6">
            Ready to Stop{' '}
            <span className="text-gradient">Missing Patients?</span>
          </h2>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-dark-400 mb-8 max-w-2xl mx-auto">
            Join 500+ dental practices using SmileDesk to capture every call and convert more patients.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {[
              'No credit card required',
              '5-minute setup',
              'Cancel anytime',
            ].map((benefit) => (
              <div key={benefit} className="flex items-center gap-2 text-dark-300">
                <CheckCircle className="w-5 h-5 text-success-400" />
                {benefit}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button size="lg" className="text-lg px-10 py-5" href="#pricing">
              Start Your 14-Day Free Trial
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>

          {/* Contact */}
          <p className="text-dark-500 mt-8">
            Questions? Email us at{' '}
            <a
              href="mailto:hello@smiledesk.ai"
              className="text-accent-400 hover:text-accent-300 transition-colors"
            >
              hello@smiledesk.ai
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
