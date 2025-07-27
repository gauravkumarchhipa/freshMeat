import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      title: 'Orders & Delivery',
      faqs: [
        {
          question: 'What are your delivery hours?',
          answer: 'We offer delivery from 6:00 AM to 10:00 PM Monday through Friday, and 7:00 AM to 9:00 PM on weekends. Same-day delivery is available for orders placed before 2:00 PM.'
        },
        {
          question: 'How fast is your delivery?',
          answer: 'We guarantee delivery within 2 hours for orders within our delivery zone. Orders placed before 2:00 PM can be delivered the same day, while orders after 2:00 PM will be delivered the next day.'
        },
        {
          question: 'What is your minimum order amount?',
          answer: 'Our minimum order amount is $25. Orders above $50 qualify for free delivery, while orders below $50 have a $5 delivery fee.'
        },
        {
          question: 'Can I schedule delivery for a specific time?',
          answer: 'Yes! You can schedule delivery for any available time slot during our delivery hours. We recommend booking at least 4 hours in advance for the best availability.'
        }
      ]
    },
    {
      title: 'Product Quality & Safety',
      faqs: [
        {
          question: 'How do you ensure freshness?',
          answer: 'All our products are stored in temperature-controlled environments and delivered in insulated packages with ice packs. We have a strict cold-chain process from farm to your door.'
        },
        {
          question: 'Where do you source your meat?',
          answer: 'We work exclusively with certified local farms and suppliers who meet our strict quality and safety standards. All our meat is USDA inspected and comes from animals raised without hormones or antibiotics.'
        },
        {
          question: 'How long can I store the meat?',
          answer: 'Fresh meat should be cooked within 1-2 days of delivery or can be frozen for up to 6 months. We include storage instructions and expiration dates with every order.'
        },
        {
          question: 'What if I receive a damaged or spoiled product?',
          answer: 'We offer a 100% satisfaction guarantee. If you receive any product that doesn\'t meet our quality standards, contact us immediately for a full refund or replacement.'
        }
      ]
    },
    {
      title: 'Payment & Pricing',
      faqs: [
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards (Visa, MasterCard, American Express), debit cards, and cash on delivery. Online payments are processed securely through our encrypted payment gateway.'
        },
        {
          question: 'Are your prices competitive?',
          answer: 'Yes! We offer competitive pricing while maintaining premium quality. We regularly review our prices to ensure you get the best value for fresh, high-quality meat and seafood.'
        },
        {
          question: 'Do you offer bulk discounts?',
          answer: 'Yes, we offer volume discounts for orders over $100. Contact us directly for special pricing on large orders or regular weekly/monthly deliveries.'
        },
        {
          question: 'Can I get a refund if I cancel my order?',
          answer: 'Orders can be cancelled up to 1 hour before the scheduled delivery time for a full refund. Orders cancelled after this time may be subject to a cancellation fee.'
        }
      ]
    },
    {
      title: 'Account & Services',
      faqs: [
        {
          question: 'Do I need to create an account to order?',
          answer: 'While you can place orders as a guest, creating an account allows you to track orders, save delivery addresses, view order history, and receive exclusive offers.'
        },
        {
          question: 'Can I set up recurring deliveries?',
          answer: 'Yes! We offer subscription services for regular customers. You can set up weekly, bi-weekly, or monthly deliveries with your favorite products at discounted prices.'
        },
        {
          question: 'Do you cater to special dietary requirements?',
          answer: 'Absolutely! We offer grass-fed beef, free-range chicken, wild-caught seafood, and organic options. Use our filters to find products that meet your dietary preferences.'
        },
        {
          question: 'How can I track my order?',
          answer: 'Once your order is confirmed, you\'ll receive a tracking link via SMS and email. You can monitor your delivery in real-time and receive notifications when your order is out for delivery.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our products and services
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-emerald-50 px-6 py-4 border-b">
                <h2 className="text-xl font-semibold text-emerald-900">{category.title}</h2>
              </div>
              
              <div className="divide-y divide-gray-200">
                {category.faqs.map((faq, faqIndex) => {
                  const itemIndex = categoryIndex * 100 + faqIndex; // Unique index
                  const isOpen = openItems.includes(itemIndex);
                  
                  return (
                    <div key={faqIndex}>
                      <button
                        onClick={() => toggleItem(itemIndex)}
                        className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-medium text-gray-900 pr-4">
                            {faq.question}
                          </h3>
                          {isOpen ? (
                            <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                          )}
                        </div>
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 pb-4">
                          <p className="text-gray-700 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-emerald-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-emerald-900 mb-4">
            Still have questions?
          </h2>
          <p className="text-emerald-700 mb-6">
            Can't find what you're looking for? Our customer support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Contact Us
            </a>
            <a
              href="tel:+15551234567"
              className="border border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;