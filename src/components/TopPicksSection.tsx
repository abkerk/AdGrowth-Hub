import React from 'react';
import { topPicksCards } from '../data/servicesData';
import { ServiceCard } from './ServiceCard';
import { Sparkles } from 'lucide-react';

export const TopPicksSection: React.FC = () => {
  return (
    <section id="top-picks" className="py-14 md:py-20 bg-white border-b border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#10B981]/10 text-[#059669] text-xs font-bold uppercase tracking-wider mb-3.5">
            <Sparkles className="w-3.5 h-3.5 text-[#10B981]" />
            <span>TOP PICKS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
            Start With Our Top Recommendations
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Three services to explore if you're looking for help with forms, lead generation, or paid social advertising.
          </p>
        </div>

        {/* 3 Cards Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {topPicksCards.map((card) => (
            <ServiceCard key={card.id} card={card} featured={true} />
          ))}
        </div>

      </div>
    </section>
  );
};
