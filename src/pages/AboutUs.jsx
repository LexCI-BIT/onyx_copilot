import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function AboutUs() {
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
          className="max-w-4xl mx-auto"
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
              ✦ Our Story
            </motion.div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
              About <span className="shimmer-text">Us</span>
            </h1>
            <p className="text-zinc-500 text-sm mt-4 uppercase tracking-wider">
              ONYX Copilot — Onyx EduTech Private Limited
            </p>
            <p className="text-zinc-400 text-base mt-6 max-w-2xl mx-auto leading-relaxed">
              Helping students take their first big step into their careers.
            </p>
          </div>

          {/* About Content */}
          <div className="legal-content space-y-10">

            <Section number="1" title="Who We Are">
              <p>
                Onyx CoPilot is built by Onyx Edutech Private Limited, a Hyderabad-based company focused on helping
                students take their first big step into their careers.
              </p>
              <p>
                We know how exhausting job hunting can be, especially when you're a student. You spend hours tweaking
                your resume, filling out the same details on every portal, and applying to role after role, often
                without hearing back. A lot of good candidates get filtered out before a human ever sees their
                profile, simply because their resume wasn't formatted the way applicant tracking systems expect.
              </p>
              <p>We built Onyx CoPilot to take that load off your shoulders.</p>
            </Section>

            <Section number="2" title="What Onyx CoPilot Does">
              <p>Onyx CoPilot is your job-search assistant. It:</p>
              <ul>
                <li>
                  Builds ATS-ready resumes, structured so applicant tracking systems can actually read them and your
                  profile doesn't get rejected on format alone
                </li>
                <li>
                  Auto-applies to jobs on LinkedIn and other job platforms on your behalf, so you can reach more
                  opportunities without spending your whole day filling out forms
                </li>
              </ul>
              <p>
                That frees up your time for what really matters: learning new skills, preparing for interviews, and
                growing as a professional.
              </p>
            </Section>

            <Section number="3" title="Our Mission">
              <p>
                Our mission is simple: make job hunting easier, faster, and fairer for students. Every student deserves
                a real shot at the opportunities they're qualified for, and we want Onyx CoPilot to be the tool that
                gets them there.
              </p>
            </Section>

            <Section number="4" title="Meet the Founder">
              <p>
                Onyx CoPilot is led by Jaya Surya, founder of Onyx Edutech Private Limited. Having seen firsthand how
                much time and effort students pour into job applications, Jaya Surya set out to build a tool that does
                the repetitive work for them, so they can focus on becoming the best candidate they can be.
              </p>
            </Section>

          </div>
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

/* Reusable section component */
function Section({ number, title, children }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4 }}
      className="group"
    >
      <div className="flex items-baseline gap-3 mb-4">
        <span className="text-violet-500/70 font-mono text-sm font-bold shrink-0">
          {number.padStart(2, '0')}
        </span>
        <h2 className="text-xl md:text-2xl font-bold text-white group-hover:text-violet-300 transition-colors duration-300">
          {title}
        </h2>
      </div>
      <div className="pl-9 md:pl-11 border-l border-violet-500/10 legal-section-content">
        {children}
      </div>
    </motion.section>
  )
}
