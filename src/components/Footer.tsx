import React from 'react';
import { TrendingUp, Settings2 } from 'lucide-react';

interface FooterProps {
  onOpenSettings?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenSettings }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="main-footer" className="bg-white border-t border-gray-200/80 pt-12 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-gray-200/80">
          
          {/* Logo & Description */}
          <div className="max-w-md">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-9 h-9 rounded-xl bg-gray-900 text-[#10B981] flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-gray-900">
                AdGrowth Hub
              </span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Independent recommendations for businesses looking for freelance advertising and digital marketing services.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-3" aria-label="Footer Navigation">
            <button
              onClick={() => scrollTo('top-picks')}
              className="text-sm font-semibold text-gray-600 hover:text-[#059669] transition-colors py-1 cursor-pointer"
            >
              Top Picks
            </button>
            <button
              onClick={() => scrollTo('popular')}
              className="text-sm font-semibold text-gray-600 hover:text-[#059669] transition-colors py-1 cursor-pointer"
            >
              Popular Services
            </button>
            <button
              onClick={() => scrollTo('more-services')}
              className="text-sm font-semibold text-gray-600 hover:text-[#059669] transition-colors py-1 cursor-pointer"
            >
              More Services
            </button>
            <button
              onClick={() => scrollTo('how-it-works')}
              className="text-sm font-semibold text-gray-600 hover:text-[#059669] transition-colors py-1 cursor-pointer"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollTo('affiliate-disclosure-section')}
              className="text-sm font-semibold text-gray-600 hover:text-[#059669] transition-colors py-1 cursor-pointer"
            >
              Affiliate Disclosure
            </button>
          </nav>

        </div>

        {/* Bottom Bar with Copyright and Link Config Tool */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2026 AdGrowth Hub. All rights reserved.</p>
          
          <div className="flex items-center gap-4">
            <span>Independent Recommendation Service</span>
            {onOpenSettings && (
              <button
                type="button"
                id="footer-open-link-settings"
                onClick={onOpenSettings}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium transition-colors cursor-pointer"
                title="Configure or test affiliate tracking URLs"
              >
                <Settings2 className="w-3.5 h-3.5" />
                <span>Affiliate Link Settings</span>
              </button>
            )}
          </div>
        </div>

      </div>
    </footer>
  );
};
