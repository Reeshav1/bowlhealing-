import React from 'react';

export default function WhatWeSell() {
  const products = [
    {
      id: 1,
      name: 'Singing Bowls',
      image: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&h=500&fit=crop',
      description: 'Learn More'
    },
    {
      id: 2,
      name: 'Statues',
      image: 'https://images.unsplash.com/photo-1578926314433-e2789279f4aa?w=500&h=500&fit=crop',
      description: 'Learn More'
    },
    {
      id: 3,
      name: 'Handpans',
      image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=500&h=500&fit=crop',
      description: 'Learn More'
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What We Sell
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden rounded-lg mb-6 bg-gray-100 h-64 sm:h-72 md:h-80">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Product Info */}
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  {product.name}
                </h3>
                <button className="inline-block text-gray-600 hover:text-yellow-600 font-medium text-sm sm:text-base transition-colors">
                  {product.description}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
