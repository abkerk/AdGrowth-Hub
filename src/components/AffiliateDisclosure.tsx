import React from 'react';
import { Info, ShieldCheck } from 'lucide-react';

export const AffiliateDisclosure: React.FC = () => {
  return (
    <section id="affiliate-disclosure-section" className="py-10 bg-[#F9FAFB] border-t border-gray-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-5 sm:p-6 rounded-3xl bg-white border border-gray-200/80 shadow-xs">
          <div className="flex items-start gap-3.5">
            <div className="w-8 h-8 rounded-xl bg-[#10B981]/10 text-[#059669] flex items-center justify-center flex-shrink-0 mt-0.5">
              <Info className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">
                  Affiliate Disclosure
                </h3>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#059669] bg-[#10B981]/10 px-2.5 py-0.5 rounded-full">
                  <ShieldCheck className="w-3 h-3" />
                  Independent Platform
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-2.5">
                “Some links on this website are affiliate links. If you click an affiliate link and make a qualifying purchase, we may earn a commission at no additional cost to you.”
              </p>
              <p className="text-xs text-gray-400 leading-relaxed">
                <strong>Notice of Independence:</strong> AdGrowth Hub is an independent recommendation platform. We are not owned, operated, or officially endorsed by Fiverr or Meta Platforms, Inc. All trademarks, logos, and brand names belong to their respective owners. We do not process payments, ask for account passwords, or store personal credentials.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
