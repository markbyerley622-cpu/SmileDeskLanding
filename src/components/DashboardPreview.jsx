import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Phone,
  User,
  Calendar,
  Clock,
  MessageSquare,
  TrendingUp,
  CheckCircle,
  XCircle,
  PhoneIncoming
} from 'lucide-react'

export default function DashboardPreview() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-950" />
      <div className="absolute inset-0 bg-radial-gradient" />

      <div className="container-custom relative z-10" ref={containerRef}>
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-100 mb-6">
            Your Command Center for{' '}
            <span className="text-gradient">Patient Calls</span>
          </h2>
          <p className="text-lg text-dark-400">
            Everything you need to manage leads, track performance, and never miss an opportunity.
          </p>
        </motion.div>

        {/* Dashboard Mockup */}
        <motion.div
          className="relative max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-accent-500/20 blur-3xl rounded-3xl" />

          {/* Dashboard */}
          <div className="dashboard-mockup relative overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-dark-700">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-500 to-purple-500 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <span className="font-semibold text-dark-100">SmileDesk</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-success-500/20 text-success-400 text-sm">
                  <span className="w-2 h-2 rounded-full bg-success-400 animate-pulse" />
                  Active
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Stats Row */}
              <div className="grid grid-cols-4 gap-4 mb-6">
                <StatCard
                  label="Total Calls"
                  value="127"
                  change="+12%"
                  icon={PhoneIncoming}
                />
                <StatCard
                  label="Leads Captured"
                  value="89"
                  change="+18%"
                  icon={User}
                />
                <StatCard
                  label="Appointments"
                  value="34"
                  change="+24%"
                  icon={Calendar}
                />
                <StatCard
                  label="Conversion Rate"
                  value="38%"
                  change="+5%"
                  icon={TrendingUp}
                />
              </div>

              {/* Recent Calls Table */}
              <div className="bg-dark-900/50 rounded-xl border border-dark-700/50 overflow-hidden">
                <div className="px-4 py-3 border-b border-dark-700/50">
                  <h3 className="font-medium text-dark-200">Recent Calls</h3>
                </div>
                <div className="divide-y divide-dark-700/50">
                  <CallRow
                    name="Sarah Johnson"
                    reason="New patient - Cleaning"
                    time="2 min ago"
                    status="new"
                  />
                  <CallRow
                    name="Michael Chen"
                    reason="Tooth pain - Emergency"
                    time="15 min ago"
                    status="contacted"
                  />
                  <CallRow
                    name="Emily Davis"
                    reason="Whitening consultation"
                    time="1 hour ago"
                    status="booked"
                  />
                  <CallRow
                    name="Robert Wilson"
                    reason="Insurance question"
                    time="2 hours ago"
                    status="completed"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Floating Annotations */}
          <motion.div
            className="absolute -right-4 md:-right-16 top-20 glass-card p-3 shadow-xl max-w-[180px]"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.8 }}
          >
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 rounded bg-accent-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-accent-400 text-xs font-bold">1</span>
              </div>
              <p className="text-dark-300 text-xs">See all calls at a glance with real-time updates</p>
            </div>
          </motion.div>

          <motion.div
            className="absolute -left-4 md:-left-16 top-1/2 glass-card p-3 shadow-xl max-w-[180px]"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 1 }}
          >
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 rounded bg-success-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-success-400 text-xs font-bold">2</span>
              </div>
              <p className="text-dark-300 text-xs">Track conversion rates and appointment bookings</p>
            </div>
          </motion.div>

          <motion.div
            className="absolute -right-4 md:-right-16 bottom-24 glass-card p-3 shadow-xl max-w-[180px]"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 1.2 }}
          >
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 rounded bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-purple-400 text-xs font-bold">3</span>
              </div>
              <p className="text-dark-300 text-xs">One-click callback and lead management</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function StatCard({ label, value, change, icon: Icon }) {
  return (
    <div className="bg-dark-800/50 rounded-lg p-4 border border-dark-700/50">
      <div className="flex items-center justify-between mb-2">
        <Icon className="w-4 h-4 text-dark-500" />
        <span className="text-success-400 text-xs font-medium">{change}</span>
      </div>
      <div className="text-2xl font-bold text-dark-100 mb-1">{value}</div>
      <div className="text-dark-500 text-xs">{label}</div>
    </div>
  )
}

function CallRow({ name, reason, time, status }) {
  const statusStyles = {
    new: { bg: 'bg-accent-500/20', text: 'text-accent-400', label: 'New' },
    contacted: { bg: 'bg-yellow-500/20', text: 'text-yellow-400', label: 'Contacted' },
    booked: { bg: 'bg-success-500/20', text: 'text-success-400', label: 'Booked' },
    completed: { bg: 'bg-dark-600/50', text: 'text-dark-400', label: 'Completed' },
  }

  const style = statusStyles[status]

  return (
    <div className="flex items-center justify-between px-4 py-3 hover:bg-dark-800/30 transition-colors">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-dark-700 flex items-center justify-center">
          <User className="w-4 h-4 text-dark-400" />
        </div>
        <div>
          <div className="text-dark-200 text-sm font-medium">{name}</div>
          <div className="text-dark-500 text-xs">{reason}</div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-dark-500 text-xs flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {time}
        </span>
        <span className={`px-2 py-1 rounded text-xs font-medium ${style.bg} ${style.text}`}>
          {style.label}
        </span>
      </div>
    </div>
  )
}
