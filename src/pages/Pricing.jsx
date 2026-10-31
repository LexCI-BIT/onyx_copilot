import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const GET_STARTED_URL = 'https://leaps-gamma.vercel.app/'

const plans = [
  {
    name: 'Free',
    price: '₹49',
    tagline: null,
    count: '15',
    countNote: '3/day, 15 total',
    features: [
      { label: 'Ashby + Workable', included: true },
      { label: 'Resume export', included: false },
      { label: 'Full score breakdown', included: false },
    ],
    cta: 'Start Free',
    highlighted: false,
  },
  {
    name: 'Starter',
    price: '₹3,000',
    tagline: 'For a focused, active job search.',
    count: '180+',
    countNote: 'per month (5-6/day)',
    features: [
      { label: 'Autonomous apply', included: true },
      { label: 'Full score breakdown', included: true },
      { label: 'Resume export', included: true },
      { label: 'Application status tracking', included: true },
    ],
    cta: 'Get Starter',
    highlighted: true,
  },
  {
    name: 'Core',
    price: '₹5,000',
    tagline: 'Everything in Starter, maxed out.',
    count: '300+',
    countNote: 'per month (10/day)',
    features: [
      { label: 'Rejection intelligence', included: true },
      { label: 'Style preferences', included: true },
    ],
    cta: 'Get Core',
    highlighted: false,
  },
]

export default function Pricing() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-[#08080F]">
      {/* Header Bar */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6 md:px-10 
          bg-[#08080F]/85 backdrop-blur-2xl border-b border-violet-500/15"
      >
        <Link to="/" className="font-extrabold text-white text-lg flex items-center gap-1 flex-shrink-0">
          <span className="text-violet-400">●</span> Onyx Copilot
        </Link>
        <Link
          to="/"
          className="text-sm text-zinc-400 hover:text-violet-400 transition-colors duration-200 flex items-center gap-2"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>
      </motion.nav>

      {/* Content */}
      <div className="pt-28 pb-20 px-6 md:px-10 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Page Title */}
          <div className="mb-14 text-center">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 border border-violet-500/40 bg-violet-500/8 
                rounded-full px-5 py-2 text-xs text-violet-300 uppercase tracking-widest mb-6"
            >
              ✦ Pricing
            </motion.div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
              While you slept, <span className="shimmer-text">Onyx already applied.</span>
            </h1>
            <p className="text-zinc-400 text-base mt-6 max-w-2xl mx-auto leading-relaxed">
              Pay for the tool, not the applications. More applications don't mean more interviews, better matches do.
            </p>
          </div>

          {/* Plans */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`relative flex flex-col rounded-2xl p-8 transition-all duration-300 ${
                  plan.highlighted
                    ? 'border-2 border-violet-500/60 bg-violet-500/10 shadow-[0_0_40px_rgba(139,92,246,0.25)]'
                    : 'glass-card border border-white/[0.08] hover:border-violet-500/30'
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-violet-600 text-white text-[10px] font-semibold uppercase tracking-widest rounded-full px-4 py-1">
                    Most Popular
                  </span>
                )}

                <p className="text-xs font-semibold uppercase tracking-widest text-violet-300">{plan.name}</p>
                <p className="mt-3 flex items-baseline gap-1.5">
                  <span className="text-4xl font-black text-white">{plan.price}</span>
                  <span className="text-zinc-500 text-sm">/mo</span>
                </p>
                {plan.tagline && <p className="mt-3 text-sm text-zinc-400">{plan.tagline}</p>}

                <div className="border-t border-white/[0.06] my-6" />

                <p className="text-[11px] font-semibold uppercase tracking-widest text-zinc-500">You get</p>
                <p className="mt-2 flex items-baseline gap-2">
                  <span className="text-3xl font-black text-white">{plan.count}</span>
                  <span className="text-zinc-400">applications</span>
                </p>
                <p className="mt-1 text-xs text-zinc-500">{plan.countNote}</p>

                <ul className="mt-6 space-y-2.5 flex-1">
                  {plan.features.map((f) => (
                    <li
                      key={f.label}
                      className={`flex items-center gap-2 text-sm ${f.included ? 'text-zinc-300' : 'text-zinc-600'}`}
                    >
                      {f.included ? (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-violet-400 shrink-0">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      ) : (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                          <path d="M7 11V7a5 5 0 0110 0v4" />
                        </svg>
                      )}
                      {f.label}
                    </li>
                  ))}
                </ul>

                <motion.a
                  href={GET_STARTED_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`mt-8 block text-center font-semibold rounded-full px-8 py-3.5 text-sm transition-all duration-300 cursor-pointer ${
                    plan.highlighted
                      ? 'bg-violet-600 hover:bg-violet-500 text-white shadow-lg shadow-violet-600/30 hover:shadow-violet-500/50'
                      : 'border-2 border-violet-500/30 text-violet-200 hover:border-violet-400/50 hover:bg-violet-500/5 hover:text-white'
                  }`}
                >
                  {plan.cta}
                </motion.a>
              </motion.div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-zinc-500">
            All payments are final. See our{' '}
            <Link to="/cancellation-and-refund-policy" className="text-violet-400 hover:text-violet-300 underline underline-offset-2 transition-colors">
              Cancellation &amp; Refund Policy
            </Link>.
          </p>
        </motion.div>
      </div>

      {/* Minimal Footer */}
      <footer className="bg-[#08080F] border-t border-white/[0.06] py-8 px-8">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-500 uppercase tracking-wider">
            © 2026 Onyx Copilot. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/contact-us" className="text-sm text-zinc-500 hover:text-violet-400 transition-colors duration-200">
              Contact Us
            </Link>
            <Link to="/cancellation-and-refund-policy" className="text-sm text-zinc-500 hover:text-violet-400 transition-colors duration-200">
              Refund Policy
            </Link>
            <Link to="/privacy-policy" className="text-sm text-zinc-500 hover:text-violet-400 transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="text-sm text-zinc-500 hover:text-violet-400 transition-colors duration-200">
              Terms & Conditions
            </Link>
            <Link to="/" className="text-sm text-zinc-500 hover:text-violet-400 transition-colors duration-200">
              Home
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
