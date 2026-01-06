import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Calendar, Loader2 } from 'lucide-react'
import Button from './ui/Button'
import { supabase } from '../lib/supabase'

export default function DemoBookingModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    practiceName: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('Form submitted, supabase client:', supabase ? 'exists' : 'NULL')
    setIsSubmitting(true)

    if (!supabase) {
      console.error('Supabase client not initialized - check env vars')
      alert('Configuration error. Please contact support.')
      setIsSubmitting(false)
      return
    }

    const { data, error } = await supabase
      .from('demo_requests')
      .insert([{
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        practice_name: formData.practiceName
      }])
      .select()

    console.log('Supabase response:', { data, error })
    setIsSubmitting(false)

    if (error) {
      console.error('Error submitting demo request:', error)
      alert('Something went wrong. Please try again.')
      return
    }

    setIsSubmitted(true)
  }

  const handleClose = () => {
    onClose()
    // Reset form after animation
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', practiceName: '' })
      setIsSubmitted(false)
    }, 300)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="glass-card w-full max-w-md p-6 relative">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-dark-400 hover:text-dark-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {!isSubmitted ? (
                <>
                  {/* Header */}
                  <div className="text-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-accent-500/20 flex items-center justify-center mx-auto mb-4">
                      <Calendar className="w-6 h-6 text-accent-400" />
                    </div>
                    <h3 className="text-xl font-bold text-dark-100 mb-2">
                      Book a 5-Minute Demo
                    </h3>
                    <p className="text-dark-400 text-sm">
                      See how SmileDesk can transform your practice
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-dark-300 mb-1">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-dark-100 placeholder-dark-500 focus:outline-none focus:border-accent-500 transition-colors"
                        placeholder="Dr. John Smith"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-dark-300 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-dark-100 placeholder-dark-500 focus:outline-none focus:border-accent-500 transition-colors"
                        placeholder="john@dentalclinic.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-dark-300 mb-1">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-dark-100 placeholder-dark-500 focus:outline-none focus:border-accent-500 transition-colors"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-dark-300 mb-1">
                        Practice Name
                      </label>
                      <input
                        type="text"
                        name="practiceName"
                        value={formData.practiceName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-dark-100 placeholder-dark-500 focus:outline-none focus:border-accent-500 transition-colors"
                        placeholder="Smile Dental Clinic"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Booking...
                        </>
                      ) : (
                        <>
                          <Calendar className="w-5 h-5" />
                          Book My Demo
                        </>
                      )}
                    </Button>
                  </form>
                </>
              ) : (
                /* Success State */
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-success-500/20 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-success-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-dark-100 mb-2">
                    Demo Booked!
                  </h3>
                  <p className="text-dark-400 mb-6">
                    We'll reach out within 24 hours to schedule your demo.
                  </p>
                  <Button variant="outline" onClick={handleClose}>
                    Close
                  </Button>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
