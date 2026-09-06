import React from 'react';
import {
  ClipboardList,
  Target,
  Megaphone,
  BarChart3,
  Settings,
  Smartphone,
  TrendingUp,
  Crosshair,
  Rocket,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { ServiceCardItem } from '../types';
import { getAffiliateLinks, trackAffiliateClick } from '../config/affiliateLinks';

interface ServiceCardProps {
  card: ServiceCardItem;
  featured?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ card, featured = false }) => {
  const links = getAffiliateLinks();
  const affiliateUrl = links[card.affiliateKey] || links.main;

  const handleClick = () => {
    trackAffiliateClick(card.title, card.buttonText, affiliateUrl);
  };

  // Render proper icon based on iconName
  const renderLucideIcon = () => {
    const className = "w-5 h-5";
    switch (card.iconName) {
      case 'ClipboardList':
        return <ClipboardList className={className} />;
      case 'Target':
        return <Target className={className} />;
      case 'Megaphone':
        return <Megaphone className={className} />;
      case 'BarChart3':
        return <BarChart3 className={className} />;
      case 'Settings':
        return <Settings className={className} />;
      case 'Smartphone':
        return <Smartphone className={className} />;
      case 'TrendingUp':
        return <TrendingUp className={className} />;
      case 'Crosshair':
        return <Crosshair className={className} />;
      case 'Rocket':
        return <Rocket className={className} />;
      default:
        return <TrendingUp className={className} />;
    }
  };

  return (
    <div
      id={`service-card-${card.id}`}
      className={`group relative flex flex-col justify-between rounded-3xl bg-white border transition-all duration-200 hover:-translate-y-1 focus-within:ring-2 focus-within:ring-[#10B981] ${
        featured
          ? 'border-gray-200 hover:border-[#10B981] shadow-sm hover:shadow-md'
          : 'border-gray-200/80 hover:border-[#10B981] shadow-xs hover:shadow-sm'
      }`}
    >
      {/* Clickable entire card anchor overlay */}
      <a
        href={affiliateUrl}
        id={`link-${card.id}`}
        target="_blank"
        rel="nofollow sponsored noopener"
        onClick={handleClick}
        aria-label={`${card.title}: ${card.buttonText}`}
        className="absolute inset-0 z-10 rounded-3xl focus:outline-none"
      >
        <span className="sr-only">{card.title} - {card.buttonText}</span>
      </a>

      {/* Card Content */}
      <div className="p-6 sm:p-7">
        {/* Top bar with Icon and Optional Badge */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-colors ${
              featured
                ? 'bg-[#10B981]/10 text-[#059669] group-hover:bg-[#10B981]/20'
                : 'bg-gray-100 text-gray-700 group-hover:bg-[#10B981]/10 group-hover:text-[#059669]'
            }`}>
              {renderLucideIcon()}
            </div>
            <span className="text-2xl" role="img" aria-label={card.title}>
              {card.emojiIcon}
            </span>
          </div>

          {card.badge && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-amber-100 text-amber-700">
              {card.badge}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2.5 group-hover:text-[#059669] transition-colors">
          {card.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-500 leading-relaxed">
          {card.description}
        </p>
      </div>

      {/* Card Action Footer */}
      <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-1">
        <div className={`w-full py-3 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-150 ${
          featured
            ? 'bg-[#10B981] text-white group-hover:bg-[#059669] group-hover:shadow-xs'
            : 'bg-gray-100 text-gray-800 group-hover:bg-[#10B981] group-hover:text-white'
        }`}>
          <span>{card.buttonText}</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          <ExternalLink className="w-3.5 h-3.5 opacity-60 ml-0.5" />
        </div>
      </div>
    </div>
  );
};
