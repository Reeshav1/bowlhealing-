import React from 'react';
import { ShoppingBag } from 'lucide-react';

export default function OurCollection() {
  const products = [
    {
      id: 1,
      name: 'Singing Bowl',
      price: '$89.99',
      image: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&h=500&fit=crop',
      category: 'Singing Bowls',
      rating: 4.8
    },
    {
      id: 2,
      name: 'Buddha Statue',
      price: '$149.99',
      image: 'https://images.unsplash.com/photo-1578926314433-e2789279f4aa?w=500&h=500&fit=crop',
      category: 'Statues',
      rating: 4.9
    },
    {
      id: 3,
      name: 'Gong - 10 inch',
      price: '$199.99',
      image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=500&h=500&fit=crop',
      category: 'Gongs',
      rating: 5.0
    },
    {
      id: 4,
      name: 'Handpan Drum',
      price: '$299.99',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=500&fit=crop',
      category: 'Handpans',
      rating: 4.7
    }
  ];

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

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden bg-gray-100 h-64 sm:h-72">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                
                {/* Add to Cart Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <button className="bg-yellow-600 hover:bg-yellow-700 text-black font-semibold px-6 py-3 rounded flex items-center gap-2 transition-all duration-300">
                    <ShoppingBag size={18} />
                    Add to Cart
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4 sm:p-6">
                <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider mb-2">
                  {product.category}
                </p>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors">
                  {product.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({product.rating})</span>
                </div>

                <p className="text-2xl font-bold text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
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

import { ArrowRight } from 'lucide-react';
