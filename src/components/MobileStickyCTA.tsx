import React, { useState, useEffect } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { getAffiliateLinks, trackAffiliateClick } from '../config/affiliateLinks';

export const MobileStickyCTA: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const links = getAffiliateLinks();

  useEffect(() => {
    const handleScroll = () => {
      if (dismissed) return;
      // Show sticky CTA after scrolling 350px past the initial hero view
      if (window.scrollY > 350) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dismissed]);

  if (!visible || dismissed) return null;

  const handleClick = () => {
    trackAffiliateClick('Mobile Sticky Bar', 'Find a Meta Ads Expert →', links.main);
  };

  return (
    <aside
      id="mobile-sticky-cta-bar"
      aria-label="Quick Action"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-white/95 backdrop-blur-md border-t border-gray-200/90 shadow-2xl animate-in slide-in-from-bottom duration-200"
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href={links.main}
          id="sticky-mobile-cta-button"
          target="_blank"
          rel="nofollow sponsored noopener"
          onClick={handleClick}
          className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#10B981] active:bg-[#059669] text-white font-bold text-sm shadow-sm min-h-[48px]"
        >
          <span>Find a Meta Ads Expert</span>
          <ArrowRight className="w-4 h-4" />
        </a>
        <button
          type="button"
          id="dismiss-sticky-cta"
          aria-label="Dismiss quick action"
          onClick={() => setDismissed(true)}
          className="p-2.5 rounded-xl text-gray-400 hover:text-gray-600 active:bg-gray-100 min-h-[48px] min-w-[44px] flex items-center justify-center"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </aside>
  );
};
