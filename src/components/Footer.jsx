import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#08080F] border-t border-white/[0.06] py-14 px-8 md:px-16 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Top Row: Brand + Links */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
          {/* Brand + Contact */}
          <div className="text-center md:text-left">
            <p className="font-bold text-white text-lg flex items-center justify-center md:justify-start gap-1.5">
              <span className="text-violet-400">●</span> Onyx JobCopilot
            </p>

            {/* Contact Info */}
            <div className="mt-4 space-y-2">
              <p className="text-sm text-zinc-400 flex items-center justify-center md:justify-start gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-violet-400 shrink-0">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a href="mailto:Info@onyxedutech.com" className="hover:text-violet-400 transition-colors">
                  Info@onyxedutech.com
                </a>
              </p>
              <p className="text-sm text-zinc-400 flex items-center justify-center md:justify-start gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-violet-400 shrink-0">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                <a href="tel:+918977220902" className="hover:text-violet-400 transition-colors">
                  +91 8977220902
                </a>
              </p>
              <p className="text-sm text-zinc-400 flex items-start justify-center md:justify-start gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-violet-400 shrink-0 mt-0.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Ayyappa Society, Mega Hills, Madhapur,<br />Hyderabad, Telangana – 500081, India</span>
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-8 flex-wrap justify-center items-start pt-1">
            <Link
              to="/privacy-policy"
              className="text-sm text-zinc-500 hover:text-violet-400 transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-and-conditions"
              className="text-sm text-zinc-500 hover:text-violet-400 transition-colors duration-200"
            >
              Terms of Service
            </Link>
            <a
              href="https://www.linkedin.com/company/skoolsbridge/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-500 hover:text-violet-400 transition-colors duration-200 flex items-center gap-1.5"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        {/* Bottom Divider + Copyright */}
        <div className="border-t border-white/[0.04] mt-10 pt-6 text-center">
          <p className="text-xs text-zinc-500 uppercase tracking-wider">
            © 2026 Onyx JobCopilot
          </p>
        </div>
      </div>
    </footer>
  )
}
