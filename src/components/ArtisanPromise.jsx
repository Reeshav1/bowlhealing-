import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ArtisanPromise() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-900 text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Side - Image */}
          <div className="order-2 md:order-1">
            <div className="relative rounded-lg overflow-hidden h-64 sm:h-80 md:h-96 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=600&h=600&fit=crop"
                alt="Artisan at work"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 md:order-2">
            <div className="mb-6">
              <h3 className="text-sm sm:text-base font-semibold text-yellow-500 uppercase tracking-widest mb-4">
                Artisan Promise
              </h3>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Handcrafted By Master Artisans
              </h2>
            </div>

            <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed">
              Each piece is meticulously handcrafted by our master artisans with over 20 years of experience. We honor the sacred traditions of Himalayan craftsmanship, ensuring every singing bowl, statue, and handpan meets our rigorous standards of authenticity and quality.
            </p>

            <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed">
              Our commitment is simple: to preserve the artistry of ancient traditions while ensuring fair compensation for our craftspeople. Every purchase supports the livelihoods of communities in the Himalayas.
            </p>

            <button className="inline-flex items-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded transition-all duration-300 hover:scale-105">
              Read More
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
