import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function DiscoverSerenity() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-900 to-black text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Decorative Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
            <circle cx="500" cy="500" r="400" stroke="currentColor" fill="none" strokeWidth="1" className="text-yellow-600" />
            <circle cx="500" cy="500" r="300" stroke="currentColor" fill="none" strokeWidth="1" className="text-yellow-600" />
            <circle cx="500" cy="500" r="200" stroke="currentColor" fill="none" strokeWidth="1" className="text-yellow-600" />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl  mb-6 leading-tight">
            Discover Your Path to <br />
            <span className="">Serenity</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
            Find the perfect tool for your meditation, healing, or spiritual journey. Each instrument is a gateway to inner peace and spiritual awakening.
          </p>

          {/* CTA Button */}
          <button className="inline-flex items-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-black font-bold px-8 sm:px-12 py-4 sm:py-5 rounded text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            Explore All Works
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
