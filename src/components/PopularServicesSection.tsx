import React from 'react';
import { popularServicesCards } from '../data/servicesData';
import { ServiceCard } from './ServiceCard';
import { Zap } from 'lucide-react';

export const PopularServicesSection: React.FC = () => {
  return (
    <section id="popular" className="py-14 md:py-20 bg-[#F9FAFB] border-b border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-200/80 text-gray-700 text-xs font-bold uppercase tracking-wider mb-3.5">
            <Zap className="w-3.5 h-3.5 text-[#10B981]" />
            <span>POPULAR SERVICES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
            Popular Meta Advertising Services
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Explore freelancers who can help set up, manage, and optimize your advertising campaigns.
          </p>
        </div>

        {/* 3 Cards Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {popularServicesCards.map((card) => (
            <ServiceCard key={card.id} card={card} featured={false} />
          ))}
        </div>

      </div>
    </section>
  );
};
