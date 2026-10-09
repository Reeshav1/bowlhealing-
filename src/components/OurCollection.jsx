
import { ArrowRight } from 'lucide-react';


export default function OurCollection() {
  

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Collection
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Discover our carefully curated selection of authentic Himalayan instruments and artifacts
          </p>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12 sm:mt-16">
          <button className="inline-flex items-center gap-2 border-2 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-black font-semibold px-8 sm:px-12 py-3 sm:py-4 rounded transition-all duration-300">
            View All Products 
            <ArrowRight size={20} />
          </button>
        </div>

      </div>
    </section>
  );
}



