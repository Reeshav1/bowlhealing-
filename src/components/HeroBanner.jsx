import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function HeroBanner() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://i.ibb.co/4gKkf8Z5/bowlmaking.jpg')`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-start px-4 sm:px-6 lg:px-8">
        <div className=" max-w-3xl ml-20">
          
          {/* Subtitle Badge */}
          <div className="mb-6">
            <span className="inline-block text-xs sm:text-sm font-semibold text-yellow-500 uppercase tracking-widest">
              Sacred Art From The Himalayas
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-semibold text-white mb-6 leading-tight">
            Singing Bowls, <br/>Statues, Gongs & <br/> Handpans
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl mx-auto">
            The bowl sings what words cannot — a tone that travels inward. Handcrafted with meditation and intention, our collection celebrates the ancient artistry and spiritual resonance of Himalayan tradition.
          </p>

          {/* CTA Button */}
          <button className="inline-flex items-center justify-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-black font-semibold px-8 py-4 rounded transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
            Explore Collection
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
