import React from 'react';
import { Award, Users, Leaf, Clock } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { number: '10K+', label: 'Happy Customers' },
    { number: '5', label: 'Years Experience' },
    { number: '50+', label: 'Local Farms' },
    { number: '2hr', label: 'Delivery Time' }
  ];

  const values = [
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'We source only the finest cuts from certified farms and suppliers who meet our strict quality standards.'
    },
    {
      icon: Leaf,
      title: 'Sustainable Sourcing',
      description: 'Our partnerships with local farms ensure ethical treatment of animals and environmentally responsible practices.'
    },
    {
      icon: Clock,
      title: 'Fresh Guarantee',
      description: 'From farm to your table in record time. We guarantee freshness with our cold-chain delivery system.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our team of butchers and food experts ensure every cut meets our exacting standards before delivery.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-emerald-600 to-emerald-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About FreshMeat</h1>
            <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto">
              Your trusted partner for premium fresh meat and seafood, delivering quality and freshness since 2019.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-emerald-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 text-lg">
                <p>
                  Founded in 2019, FreshMeat began with a simple mission: to bring the highest quality 
                  fresh meat and seafood directly from trusted local farms to your dinner table.
                </p>
                <p>
                  What started as a small family business has grown into the region's most trusted 
                  source for premium meat products. We work exclusively with farms that share our 
                  commitment to quality, sustainability, and ethical practices.
                </p>
                <p>
                  Today, we serve thousands of families with our promise of freshness, quality, 
                  and convenience. Every product is hand-selected, properly stored, and delivered 
                  with care to ensure you receive only the best.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4553111/pexels-photo-4553111.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Meat preparation"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              These core principles guide everything we do, from sourcing to delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-gray-600 text-lg">
              Meet the passionate people behind FreshMeat who ensure quality in every delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'John Smith',
                role: 'Founder & CEO',
                image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300'
              },
              {
                name: 'Sarah Johnson',
                role: 'Head of Quality',
                image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=300'
              },
              {
                name: 'Mike Davis',
                role: 'Master Butcher',
                image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=300'
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-emerald-600 font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;