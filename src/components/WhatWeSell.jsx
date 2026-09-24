import React from 'react';

export default function WhatWeSell() {
  const products = [
    {
      id: 1,
      name: 'Singing Bowls',
      image: 'https://images.unsplash.com/photo-1579755219382-2a62ac7edb2a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Learn More'
    },
    {
      id: 2,
      name: 'Gong',
      image: 'https://images.squarespace-cdn.com/content/v1/5d0434f328d8d9000101f755/1588287173511-3VB3WUYE4B65SNDJZVHX/unnamed+(1).jpg?format=500w',
      description: 'Learn More'
    },
    {
      id: 3,
      name: 'Handpans',
      image: 'https://i.otto.de/i/otto/4d4b8869-568c-583a-bf3f-35f5c03a44f2/meinl-percussion-handpan-handpans-und-steel-tongue-drums-handpans-hpstl101-sensory-handpan-d-amara-10-tone-handpan.jpg?$formatz$',
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
