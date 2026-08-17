import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import emailjs from '@emailjs/browser'

// ── EmailJS Configuration ──
// Replace these with your actual EmailJS credentials:
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'    // From EmailJS dashboard → Email Services
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'  // From EmailJS dashboard → Email Templates
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'     // From EmailJS dashboard → Account → API Keys

const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
}

const modal = {
  hidden: { opacity: 0, scale: 0.85, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', damping: 25, stiffness: 300 },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: 30,
    transition: { duration: 0.25, ease: 'easeIn' },
  },
}

export default function ContactPopup({ isOpen, onClose }) {
  const formRef = useRef(null)
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_phone: '',
    message: '',
  })
  const [sending, setSending] = useState(false)
  const [status, setStatus] = useState(null) // 'success' | 'error' | null

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setStatus(null)

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setFormData({ user_name: '', user_email: '', user_phone: '', message: '' })
      // Auto-close after 2 seconds on success
      setTimeout(() => {
        onClose()
        setStatus(null)
      }, 2000)
    } catch {
      setStatus('error')
    } finally {
      setSending(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center px-4"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
          style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)' }}
        >
          <motion.div
            variants={modal}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-2xl overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(20,20,40,0.97) 0%, rgba(12,12,28,0.98) 100%)',
              border: '1px solid rgba(139,92,246,0.2)',
              boxShadow: '0 0 60px rgba(124,58,237,0.15), 0 25px 50px rgba(0,0,0,0.5)',
            }}
          >
            {/* Decorative top glow */}
            <div
              className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-40 rounded-full opacity-30 pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.6), transparent 70%)' }}
            />

            {/* Close button */}
            <button
              onClick={(e) => { e.stopPropagation(); onClose(); }}
              className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-all duration-200 cursor-pointer z-50"
              aria-label="Close"
              type="button"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Content */}
            <div className="relative z-10 p-8 pt-10">
              <h3 className="text-2xl font-bold text-white text-center mb-1">Get In Touch</h3>
              <p className="text-sm text-zinc-400 text-center mb-8">
                Fill in your details and we'll reach out shortly.
              </p>

              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="text-5xl mb-4">✓</div>
                  <p className="text-lg text-emerald-400 font-semibold">Message Sent!</p>
                  <p className="text-sm text-zinc-400 mt-2">We'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs text-zinc-400 uppercase tracking-widest mb-2 font-medium">
                      Name
                    </label>
                    <input
                      type="text"
                      name="user_name"
                      required
                      value={formData.user_name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-all duration-300 focus:ring-2 focus:ring-violet-500/50"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(139,92,246,0.15)',
                      }}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs text-zinc-400 uppercase tracking-widest mb-2 font-medium">
                      Mail ID
                    </label>
                    <input
                      type="email"
                      name="user_email"
                      required
                      value={formData.user_email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-all duration-300 focus:ring-2 focus:ring-violet-500/50"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(139,92,246,0.15)',
                      }}
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs text-zinc-400 uppercase tracking-widest mb-2 font-medium">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="user_phone"
                      required
                      value={formData.user_phone}
                      onChange={handleChange}
                      placeholder="+91 9876543210"
                      className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-all duration-300 focus:ring-2 focus:ring-violet-500/50"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(139,92,246,0.15)',
                      }}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs text-zinc-400 uppercase tracking-widest mb-2 font-medium">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us what you're looking for..."
                      className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none resize-none transition-all duration-300 focus:ring-2 focus:ring-violet-500/50"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(139,92,246,0.15)',
                      }}
                    />
                  </div>

                  {/* Error message */}
                  {status === 'error' && (
                    <p className="text-red-400 text-sm text-center">
                      Something went wrong. Please try again.
                    </p>
                  )}

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={sending}
                    whileHover={{ scale: sending ? 1 : 1.02 }}
                    whileTap={{ scale: sending ? 1 : 0.98 }}
                    className="w-full bg-violet-600 hover:bg-violet-500 disabled:bg-violet-800 disabled:cursor-not-allowed text-white font-semibold rounded-full py-3.5 text-sm transition-all duration-300 shadow-lg shadow-violet-600/30 hover:shadow-violet-500/50 cursor-pointer mt-2"
                  >
                    {sending ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      'Done ✓'
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
