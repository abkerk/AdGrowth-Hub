import React from 'react';
import { Search, ExternalLink, ThumbsUp, Shield } from 'lucide-react';
import { howItWorksSteps } from '../data/servicesData';

export const HowItWorks: React.FC = () => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Search className="w-5 h-5 text-[#10B981]" />;
      case 1:
        return <ExternalLink className="w-5 h-5 text-[#10B981]" />;
      case 2:
        return <ThumbsUp className="w-5 h-5 text-[#10B981]" />;
      default:
        return <Search className="w-5 h-5 text-[#10B981]" />;
    }
  };

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-[#F9FAFB] border-b border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#10B981]/10 text-[#059669] text-xs font-bold uppercase tracking-wider mb-3.5">
            <span>SIMPLE PROCESS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
            Find Your Advertising Expert in 3 Steps
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            A straightforward way to discover and compare freelance advertising specialists.
          </p>
        </div>

        {/* 3 Steps Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative">
          {howItWorksSteps.map((step, idx) => (
            <div
              key={step.number}
              id={`how-it-works-step-${step.number}`}
              className="bg-white rounded-3xl p-7 border border-gray-200/80 shadow-xs hover:border-[#10B981] hover:shadow-sm transition-all duration-200 relative flex flex-col items-start"
            >
              {/* Step indicator header */}
              <div className="flex items-center justify-between w-full mb-5">
                <div className="w-11 h-11 rounded-2xl bg-[#10B981]/10 flex items-center justify-center">
                  {getStepIcon(idx)}
                </div>
                <span className="text-3xl font-black text-gray-200">
                  0{step.number}
                </span>
              </div>

              <span className="text-[10px] font-bold text-[#059669] uppercase tracking-wider mb-1.5 bg-[#10B981]/10 px-2 py-0.5 rounded-full">
                STEP {step.number}
              </span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Disclaimer Box */}
        <div className="mt-10 p-4 sm:p-5 rounded-2xl bg-white border border-gray-200/80 text-xs sm:text-sm text-gray-600 flex items-start sm:items-center gap-3 max-w-3xl mx-auto shadow-xs">
          <Shield className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5 sm:mt-0" />
          <p>
            <strong>Note on Freelancer Vetting:</strong> We recommend reviewing each seller’s past client feedback, project portfolio, delivery turnaround times, and gig tiers directly on Fiverr before initiating work.
          </p>
        </div>

      </div>
    </section>
  );
};
