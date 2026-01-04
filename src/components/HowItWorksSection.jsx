import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { PhoneForwarded, Bot, BellRing, ArrowRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: PhoneForwarded,
    title: 'Missed Call Detected',
    description: 'When a patient calls and you can\'t answer, SmileDesk instantly detects the missed call.',
    color: 'accent',
  },
  {
    number: '02',
    icon: Bot,
    title: 'AI Texts Them Back',
    description: 'Our AI immediately sends a personalized SMS, asking for their name, reason for calling, and preferred appointment times.',
    color: 'purple',
  },
  {
    number: '03',
    icon: BellRing,
    title: 'You Get Notified',
    description: 'Receive instant notifications with patient info, or auto-book directly to your Google Calendar.',
    color: 'success',
  },
]

export default function HowItWorksSection() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  return (
    <section className="section-padding relative overflow-hidden" id="how-it-works">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-950" />
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="container-custom relative z-10" ref={containerRef}>
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-100 mb-6">
            3 Simple Steps to{' '}
            <span className="text-gradient">Never Miss Another Patient</span>
          </h2>
          <p className="text-lg text-dark-400">
            Get set up in under 5 minutes. No technical skills required.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-500/50 via-purple-500/50 to-success-500/50 transform -translate-y-1/2" />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                className="relative"
              >
                {/* Step Card */}
                <div className="glass-card p-8 text-center relative z-10 h-full">
                  {/* Step Number */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${
                    step.color === 'accent' ? 'bg-accent-500' :
                    step.color === 'purple' ? 'bg-purple-500' :
                    'bg-success-500'
                  }`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Step Label */}
                  <div className={`text-sm font-bold mb-4 ${
                    step.color === 'accent' ? 'text-accent-400' :
                    step.color === 'purple' ? 'text-purple-400' :
                    'text-success-400'
                  }`}>
                    STEP {step.number}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-dark-100 mb-4">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-dark-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow (Mobile & Tablet) */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center py-4">
                    <ArrowRight className="w-6 h-6 text-dark-600 rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Visual Flow Illustration */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="glass-card p-8 md:p-12">
            <div className="grid md:grid-cols-4 gap-6 items-center">
              {/* Phone Ringing */}
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-dark-800 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-dark-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <p className="text-dark-400 text-sm">Patient calls</p>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center justify-center">
                <ArrowRight className="w-8 h-8 text-accent-500" />
              </div>

              {/* AI Texts */}
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-accent-500/20 mx-auto mb-4 flex items-center justify-center">
                  <Bot className="w-8 h-8 text-accent-400" />
                </div>
                <p className="text-dark-400 text-sm">SmileDesk texts caller</p>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center justify-center">
                <ArrowRight className="w-8 h-8 text-purple-500" />
              </div>

              {/* Notification */}
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-purple-500/20 mx-auto mb-4 flex items-center justify-center">
                  <BellRing className="w-8 h-8 text-purple-400" />
                </div>
                <p className="text-dark-400 text-sm">You get notified</p>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center justify-center">
                <ArrowRight className="w-8 h-8 text-success-500" />
              </div>

              {/* Calendar Booked */}
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-success-500/20 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-success-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                    <path d="M9 16l2 2 4-4" />
                  </svg>
                </div>
                <p className="text-dark-400 text-sm">Appointment booked</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
