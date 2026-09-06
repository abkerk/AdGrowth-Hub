import React from 'react';
import { ArrowRight, CheckCircle2, Layers, Users, Filter, Sparkles, Compass, ShieldCheck } from 'lucide-react';
import { getAffiliateLinks, trackAffiliateClick } from '../config/affiliateLinks';

export const HeroSection: React.FC = () => {
  const links = getAffiliateLinks();

  const handlePrimaryCta = () => {
    trackAffiliateClick('Hero Section', 'Find a Meta Ads Expert →', links.main);
  };

  const handleScrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById('top-picks');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero-section"
      className="relative pt-6 pb-14 md:pt-12 md:pb-20 overflow-hidden bg-[#F9FAFB] border-b border-gray-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: Hero Text Content & Bento Process */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6 text-left">
            
            {/* Small Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#10B981]/10 text-[#059669] text-xs font-bold uppercase tracking-wider w-fit">
              🚀 Meta Ads Experts
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-gray-900">
              Turn Your Ad Ideas Into{' '}
              <span className="text-[#10B981]">Better Campaigns.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-gray-600 max-w-md">
              Find experienced freelancers for Facebook Ads, Instagram Ads, Meta campaigns, lead generation, and management.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              <a
                href={links.main}
                id="hero-primary-cta"
                target="_blank"
                rel="nofollow sponsored noopener"
                onClick={handlePrimaryCta}
                className="inline-flex items-center justify-center gap-2.5 bg-gray-900 hover:bg-black text-white px-7 py-3.5 rounded-xl font-semibold shadow-md transition-all active:scale-[0.99] min-h-[50px]"
              >
                <span>Find a Meta Ads Expert</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#top-picks"
                id="hero-secondary-cta"
                onClick={handleScrollToServices}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 px-6 py-3.5 rounded-xl font-semibold transition-all active:scale-[0.99] min-h-[50px]"
              >
                <Compass className="w-4 h-4 text-gray-500" />
                <span>Explore Services</span>
              </a>
            </div>

            {/* Trust Notice */}
            <div className="flex items-center gap-2 text-xs text-gray-500 pt-1">
              <ShieldCheck className="w-4 h-4 text-[#10B981] flex-shrink-0" />
              <span>Independent recommendations • Verified Fiverr gig reviews</span>
            </div>

            {/* Bento Mini Steps Box */}
            <div className="pt-5 border-t border-gray-200">
              <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-3">
                How It Works
              </p>
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white p-3 rounded-2xl border border-gray-200/70 shadow-2xs">
                  <div className="text-xs font-bold text-gray-900">1. Choose</div>
                  <div className="text-[10px] text-gray-500 mt-0.5">Select a service</div>
                </div>
                <div className="bg-white p-3 rounded-2xl border border-gray-200/70 shadow-2xs">
                  <div className="text-xs font-bold text-gray-900">2. Explore</div>
                  <div className="text-[10px] text-gray-500 mt-0.5">Review the offer</div>
                </div>
                <div className="bg-white p-3 rounded-2xl border border-gray-200/70 shadow-2xs">
                  <div className="text-xs font-bold text-gray-900">3. Hired</div>
                  <div className="text-[10px] text-gray-500 mt-0.5">Start growing</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Bento Grid Tile Showcase */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Bento Tile 1: Top Pick - Google Forms */}
            <div className="bg-white p-5 sm:p-6 rounded-3xl border border-gray-200/80 shadow-xs flex flex-col justify-between hover:border-[#10B981] hover:shadow-md transition-all group relative">
              <a
                href={links.top1}
                target="_blank"
                rel="nofollow sponsored noopener"
                onClick={() => trackAffiliateClick('Hero Bento: Google Forms', 'Find an Expert →', links.top1)}
                className="absolute inset-0 z-10 rounded-3xl"
                aria-label="Google Forms & Surveys"
              />
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="text-3xl">📋</span>
                  <span className="text-[10px] bg-amber-100 text-amber-700 px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">
                    Top Pick
                  </span>
                </div>
                <h3 className="font-bold text-base sm:text-lg text-gray-900 leading-tight mb-1.5 group-hover:text-[#059669] transition-colors">
                  Google Forms & Surveys
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed line-clamp-2">
                  Professional forms for feedback, registrations, lead qualification, and customer surveys.
                </p>
              </div>
              <span className="text-[#10B981] text-xs sm:text-sm font-bold mt-4 flex items-center gap-1 group-hover:gap-2 transition-all">
                Find an Expert &rarr;
              </span>
            </div>

            {/* Bento Tile 2: Top Pick - Lead Gen */}
            <div className="bg-white p-5 sm:p-6 rounded-3xl border border-gray-200/80 shadow-xs flex flex-col justify-between hover:border-[#10B981] hover:shadow-md transition-all group relative">
              <a
                href={links.top2}
                target="_blank"
                rel="nofollow sponsored noopener"
                onClick={() => trackAffiliateClick('Hero Bento: Lead Gen', 'Explore Leads →', links.top2)}
                className="absolute inset-0 z-10 rounded-3xl"
                aria-label="Lead Generation & Appointments"
              />
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="text-3xl">🎯</span>
                  <span className="text-[10px] bg-amber-100 text-amber-700 px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">
                    Top Pick
                  </span>
                </div>
                <h3 className="font-bold text-base sm:text-lg text-gray-900 leading-tight mb-1.5 group-hover:text-[#059669] transition-colors">
                  Lead Gen & Appointments
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed line-clamp-2">
                  Attract qualified leads, booked appointments, and customer inquiries with targeted ad funnels.
                </p>
              </div>
              <span className="text-[#10B981] text-xs sm:text-sm font-bold mt-4 flex items-center gap-1 group-hover:gap-2 transition-all">
                Explore Leads &rarr;
              </span>
            </div>

            {/* Bento Tile 3: Top Pick - Meta Ads */}
            <div className="bg-white p-5 sm:p-6 rounded-3xl border border-gray-200/80 shadow-xs flex flex-col justify-between hover:border-[#10B981] hover:shadow-md transition-all group relative">
              <a
                href={links.top3}
                target="_blank"
                rel="nofollow sponsored noopener"
                onClick={() => trackAffiliateClick('Hero Bento: Facebook & IG Ads', 'Find Ads Expert →', links.top3)}
                className="absolute inset-0 z-10 rounded-3xl"
                aria-label="Facebook & Instagram Ads"
              />
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="text-3xl">📣</span>
                  <span className="text-[10px] bg-amber-100 text-amber-700 px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">
                    Top Pick
                  </span>
                </div>
                <h3 className="font-bold text-base sm:text-lg text-gray-900 leading-tight mb-1.5 group-hover:text-[#059669] transition-colors">
                  Facebook & Instagram Ads
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed line-clamp-2">
                  Complete setup and optimization for Meta ad campaigns, lookalikes, and creatives.
                </p>
              </div>
              <span className="text-[#10B981] text-xs sm:text-sm font-bold mt-4 flex items-center gap-1 group-hover:gap-2 transition-all">
                Find Ads Expert &rarr;
              </span>
            </div>

            {/* Bento Tile 4: Dark Contrast Bento Tile - Ads Management */}
            <div className="bg-gray-900 p-5 sm:p-6 rounded-3xl flex flex-col justify-between text-white border border-gray-800 shadow-sm relative group hover:border-gray-700 transition-all">
              <a
                href={links.middle1}
                target="_blank"
                rel="nofollow sponsored noopener"
                onClick={() => trackAffiliateClick('Hero Bento: Ads Management', 'Explore All →', links.middle1)}
                className="absolute inset-0 z-10 rounded-3xl"
                aria-label="Facebook Ads Management"
              />
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl">📊</span>
                  <span className="text-[10px] bg-emerald-500/20 text-[#10B981] px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider border border-emerald-500/30">
                    Ongoing
                  </span>
                </div>
                <h3 className="font-bold text-base sm:text-lg leading-tight mb-1.5 text-white">
                  Ads Management
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed line-clamp-2">
                  Ongoing management and monitoring to ensure your ad spend is deployed effectively.
                </p>
              </div>
              <div className="w-full py-2.5 px-4 bg-white/10 group-hover:bg-[#10B981] group-hover:text-white rounded-xl text-xs font-bold transition-all text-center mt-4">
                Explore All &rarr;
              </div>
            </div>

            {/* Bento Tile 5: Setup & Optimization */}
            <div className="bg-white p-5 rounded-3xl border border-gray-200/80 shadow-xs flex flex-col justify-between hover:border-[#10B981] transition-all group relative">
              <a
                href={links.middle2}
                target="_blank"
                rel="nofollow sponsored noopener"
                onClick={() => trackAffiliateClick('Hero Bento: Setup & Optimization', 'Optimize Now →', links.middle2)}
                className="absolute inset-0 z-10 rounded-3xl"
                aria-label="Setup & Optimization"
              />
              <div>
                <span className="text-2xl mb-2.5 block">⚙️</span>
                <h3 className="font-bold text-sm text-gray-900 leading-tight">Setup & Optimization</h3>
                <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                  Pixel setup, CAPI configuration, audit, and technical fixes.
                </p>
              </div>
              <span className="text-[#10B981] text-xs font-bold mt-3 flex items-center gap-1 group-hover:gap-1.5 transition-all">
                Optimize Now &rarr;
              </span>
            </div>

            {/* Bento Tile 6: Social Media Advertising */}
            <div className="bg-white p-5 rounded-3xl border border-gray-200/80 shadow-xs flex flex-col justify-between hover:border-[#10B981] transition-all group relative">
              <a
                href={links.middle3}
                target="_blank"
                rel="nofollow sponsored noopener"
                onClick={() => trackAffiliateClick('Hero Bento: Social Media Advertising', 'View Services →', links.middle3)}
                className="absolute inset-0 z-10 rounded-3xl"
                aria-label="Social Media Advertising"
              />
              <div>
                <span className="text-2xl mb-2.5 block">📱</span>
                <h3 className="font-bold text-sm text-gray-900 leading-tight">Social Media Advertising</h3>
                <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                  Targeted ad creatives, copy variations, and platform growth.
                </p>
              </div>
              <span className="text-[#10B981] text-xs font-bold mt-3 flex items-center gap-1 group-hover:gap-1.5 transition-all">
                View Services &rarr;
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
