import React from 'react';
import { ArrowRight, HelpCircle, UserCheck, Flame, Briefcase } from 'lucide-react';
import { decisionCards } from '../data/servicesData';
import { getAffiliateLinks, trackAffiliateClick } from '../config/affiliateLinks';

export const DecisionSection: React.FC = () => {
  const links = getAffiliateLinks();

  const getDecisionIcon = (index: number) => {
    switch (index) {
      case 0:
        return <UserCheck className="w-5 h-5 text-emerald-600" />;
      case 1:
        return <Flame className="w-5 h-5 text-emerald-600" />;
      case 2:
        return <Briefcase className="w-5 h-5 text-emerald-600" />;
      default:
        return <HelpCircle className="w-5 h-5 text-emerald-600" />;
    }
  };

  return (
    <section id="decision-guide" className="py-16 md:py-24 bg-white border-b border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-200/80 text-gray-700 text-xs font-bold uppercase tracking-wider mb-3.5">
            <HelpCircle className="w-3.5 h-3.5 text-[#10B981]" />
            <span>RECOMMENDATION GUIDE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
            Not Sure Where to Start?
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Pick your primary objective below to find the most fitting advertising freelance service.
          </p>
        </div>

        {/* 3 Bento Recommendation Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {decisionCards.map((box, idx) => {
            const affiliateUrl = links[box.affiliateKey] || links.main;

            return (
              <div
                key={box.title}
                id={`decision-box-${idx + 1}`}
                className="bg-[#F9FAFB] rounded-3xl p-7 border border-gray-200/80 hover:border-[#10B981] hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-11 h-11 rounded-2xl bg-white border border-gray-200/80 flex items-center justify-center mb-5 shadow-2xs group-hover:border-[#10B981]/40 transition-colors">
                    {getDecisionIcon(idx)}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#059669] transition-colors">
                    {box.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                    {box.description}
                  </p>
                </div>

                <a
                  href={affiliateUrl}
                  id={`decision-cta-${idx + 1}`}
                  target="_blank"
                  rel="nofollow sponsored noopener"
                  onClick={() => trackAffiliateClick(box.title, box.buttonText, affiliateUrl)}
                  className="inline-flex items-center justify-center gap-2 py-3 px-5 w-full font-bold text-sm rounded-xl bg-white hover:bg-[#10B981] text-gray-800 hover:text-white border border-gray-200 hover:border-[#10B981] shadow-2xs transition-all min-h-[44px]"
                >
                  <span>{box.buttonText}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
