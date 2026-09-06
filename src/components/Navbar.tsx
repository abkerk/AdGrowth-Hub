import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, TrendingUp } from 'lucide-react';
import { getAffiliateLinks, trackAffiliateClick } from '../config/affiliateLinks';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [links, setLinks] = useState(getAffiliateLinks());

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    const updateLinks = () => setLinks(getAffiliateLinks());

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('affiliate-links-updated', updateLinks);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('affiliate-links-updated', updateLinks);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCtaClick = () => {
    trackAffiliateClick('Navigation Bar', 'Find an Expert →', links.main);
  };

  return (
    <header
      id="main-navigation"
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-gray-200'
          : 'bg-white border-b border-gray-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a
            href="#"
            id="brand-logo"
            className="flex items-center gap-2.5 group text-decoration-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded-lg p-1"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#10B981] text-white flex items-center justify-center font-bold text-base shadow-xs group-hover:bg-[#059669] transition-colors">
              A
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg sm:text-xl tracking-tight text-gray-900 leading-tight">
                AdGrowth Hub
              </span>
              <span className="text-[11px] text-gray-500 font-medium tracking-wide hidden sm:inline">
                Meta Ads Expert Finder
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600" aria-label="Main Navigation">
            <a
              href="#top-picks"
              id="nav-link-top-picks"
              onClick={(e) => handleNavClick(e, 'top-picks')}
              className="hover:text-gray-900 transition-colors py-2 cursor-pointer"
            >
              Top Picks
            </a>
            <a
              href="#popular"
              id="nav-link-popular"
              onClick={(e) => handleNavClick(e, 'popular')}
              className="hover:text-gray-900 transition-colors py-2 cursor-pointer"
            >
              Popular
            </a>
            <a
              href="#more-services"
              id="nav-link-more"
              onClick={(e) => handleNavClick(e, 'more-services')}
              className="hover:text-gray-900 transition-colors py-2 cursor-pointer"
            >
              More Services
            </a>
            <a
              href="#how-it-works"
              id="nav-link-how-it-works"
              onClick={(e) => handleNavClick(e, 'how-it-works')}
              className="hover:text-gray-900 transition-colors py-2 cursor-pointer"
            >
              How It Works
            </a>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={links.main}
              id="nav-cta-button"
              target="_blank"
              rel="nofollow sponsored noopener"
              onClick={handleCtaClick}
              className="bg-[#10B981] hover:bg-[#059669] text-white px-5 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-xs transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2"
            >
              <span>Find an Expert</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={links.main}
              id="mobile-header-quick-cta"
              target="_blank"
              rel="nofollow sponsored noopener"
              onClick={handleCtaClick}
              className="inline-flex items-center text-xs font-bold text-[#059669] bg-[#10B981]/10 px-3 py-1.5 rounded-full active:bg-[#10B981]/20"
            >
              Find Expert →
            </a>
            <button
              type="button"
              id="mobile-menu-toggle"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-gray-700 hover:bg-gray-100 active:bg-gray-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="md:hidden border-t border-gray-200 bg-white shadow-xl animate-in slide-in-from-top-2 duration-200"
        >
          <div className="px-4 pt-3 pb-6 space-y-1.5">
            <a
              href="#top-picks"
              id="mobile-nav-top-picks"
              onClick={(e) => handleNavClick(e, 'top-picks')}
              className="flex items-center justify-between px-3 py-3 rounded-xl text-base font-semibold text-gray-800 hover:bg-gray-50 active:bg-[#10B981]/10 active:text-[#059669] min-h-[48px]"
            >
              <span>Top Picks</span>
              <span className="text-xs bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded-full">Top 3</span>
            </a>
            <a
              href="#popular"
              id="mobile-nav-popular"
              onClick={(e) => handleNavClick(e, 'popular')}
              className="flex items-center justify-between px-3 py-3 rounded-xl text-base font-semibold text-gray-800 hover:bg-gray-50 active:bg-[#10B981]/10 active:text-[#059669] min-h-[48px]"
            >
              <span>Popular Services</span>
            </a>
            <a
              href="#more-services"
              id="mobile-nav-more"
              onClick={(e) => handleNavClick(e, 'more-services')}
              className="flex items-center justify-between px-3 py-3 rounded-xl text-base font-semibold text-gray-800 hover:bg-gray-50 active:bg-[#10B981]/10 active:text-[#059669] min-h-[48px]"
            >
              <span>More Services</span>
            </a>
            <a
              href="#how-it-works"
              id="mobile-nav-how-it-works"
              onClick={(e) => handleNavClick(e, 'how-it-works')}
              className="flex items-center justify-between px-3 py-3 rounded-xl text-base font-semibold text-gray-800 hover:bg-gray-50 active:bg-[#10B981]/10 active:text-[#059669] min-h-[48px]"
            >
              <span>How It Works</span>
            </a>

            <div className="pt-4 border-t border-gray-100">
              <a
                href={links.main}
                id="mobile-nav-cta"
                target="_blank"
                rel="nofollow sponsored noopener"
                onClick={handleCtaClick}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 text-base font-bold text-white bg-[#10B981] hover:bg-[#059669] active:bg-emerald-800 rounded-full shadow-sm min-h-[48px]"
              >
                <span>Find an Expert →</span>
              </a>
              <p className="mt-2 text-center text-xs text-gray-500">
                Independent recommendations • Fiverr affiliate offers
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
