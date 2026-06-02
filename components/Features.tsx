import React from 'react';
import { Truck, Banknote, Phone, Lock } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'Orders above $200',
  },
  {
    icon: Banknote,
    title: 'Money-back',
    description: '30 day Guarantee',
  },
  {
    icon: Phone,
    title: 'Premium Support',
    description: 'Phone and email support',
  },
  {
    icon: Lock,
    title: 'Secure Payments',
    description: 'Secured by Stripe',
  },
];

const Features = () => {
  return (
    <div className="w-full bg-white py-12 mb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className={`flex flex-col items-center justify-center text-center py-12 px-4
                  ${index < 2 ? 'border-b border-gray-100' : ''}
                  ${index === 2 ? 'border-b border-gray-100 md:border-none' : ''}
                `}
              >
                <Icon className="w-7 h-7 mb-4 text-gray-800" strokeWidth={1.5} />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;
