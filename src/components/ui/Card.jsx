import { motion } from 'framer-motion'

export default function Card({
  children,
  className = '',
  hover = true,
  gradient = false,
  ...props
}) {
  return (
    <motion.div
      className={`
        glass-card p-6
        ${hover ? 'card-hover' : ''}
        ${gradient ? 'gradient-border' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function GlassCard({ children, className = '', ...props }) {
  return (
    <motion.div
      className={`glass rounded-xl p-6 ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function FeatureCard({ icon: Icon, title, description, className = '' }) {
  return (
    <Card className={`group ${className}`}>
      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent-500/20 to-purple-500/20 flex items-center justify-center mb-4 group-hover:from-accent-500/30 group-hover:to-purple-500/30 transition-all duration-300">
        <Icon className="w-6 h-6 text-accent-400" />
      </div>
      <h3 className="text-lg font-semibold text-dark-100 mb-2">{title}</h3>
      <p className="text-dark-400 text-sm leading-relaxed">{description}</p>
    </Card>
  )
}
