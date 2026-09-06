import React from 'react';
import { moreServicesCards } from '../data/servicesData';
import { ServiceCard } from './ServiceCard';
import { Compass } from 'lucide-react';

export const MoreServicesSection: React.FC = () => {
  return (
    <section id="more-services" className="py-14 md:py-20 bg-white border-b border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-200/80 text-gray-700 text-xs font-bold uppercase tracking-wider mb-3.5">
            <Compass className="w-3.5 h-3.5 text-[#10B981]" />
            <span>MORE SERVICES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
            More Advertising Experts to Explore
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Compare additional services for Facebook, Instagram, and Meta advertising.
          </p>
        </div>

        {/* 3 Cards Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {moreServicesCards.map((card) => (
            <ServiceCard key={card.id} card={card} featured={false} />
          ))}
        </div>

      </div>
    </section>
  );
};
