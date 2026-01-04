import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Accordion from './ui/Accordion'

const faqs = [
  {
    question: "How does SmileDesk detect missed calls?",
    answer: "SmileDesk integrates with your phone system to detect when calls go unanswered. When a patient calls and you can't pick up, our system automatically triggers an SMS to that caller within seconds. No call forwarding needed — it works with your existing setup."
  },
  {
    question: "What does the AI text message say?",
    answer: "The AI sends a friendly, personalized message from your practice. It introduces itself, apologizes for missing the call, and asks how it can help. The conversation flows naturally via text — patients can share their name, reason for calling, and preferred appointment times."
  },
  {
    question: "What if someone has an emergency?",
    answer: "Our AI is trained to recognize dental emergencies and urgent situations. It will immediately direct patients to call 911 for medical emergencies, or provide your emergency contact number for after-hours dental emergencies. You can customize these protocols to match your practice's needs."
  },
  {
    question: "Can I customize the messages?",
    answer: "Absolutely! You can personalize every message with your practice name, tone, and specific instructions. You can also customize the questions the AI asks, the information it collects, and how it responds to different situations. We'll help you set it up during onboarding."
  },
  {
    question: "How fast do I get notified?",
    answer: "Instantly. The moment a patient responds to the SMS, you'll receive a notification with all the captured information — name, phone number, reason for calling, and preferred appointment times. You can also view everything in real-time on your dashboard."
  },
  {
    question: "Is there a contract?",
    answer: "No contracts, ever. SmileDesk is month-to-month, and you can cancel anytime with no penalties or hidden fees. We believe in earning your business every month. Start with a 14-day free trial — no credit card required — and see the difference for yourself."
  },
]

export default function FAQSection() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  return (
    <section className="section-padding relative overflow-hidden" id="faq">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900/50 to-dark-950" />

      <div className="container-custom relative z-10" ref={containerRef}>
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-100 mb-6">
            Questions?{' '}
            <span className="text-gradient">We've Got Answers</span>
          </h2>
          <p className="text-lg text-dark-400">
            Everything you need to know about SmileDesk.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion items={faqs} />
        </motion.div>

        {/* Still have questions */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-dark-400">
            Still have questions?{' '}
            <a
              href="mailto:hello@smiledesk.ai"
              className="text-accent-400 hover:text-accent-300 transition-colors"
            >
              Email us at hello@smiledesk.ai
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
