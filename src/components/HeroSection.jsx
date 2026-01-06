import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Phone, MessageSquare, Calendar, Bell, Check, ArrowRight } from 'lucide-react'
import Button from './ui/Button'
import DemoBookingModal from './DemoBookingModal'

const trustBadges = [
  'No credit card required',
  'Setup in 5 minutes',
  'Cancel anytime',
]

export default function HeroSection() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center pt-20 hero-bg overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="gradient-orb w-96 h-96 bg-accent-500/30 -top-48 -left-48" />
      <div className="gradient-orb w-96 h-96 bg-purple-500/20 -bottom-48 -right-48" style={{ animationDelay: '2s' }} />

      <div className="container-custom relative z-10 px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/10 border border-accent-500/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" />
              <span className="text-accent-400 text-sm font-medium">AI-Powered SMS Automation</span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-100 leading-tight mb-6">
              Never Miss a{' '}
              <span className="text-gradient">Patient Call</span>{' '}
              Again
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-dark-400 mb-8 max-w-xl mx-auto lg:mx-0">
              SmileDesk instantly texts back missed callers, captures patient details, and books appointments — 24/7, automatically.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button size="lg" href="https://dentist-saasapp.vercel.app/register">
                Start 14-Day Free Trial
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => setIsDemoModalOpen(true)}>
                <Calendar className="w-5 h-5" />
                Book 5-Min Demo
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={badge}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2 text-dark-400 text-sm"
                >
                  <Check className="w-4 h-4 text-success-400" />
                  {badge}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Hero Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <HeroAnimation />
          </motion.div>
        </div>
      </div>

      {/* Demo Booking Modal */}
      <DemoBookingModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </section>
  )
}

function HeroAnimation() {
  return (
    <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto px-4 sm:px-0">
      {/* Main Phone Mockup */}
      <motion.div
        className="phone-mockup p-3 sm:p-4 aspect-[9/16] max-h-[420px] sm:max-h-[500px] mx-auto"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Phone Screen */}
        <div className="w-full h-full bg-dark-950 rounded-2xl overflow-hidden relative">
          {/* Status Bar */}
          <div className="flex items-center justify-between px-4 py-2 text-xs text-dark-400">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <div className="w-4 h-2 border border-dark-400 rounded-sm">
                <div className="w-3/4 h-full bg-success-400 rounded-sm" />
              </div>
            </div>
          </div>

          {/* Incoming Call UI */}
          <div className="flex flex-col items-center justify-center h-full pb-20">
            {/* Caller Avatar */}
            <div className="relative mb-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent-500 to-purple-500 flex items-center justify-center">
                <Phone className="w-10 h-10 text-white" />
              </div>
              {/* Pulse Rings */}
              <div className="absolute inset-0 rounded-full border-2 border-accent-400 pulse-ring" />
              <div className="absolute inset-0 rounded-full border-2 border-accent-400 pulse-ring" style={{ animationDelay: '0.5s' }} />
            </div>

            <h3 className="text-dark-100 text-xl font-semibold mb-1">Missed Call</h3>
            <p className="text-dark-400 text-sm mb-8">New Patient</p>

            {/* SmileDesk SMS Sent */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.3 }}
              className="glass-card px-4 py-3 flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-success-500 flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-dark-100 text-sm font-medium">SmileDesk SMS Sent</p>
                <p className="text-dark-400 text-xs">Engaging patient automatically...</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Floating Notification Cards - Visible on all screens, optimized for mobile */}
      <motion.div
        className="absolute -right-2 sm:-right-2 lg:-right-4 top-8 sm:top-20 glass-card p-1.5 sm:p-2 md:p-3 shadow-xl scale-75 sm:scale-90 md:scale-100 origin-top-right"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.4 }}
      >
        <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
          <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-lg bg-accent-500/20 flex items-center justify-center">
            <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-accent-400" />
          </div>
          <div>
            <p className="text-dark-100 text-[10px] sm:text-xs md:text-sm font-medium">New Lead Captured</p>
            <p className="text-dark-400 text-[8px] sm:text-[10px] md:text-xs">Sarah Johnson • Cleaning</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute -left-2 sm:-left-4 lg:-left-8 top-0 sm:top-8 glass-card p-1.5 sm:p-2 md:p-3 shadow-xl scale-75 sm:scale-90 md:scale-100 origin-top-left"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2, duration: 0.4 }}
      >
        <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
          <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-lg bg-success-500/20 flex items-center justify-center">
            <Calendar className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-success-400" />
          </div>
          <div>
            <p className="text-dark-100 text-[10px] sm:text-xs md:text-sm font-medium">Appointment Booked</p>
            <p className="text-dark-400 text-[8px] sm:text-[10px] md:text-xs">Tomorrow at 2:00 PM</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute right-0 sm:right-6 lg:right-8 bottom-4 sm:bottom-16 glass-card p-1.5 sm:p-2 md:p-3 shadow-xl scale-75 sm:scale-90 md:scale-100 origin-bottom-right"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.4 }}
      >
        <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
          <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
            <Bell className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-purple-400" />
          </div>
          <div>
            <p className="text-dark-100 text-[10px] sm:text-xs md:text-sm font-medium">SMS Sent to You</p>
            <p className="text-dark-400 text-[8px] sm:text-[10px] md:text-xs">Patient details delivered</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
