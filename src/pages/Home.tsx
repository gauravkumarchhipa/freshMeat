import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Shield, Clock, Award, ChefHat, Leaf } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const Home: React.FC = () => {
  const featuredProducts = products.filter(product => product.featured);

  const trustElements = [
    {
      icon: Shield,
      title: 'Freshness Guarantee',
      description: '100% fresh products or your money back'
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Same-day delivery within 2 hours'
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Grade A meat from certified suppliers'
    },
    {
      icon: Clock,
      title: '24/7 Service',
      description: 'Order anytime, we\'re always here'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-black/50 to-black/30">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1600)'
          }}
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
        
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Fresh<span className="text-emerald-400">Meat</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Premium quality meat and seafood delivered fresh to your doorstep
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              Shop Now
            </Link>
            <Link
              to="/about"
              className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Elements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Why Choose FreshMeat?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustElements.map((element, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <element.icon className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{element.title}</h3>
                <p className="text-gray-600">{element.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-gray-600 text-lg">
              Hand-picked premium selections for the finest taste
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors inline-flex items-center"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Quality Promise */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Quality Promise
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                We work directly with trusted local farms and suppliers to bring you the freshest, 
                highest-quality meat and seafood. Every product is carefully inspected and 
                processed in our state-of-the-art facilities.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <ChefHat className="h-6 w-6 text-emerald-600" />
                  <span className="text-gray-700">Chef-recommended cuts and preparations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Leaf className="h-6 w-6 text-emerald-600" />
                  <span className="text-gray-700">Sustainably sourced and ethically raised</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-6 w-6 text-emerald-600" />
                  <span className="text-gray-700">HACCP certified processing facilities</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4553111/pexels-photo-4553111.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Quality meat preparation"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;