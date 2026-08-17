import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function TermsAndConditions() {
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
          <span className="text-violet-400">●</span> Onyx JobCopilot
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
              ✦ Legal
            </motion.div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
              Terms and <span className="shimmer-text">Conditions</span>
            </h1>
            <p className="text-zinc-500 text-sm mt-4 uppercase tracking-wider">
              ONYX Copilot — Onyx EduTech Private Limited
            </p>
          </div>

          {/* Terms Content */}
          <div className="legal-content space-y-10">

            {/* Section 1 */}
            <Section number="1" title="About ONYX Copilot">
              <p>ONYX Copilot is a technology-enabled career assistance platform designed to help users with:</p>
              <ul>
                <li>AI-assisted resume creation and optimization;</li>
                <li>Career guidance;</li>
                <li>Skill-based job matching;</li>
                <li>Job discovery;</li>
                <li>Job application assistance;</li>
                <li>Career recommendations; and</li>
                <li>Other career-development services introduced by Onyx from time to time.</li>
              </ul>
              <p>ONYX EduTech's broader platform provides online learning, personalized learning, AI-based tutoring, assessments, career support, and related educational services.</p>
            </Section>

            {/* Section 2 */}
            <Section number="2" title="Eligibility">
              <p>You must provide accurate information when creating an account and must be legally eligible to use the services under applicable law.</p>
              <p>If you are using the service on behalf of another person or organization, you confirm that you have the authority to do so.</p>
            </Section>

            {/* Section 3 */}
            <Section number="3" title="User Account">
              <p>You are responsible for:</p>
              <ul>
                <li>Providing accurate and complete information;</li>
                <li>Maintaining the confidentiality of your account credentials;</li>
                <li>Keeping your profile information updated;</li>
                <li>All activities conducted through your account; and</li>
                <li>Immediately notifying Onyx of unauthorized access.</li>
              </ul>
              <p>You must not share your account credentials with another person or use another person's account without authorization.</p>
            </Section>

            {/* Section 4 */}
            <Section number="4" title="Resume and Profile Information">
              <p>You are responsible for the accuracy of information provided to ONYX Copilot.</p>
              <p>You must not intentionally provide false, misleading, fraudulent, or impersonated information.</p>
              <p>AI-generated resumes and other career documents should be reviewed by you before submission to an employer.</p>
            </Section>

            {/* Section 5 */}
            <Section number="5" title="AI-Generated Content">
              <p>ONYX Copilot uses AI technologies to provide career-related assistance.</p>
              <p>AI-generated outputs are provided for informational and assistance purposes and may contain inaccuracies, omissions, outdated information, or inappropriate recommendations.</p>
              <p>Onyx does not guarantee that AI-generated content will:</p>
              <ul>
                <li>Be completely accurate;</li>
                <li>Be suitable for every employer or job;</li>
                <li>Guarantee an interview;</li>
                <li>Guarantee employment; or</li>
                <li>Produce any particular career outcome.</li>
              </ul>
              <p>Users remain responsible for reviewing and approving information before submitting it to employers or third parties.</p>
            </Section>

            {/* Section 6 */}
            <Section number="6" title="Job Matching">
              <p>ONYX Copilot may recommend employment opportunities based on information such as skills, education, experience, preferences, location, and other profile information.</p>
              <p>Job recommendations are not guarantees of employment.</p>
              <p>The availability, requirements, compensation, location, and status of jobs may change without notice.</p>
              <p>Onyx does not guarantee that every job displayed on the platform will remain available or that an employer will respond to an application.</p>
            </Section>

            {/* Section 7 */}
            <Section number="7" title="Job Application Assistance">
              <p>Where ONYX Copilot provides application assistance, the User authorizes the platform to perform the actions expressly permitted by the User.</p>
              <p>The User is responsible for reviewing the information supplied for applications and ensuring that it is truthful and accurate.</p>
              <p>Users must not use the platform to submit fraudulent applications, impersonate another person, misrepresent qualifications, or violate the terms of an employer or third-party job platform.</p>
            </Section>

            {/* Section 8 */}
            <Section number="8" title="User Conduct">
              <p>You agree not to:</p>
              <ul>
                <li>Use ONYX Copilot for unlawful purposes;</li>
                <li>Provide false or misleading information;</li>
                <li>Impersonate another person;</li>
                <li>Attempt to gain unauthorized access to accounts or systems;</li>
                <li>Interfere with the operation of the platform;</li>
                <li>Upload malicious code or harmful content;</li>
                <li>Scrape, copy, reproduce, or commercially exploit platform content without permission;</li>
                <li>Reverse engineer or attempt to circumvent platform security;</li>
                <li>Use the service for spam, harassment, fraud, or abuse;</li>
                <li>Submit applications containing knowingly false information; or</li>
                <li>Violate the rights of Onyx, employers, recruiters, or other users.</li>
              </ul>
            </Section>

            {/* Section 9 */}
            <Section number="9" title="Intellectual Property">
              <p>The ONYX Copilot platform, including its software, interface, branding, logos, designs, text, graphics, systems, and underlying technology, is owned by or licensed to Onyx EduTech and is protected by applicable intellectual-property laws.</p>
              <p>Except as expressly permitted, users may not copy, modify, distribute, reproduce, sell, license, reverse engineer, or commercially exploit any portion of the platform.</p>
            </Section>

            {/* Section 10 */}
            <Section number="10" title="User-Provided Content">
              <p>You retain ownership of information and content that you lawfully provide to ONYX Copilot, subject to the rights necessary for Onyx to operate the service.</p>
              <p>By submitting content, you grant Onyx the necessary permission to process, store, reproduce, modify, transmit, and use that content to provide the requested services.</p>
              <p>This may include processing your resume, career profile, preferences, and application-related information to provide AI-powered career services.</p>
            </Section>

            {/* Section 11 */}
            <Section number="11" title="Third-Party Platforms">
              <p>ONYX Copilot may interact with third-party websites, job portals, employers, recruiters, payment providers, AI providers, or other services.</p>
              <p>Onyx does not control third-party platforms and is not responsible for their content, availability, policies, security, hiring decisions, or practices.</p>
              <p>Your use of third-party services may be subject to their separate terms and policies.</p>
            </Section>

            {/* Section 12 */}
            <Section number="12" title="Payments and Subscriptions">
              <p>If ONYX Copilot offers paid plans, subscriptions, credits, or other paid services, applicable pricing and payment terms will be displayed before purchase.</p>
              <p>Unless otherwise specified, payments may be processed through third-party payment providers.</p>
              <p>Any applicable refund, cancellation, renewal, or subscription conditions will be communicated at the time of purchase or through the relevant service terms.</p>
            </Section>

            {/* Section 13 */}
            <Section number="13" title="Service Availability">
              <p>Onyx will make reasonable efforts to keep ONYX Copilot available and functional.</p>
              <p>However, the service may occasionally be unavailable because of:</p>
              <ul>
                <li>Maintenance;</li>
                <li>Technical issues;</li>
                <li>Security incidents;</li>
                <li>Third-party service interruptions;</li>
                <li>Network problems;</li>
                <li>Updates; or</li>
                <li>Circumstances beyond Onyx's reasonable control.</li>
              </ul>
              <p>We do not guarantee uninterrupted or error-free availability.</p>
            </Section>

            {/* Section 14 */}
            <Section number="14" title="Disclaimer">
              <p>ONYX Copilot is a career assistance and technology platform.</p>
              <p>Use of the platform does not create an employment relationship between the User and Onyx.</p>
              <p>Onyx does not guarantee:</p>
              <ul>
                <li>Employment;</li>
                <li>Interviews;</li>
                <li>Job offers;</li>
                <li>Salary levels;</li>
                <li>Employer responses;</li>
                <li>Selection by recruiters;</li>
                <li>Accuracy of third-party job listings; or</li>
                <li>Any specific career outcome.</li>
              </ul>
            </Section>

            {/* Section 15 */}
            <Section number="15" title="Limitation of Liability">
              <p>To the maximum extent permitted by applicable law, Onyx EduTech will not be responsible for indirect, incidental, special, consequential, or loss-of-profit damages arising from the use of or inability to use ONYX Copilot.</p>
              <p>Nothing in these Terms is intended to exclude liability that cannot legally be excluded under applicable law.</p>
            </Section>

            {/* Section 16 */}
            <Section number="16" title="Suspension and Termination">
              <p>Onyx may suspend, restrict, or terminate access to ONYX Copilot where reasonably necessary, including where a user:</p>
              <ul>
                <li>Violates these Terms;</li>
                <li>Misuses the platform;</li>
                <li>Engages in fraudulent activity;</li>
                <li>Attempts unauthorized access;</li>
                <li>Provides materially false information; or</li>
                <li>Creates a security or legal risk.</li>
              </ul>
              <p>Users may discontinue use of the platform at any time, subject to any applicable subscription or contractual obligations.</p>
            </Section>

            {/* Section 17 */}
            <Section number="17" title="Privacy">
              <p>Your use of ONYX Copilot is also governed by the <Link to="/privacy-policy" className="text-violet-400 hover:text-violet-300 underline underline-offset-2 transition-colors">ONYX Copilot Privacy Policy</Link>, which explains how personal information is collected, processed, stored, and used.</p>
            </Section>

            {/* Section 18 */}
            <Section number="18" title="Changes to These Terms">
              <p>Onyx may modify these Terms from time to time.</p>
              <p>Updated Terms will be made available through the platform. Continued use of ONYX Copilot after the effective date of updated Terms may constitute acceptance of the revised Terms, subject to applicable law.</p>
            </Section>

            {/* Section 19 */}
            <Section number="19" title="Governing Law and Jurisdiction">
              <p>These Terms shall be governed by the applicable laws of India.</p>
              <p>Subject to applicable law, disputes arising in connection with these Terms or the use of ONYX Copilot shall be subject to the jurisdiction of the competent courts in Hyderabad, Telangana, India.</p>
            </Section>

            {/* Section 20 */}
            <Section number="20" title="Contact Information">
              <div className="glass-card rounded-2xl p-6 md:p-8 mt-4">
                <p className="font-semibold text-white mb-3">Onyx EduTech Private Limited</p>
                <p className="text-zinc-400 leading-relaxed">
                  Ayyappa Society, Mega Hills, Madhapur,<br />
                  Hyderabad, Telangana – 500081, India
                </p>
                <div className="mt-4 space-y-2">
                  <p className="text-zinc-400">
                    <span className="text-violet-400 mr-2">Email:</span>
                    <a href="mailto:Info@onyxedutech.com" className="text-violet-300 hover:text-violet-200 transition-colors underline underline-offset-2">
                      Info@onyxedutech.com
                    </a>
                  </p>
                  <p className="text-zinc-400">
                    <span className="text-violet-400 mr-2">Phone:</span>
                    <a href="tel:+918977220902" className="text-violet-300 hover:text-violet-200 transition-colors underline underline-offset-2">
                      +91 8977220902
                    </a>
                  </p>
                </div>
              </div>
            </Section>

          </div>
        </motion.div>
      </div>

      {/* Minimal Footer */}
      <footer className="bg-[#08080F] border-t border-white/[0.06] py-8 px-8">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-500 uppercase tracking-wider">
            © 2024 Onyx JobCopilot. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="text-sm text-zinc-500 hover:text-violet-400 transition-colors duration-200">
              Privacy Policy
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
