import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "We were missing 20+ calls a month. Now we capture every single one. SmileDesk paid for itself in the first week.",
    author: "Dr. Sarah Chen",
    role: "Owner, Bright Smile Dental",
    avatar: "SC",
    rating: 5,
  },
  {
    quote: "Patients love getting an instant text back. They reply with their info and we follow up when we're free. So simple.",
    author: "Dr. Michael Torres",
    role: "Family Dental Care",
    avatar: "MT",
    rating: 5,
  },
  {
    quote: "Setup took 10 minutes. Should have done this years ago. My only regret is all the patients we lost before finding SmileDesk.",
    author: "Dr. Emily Park",
    role: "Park Dental Studio",
    avatar: "EP",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-950" />
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="container-custom relative z-10" ref={containerRef}>
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-100 mb-6">
            Trusted by{' '}
            <span className="text-gradient">Dental Practices</span>
          </h2>
          <p className="text-lg text-dark-400">
            Join hundreds of dental practices that never miss a patient call.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <div className="glass-card p-6 h-full flex flex-col">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-accent-500/50" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-dark-200 leading-relaxed mb-6 flex-grow">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-dark-700/50">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-500 to-purple-500 flex items-center justify-center text-white font-semibold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="text-dark-100 font-medium">{testimonial.author}</div>
                    <div className="text-dark-500 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Banner */}
        <motion.div
          className="mt-16 glass-card p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">500+</div>
              <div className="text-dark-400 text-sm">Dental Practices</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">50K+</div>
              <div className="text-dark-400 text-sm">Leads Captured</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">98%</div>
              <div className="text-dark-400 text-sm">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">$2M+</div>
              <div className="text-dark-400 text-sm">Revenue Generated</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
