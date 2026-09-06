import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TopPicksSection } from './components/TopPicksSection';
import { PopularServicesSection } from './components/PopularServicesSection';
import { MoreServicesSection } from './components/MoreServicesSection';
import { HowItWorks } from './components/HowItWorks';
import { DecisionSection } from './components/DecisionSection';
import { FinalCTA } from './components/FinalCTA';
import { AffiliateDisclosure } from './components/AffiliateDisclosure';
import { Footer } from './components/Footer';
import { MobileStickyCTA } from './components/MobileStickyCTA';
import { LinkTesterModal } from './components/LinkTesterModal';

export default function App() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAFB] text-[#111827] selection:bg-emerald-100 selection:text-emerald-900 font-sans">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* Section 1: TOP PICKS (Cards 1, 2, 3) */}
        <TopPicksSection />

        {/* Section 2: POPULAR SERVICES (Cards 4, 5, 6) */}
        <PopularServicesSection />

        {/* Section 3: MORE SERVICES (Cards 7, 8, 9) */}
        <MoreServicesSection />

        {/* Section 4: HOW IT WORKS (Steps 1, 2, 3) */}
        <HowItWorks />

        {/* Section 5: COMPARISON / DECISION SECTION */}
        <DecisionSection />

        {/* Section 6: FINAL CTA (Dark Section) */}
        <FinalCTA />

        {/* Visible Affiliate Disclosure */}
        <AffiliateDisclosure />
      </main>

      {/* Footer */}
      <Footer onOpenSettings={() => setIsSettingsOpen(true)} />

      {/* Mobile Sticky CTA Bar */}
      <MobileStickyCTA />

      {/* Affiliate Link Inspector & Live Analytics Modal */}
      <LinkTesterModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />
    </div>
  );
}
