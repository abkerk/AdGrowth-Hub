import React from 'react';
import { ArrowRight, CheckCircle, ExternalLink } from 'lucide-react';
import { getAffiliateLinks, trackAffiliateClick } from '../config/affiliateLinks';

export const FinalCTA: React.FC = () => {
  const links = getAffiliateLinks();

  const handleCtaClick = () => {
    trackAffiliateClick('Final CTA Section', 'Find an Advertising Expert →', links.main);
  };

  return (
    <section id="final-cta-section" className="py-14 md:py-20 bg-[#F9FAFB] border-b border-gray-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bento Large Dark Card */}
        <div className="bg-gray-900 rounded-3xl p-8 sm:p-12 md:p-16 border border-gray-800 text-white text-center relative overflow-hidden shadow-lg">
          {/* Background ambient lighting */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-64 bg-[#10B981]/15 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="max-w-3xl mx-auto relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-[#10B981] text-xs font-bold uppercase tracking-wider mb-5">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Start Scaling Your Meta Ads</span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
              Ready to Improve Your Advertising?
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
              Explore freelance experts who can help with Facebook Ads, Instagram Ads, Meta campaigns, lead generation, and advertising management.
            </p>

            {/* Primary CTA Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
              <a
                href={links.main}
                id="final-primary-cta"
                target="_blank"
                rel="nofollow sponsored noopener"
                onClick={handleCtaClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-base font-bold text-white bg-[#10B981] hover:bg-[#059669] rounded-xl shadow-md transition-all min-h-[50px]"
              >
                <span>Find an Advertising Expert</span>
                <ArrowRight className="w-4 h-4" />
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>

            {/* Small text */}
            <p className="text-xs text-gray-400 max-w-md mx-auto">
              You can review each freelancer's offer before deciding whether it's right for your project.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
