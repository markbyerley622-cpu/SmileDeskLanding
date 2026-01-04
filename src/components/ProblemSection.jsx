import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { PhoneMissed, DollarSign, Users } from 'lucide-react'
import Card from './ui/Card'

const painPoints = [
  {
    icon: PhoneMissed,
    title: '30% of calls go unanswered',
    description: 'Front desk is busy, at lunch, or it\'s after hours. Every ring that goes to voicemail is a potential patient lost.',
    stat: '30%',
    color: 'accent',
  },
  {
    icon: DollarSign,
    title: '$3,000+ lifetime value',
    description: 'Each missed new patient costs thousands in cleanings, procedures, and referrals over their lifetime.',
    stat: '$3K+',
    color: 'success',
  },
  {
    icon: Users,
    title: 'Competitors answer faster',
    description: 'When you don\'t answer, patients call the next dentist on the list. Speed to response wins the patient.',
    stat: '2nd',
    color: 'purple',
  },
]

function AnimatedCounter({ end, duration = 2, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [isInView, end, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function ProblemSection() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  return (
    <section className="section-padding relative overflow-hidden" id="problem">
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
            Every Missed Call is a{' '}
            <span className="text-gradient">Lost Patient</span>
          </h2>
          <p className="text-lg text-dark-400">
            Your front desk can't answer every call. But every unanswered ring costs you money.
          </p>
        </motion.div>

        {/* Pain Point Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {painPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <Card className="h-full text-center">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center ${
                  point.color === 'accent' ? 'bg-accent-500/20' :
                  point.color === 'success' ? 'bg-success-500/20' :
                  'bg-purple-500/20'
                }`}>
                  <point.icon className={`w-8 h-8 ${
                    point.color === 'accent' ? 'text-accent-400' :
                    point.color === 'success' ? 'text-success-400' :
                    'text-purple-400'
                  }`} />
                </div>

                {/* Stat */}
                <div className={`text-4xl font-bold mb-3 ${
                  point.color === 'accent' ? 'text-accent-400' :
                  point.color === 'success' ? 'text-success-400' :
                  'text-purple-400'
                }`}>
                  {point.stat}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-dark-100 mb-3">
                  {point.title}
                </h3>

                {/* Description */}
                <p className="text-dark-400 leading-relaxed">
                  {point.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Animated Counter */}
        <motion.div
          className="glass-card p-8 md:p-12 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-dark-400 text-lg mb-4">
            Average dental practice misses
          </p>
          <div className="text-5xl md:text-7xl font-bold text-gradient mb-4">
            <AnimatedCounter end={47} duration={2} /> calls/month
          </div>
          <p className="text-dark-500">
            That's potentially <span className="text-accent-400 font-semibold">$141,000+</span> in lost lifetime patient value
          </p>
        </motion.div>
      </div>
    </section>
  )
}
