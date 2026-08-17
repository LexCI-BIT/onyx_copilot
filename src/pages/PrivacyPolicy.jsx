import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function PrivacyPolicy() {
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
              ✦ Your Data Matters
            </motion.div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
              Privacy <span className="shimmer-text">Policy</span>
            </h1>
            <p className="text-zinc-500 text-sm mt-4 uppercase tracking-wider">
              ONYX Copilot — Onyx EduTech Private Limited
            </p>
            <p className="text-zinc-400 text-base mt-6 max-w-2xl mx-auto leading-relaxed">
              ONYX Copilot is designed to assist users with career development, resume creation and optimization, 
              job discovery, job matching, job applications, and career guidance. This Privacy Policy explains how 
              we collect, use, store, process, and protect your information.
            </p>
          </div>

          {/* Privacy Content */}
          <div className="legal-content space-y-10">

            {/* Section 1 */}
            <Section number="1" title="Information We Collect">
              <p>Depending on how you use ONYX Copilot, we may collect the following categories of information:</p>

              <SubSection label="A" title="Account Information">
                <ul>
                  <li>Full name</li>
                  <li>Email address</li>
                  <li>Mobile number</li>
                  <li>Login credentials or authentication information</li>
                  <li>Date of birth or age, where required</li>
                  <li>Location or city</li>
                </ul>
              </SubSection>

              <SubSection label="B" title="Professional and Career Information">
                <ul>
                  <li>Resume/CV information</li>
                  <li>Educational qualifications</li>
                  <li>Skills and technical competencies</li>
                  <li>Work experience</li>
                  <li>Internship experience</li>
                  <li>Certifications</li>
                  <li>Projects</li>
                  <li>Career interests</li>
                  <li>Preferred job roles</li>
                  <li>Preferred work locations</li>
                  <li>Salary expectations</li>
                  <li>Notice period and employment-related information</li>
                </ul>
              </SubSection>

              <SubSection label="C" title="Job Application Information">
                <p>Where the User chooses to use job-search or application features, we may process information relating to:</p>
                <ul>
                  <li>Jobs viewed or selected</li>
                  <li>Job preferences</li>
                  <li>Applications initiated or submitted through the platform</li>
                  <li>Application status</li>
                  <li>Recruiter or employer information</li>
                  <li>Information voluntarily provided to prospective employers</li>
                </ul>
              </SubSection>

              <SubSection label="D" title="Usage and Technical Information">
                <p>We may automatically collect:</p>
                <ul>
                  <li>IP address</li>
                  <li>Browser and device information</li>
                  <li>Operating system</li>
                  <li>Login and access times</li>
                  <li>Pages, features, and services used</li>
                  <li>Diagnostic and technical information</li>
                  <li>Cookies and similar technologies</li>
                </ul>
              </SubSection>

              <SubSection label="E" title="Communications">
                <p>We may retain information contained in communications submitted through customer support, feedback forms, or other communication channels.</p>
              </SubSection>
            </Section>

            {/* Section 2 */}
            <Section number="2" title="How We Use Your Information">
              <p>We may use collected information to:</p>
              <ul>
                <li>Create and maintain your ONYX Copilot account.</li>
                <li>Generate, improve, and personalize resumes and career documents.</li>
                <li>Match your skills and profile with relevant employment opportunities.</li>
                <li>Provide job-search and career guidance services.</li>
                <li>Assist with job applications when you specifically use or authorize such features.</li>
                <li>Provide personalized career recommendations.</li>
                <li>Improve the accuracy and functionality of AI-powered features.</li>
                <li>Provide customer support.</li>
                <li>Send important service-related communications.</li>
                <li>Detect fraud, misuse, unauthorized access, and security threats.</li>
                <li>Maintain platform security and reliability.</li>
                <li>Comply with applicable legal and regulatory requirements.</li>
                <li>Analyze platform usage and improve our products and services.</li>
              </ul>
            </Section>

            {/* Section 3 */}
            <Section number="3" title="AI-Powered Processing">
              <p>ONYX Copilot may use artificial intelligence and machine-learning technologies to analyze information supplied by you and generate recommendations, resumes, job matches, career guidance, or other outputs.</p>
              <p>AI-generated content may contain errors or may not always accurately reflect your qualifications, experience, or suitability for a particular position. Users should review AI-generated information before using or submitting it.</p>
              <p>ONYX Copilot does not guarantee that any AI-generated recommendation, resume, job match, application, interview opportunity, or employment outcome will result in employment.</p>
            </Section>

            {/* Section 4 */}
            <Section number="4" title="Job Applications">
              <p>If you use features that assist with job applications, you authorize ONYX Copilot to process the information necessary to provide those services.</p>
              <p>You are responsible for ensuring that the information contained in your resume, profile, and job applications is accurate and truthful.</p>
              <p>ONYX Copilot does not guarantee that an employer will view, accept, respond to, or select any application.</p>
            </Section>

            {/* Section 5 */}
            <Section number="5" title="Sharing of Information">
              <p>We may share information where reasonably necessary with:</p>
              <ul>
                <li>Employers or recruiters when you choose to apply for or express interest in a position.</li>
                <li>Technology and hosting service providers that help us operate the platform.</li>
                <li>AI, analytics, communication, payment, and security service providers where required to provide the service.</li>
                <li>Professional advisers where reasonably necessary.</li>
                <li>Government authorities or law-enforcement agencies where required by applicable law.</li>
                <li>Successor entities in connection with a merger, acquisition, restructuring, or transfer of business assets.</li>
              </ul>
              <p>We do not intend to sell users' personal information as a standalone commercial product.</p>
            </Section>

            {/* Section 6 */}
            <Section number="6" title="Third-Party Services">
              <p>ONYX Copilot may integrate with or use third-party services, including job platforms, authentication providers, cloud infrastructure, analytics providers, payment processors, communication services, or AI technology providers.</p>
              <p>Such third parties may process information in accordance with their own privacy policies and applicable agreements.</p>
              <p>Users should review the privacy policies of third-party platforms before providing information directly to them.</p>
            </Section>

            {/* Section 7 */}
            <Section number="7" title="Data Security">
              <p>We implement reasonable technical and organizational safeguards designed to protect personal information from unauthorized access, loss, misuse, alteration, or disclosure.</p>
              <p>However, no internet-based service can guarantee absolute security. Users acknowledge that information transmitted electronically may carry inherent security risks.</p>
            </Section>

            {/* Section 8 */}
            <Section number="8" title="Data Retention">
              <p>We retain personal information only for as long as reasonably necessary to:</p>
              <ul>
                <li>Provide the requested services;</li>
                <li>Maintain your account;</li>
                <li>Meet legitimate business requirements;</li>
                <li>Resolve disputes;</li>
                <li>Prevent fraud and misuse; or</li>
                <li>Comply with applicable legal obligations.</li>
              </ul>
              <p>Retention periods may vary depending on the type and purpose of the information.</p>
            </Section>

            {/* Section 9 */}
            <Section number="9" title="User Rights">
              <p>Subject to applicable law, users may have rights to:</p>
              <ul>
                <li>Access their personal information;</li>
                <li>Correct inaccurate information;</li>
                <li>Request deletion of certain information;</li>
                <li>Withdraw consent where processing is based on consent;</li>
                <li>Request information regarding processing of their personal data;</li>
                <li>Raise concerns or complaints regarding privacy practices.</li>
              </ul>
              <p>Requests may be submitted through the contact details provided below.</p>
            </Section>

            {/* Section 10 */}
            <Section number="10" title="Cookies">
              <p>ONYX Copilot may use cookies and similar technologies to maintain sessions, remember preferences, understand platform usage, improve security, and enhance user experience.</p>
              <p>Users may control certain cookie settings through their browser or device settings.</p>
            </Section>

            {/* Section 11 */}
            <Section number="11" title="Children's Privacy">
              <p>ONYX Copilot is intended for individuals who are legally permitted to use the service under applicable law.</p>
              <p>If we become aware that personal information has been collected from a person who is not legally permitted to use the service without appropriate authorization, we may take reasonable steps to delete such information.</p>
            </Section>

            {/* Section 12 */}
            <Section number="12" title="Changes to This Privacy Policy">
              <p>We may update this Privacy Policy from time to time to reflect changes in our services, technology, legal requirements, or business practices.</p>
              <p>The updated policy will be made available through the ONYX Copilot platform. Continued use of the service after an updated policy becomes effective may constitute acceptance of the revised policy to the extent permitted by applicable law.</p>
            </Section>

            {/* Section 13 */}
            <Section number="13" title="Contact Us">
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
              <p className="mt-4">This Privacy Policy should be read together with the <Link to="/terms-and-conditions" className="text-violet-400 hover:text-violet-300 underline underline-offset-2 transition-colors">ONYX Copilot Terms and Conditions</Link>.</p>
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

/* Reusable sub-section component */
function SubSection({ label, title, children }) {
  return (
    <div className="mt-5 mb-4">
      <h3 className="text-base font-semibold text-violet-300 mb-3 flex items-center gap-2">
        <span className="text-violet-500/50 font-mono text-xs">{label}.</span>
        {title}
      </h3>
      <div className="pl-5 border-l border-violet-500/5">
        {children}
      </div>
    </div>
  )
}
