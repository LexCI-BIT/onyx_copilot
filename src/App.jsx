import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import JobSprintSection from './components/JobSprintSection'
import MentorSection from './components/MentorSection'
import ChatSupportSection from './components/ChatSupportSection'
import TestimonialsSection from './components/TestimonialsSection'
import FAQSection from './components/FAQSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import ContactPopup from './components/ContactPopup'
import TermsAndConditions from './pages/TermsAndConditions'
import PrivacyPolicy from './pages/PrivacyPolicy'

function HomePage({ onOpenContact }) {
  return (
    <>
      <Navbar onOpenContact={onOpenContact} />
      <HeroSection onOpenContact={onOpenContact} />
      <FeaturesSection />
      <MentorSection />
      <JobSprintSection />
      <ChatSupportSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection onOpenContact={onOpenContact} />
      <Footer />
    </>
  )
}

export default function App() {
  const [contactOpen, setContactOpen] = useState(false)
  const openContact = () => setContactOpen(true)
  const closeContact = () => setContactOpen(false)

  return (
    <div className="min-h-screen bg-[#08080F]">
      <Routes>
        <Route path="/" element={<HomePage onOpenContact={openContact} />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <ContactPopup isOpen={contactOpen} onClose={closeContact} />
    </div>
  )
}
