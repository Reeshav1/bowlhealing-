import React from 'react';
import { Truck, Lock, RotateCcw } from 'lucide-react';

export default function Features() {
  const features = [
    {
      id: 1,
      icon: Truck,
      title: 'Free Shipping',
      description: 'Worldwide shipping on orders above $50. Track your package in real-time.'
    },
    {
      id: 2,
      icon: Lock,
      title: 'Secure Payments',
      description: 'Secure Payment With Multiple Options'
    },
    {
      id: 3,
      icon: RotateCcw,
      title: 'Easy Returns',
      description: 'Easy Returns Within 14 Days'
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.id}
                className="text-center bg-white p-8 sm:p-10 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="bg-yellow-100 p-4 sm:p-6 rounded-full">
                    <IconComponent 
                      size={32} 
                      className="text-yellow-600"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
