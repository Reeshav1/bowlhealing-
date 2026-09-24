import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ArtisanPromise() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-900 text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Side - Image */}
          <div className="order-2 md:order-1">
            <div className="relative rounded-lg overflow-hidden  sm:h-80 md:h-96 shadow-2xl">
              <img
                src="https://bowlhealing.com/images/artisan.jpg"
                alt="Artisan at work"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 md:order-2">
            <div className="mb-2">
              <h3 className="lg:text-2xl sm:text-base font-semibold text-yellow-500 uppercase tracking-widest mb-4">
                The Artisan Promise
              </h3>
           
            </div>
         <p className='max-w-40%'>
          Handcrafted by master artisans using techniques passed down through generations. Each piece is a living tradition — genuine, ethically sourced,<br/> and spiritually potent.2
         </p>

            <button className="inline-flex items-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded transition-all duration-300 hover:scale-105 mt-4">
              Know More
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
