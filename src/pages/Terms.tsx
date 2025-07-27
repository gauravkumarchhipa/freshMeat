import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms & Conditions</h1>
          <p className="text-gray-600 mb-8">Last updated: January 1, 2024</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using FreshMeat's website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Product Information</h2>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p>
                  We strive to provide accurate product descriptions, weights, and pricing. However, we reserve the right to correct any errors, inaccuracies, or omissions and to change or update information at any time without prior notice.
                </p>
                <p>
                  All products are subject to availability. We reserve the right to discontinue any product at any time without notice.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Orders and Payment</h2>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p>
                  All orders are subject to acceptance and availability. We reserve the right to refuse or cancel any order for any reason at any time.
                </p>
                <p>
                  Payment must be made at the time of ordering through our secure payment system or cash on delivery where available.
                </p>
                <p>
                  Prices are subject to change without notice. The price charged will be the price in effect at the time the order is placed.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Delivery Terms</h2>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p>
                  Delivery times are estimates and not guaranteed. We will make every effort to deliver within the specified timeframe.
                </p>
                <p>
                  Delivery is available only within our designated service areas. Additional delivery charges may apply for certain locations.
                </p>
                <p>
                  You must be available to receive your delivery. If you are not available, additional charges may apply for redelivery.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Quality Guarantee</h2>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p>
                  We guarantee the freshness and quality of our products. If you are not satisfied with any product, please contact us within 24 hours of delivery.
                </p>
                <p>
                  Refunds or replacements will be provided at our discretion after investigation of the complaint.
                </p>
                <p>
                  Products must be stored according to our storage instructions to maintain quality and safety.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Cancellation and Refunds</h2>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p>
                  Orders may be cancelled up to 1 hour before the scheduled delivery time for a full refund.
                </p>
                <p>
                  Cancellations made after this time may be subject to a cancellation fee to cover preparation costs.
                </p>
                <p>
                  Refunds will be processed within 5-7 business days to the original payment method.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Food Safety</h2>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p>
                  All products must be handled and cooked according to food safety guidelines. We are not responsible for illness resulting from improper handling or cooking.
                </p>
                <p>
                  Pregnant women, young children, elderly, and immunocompromised individuals should take extra precautions when consuming raw or undercooked meat products.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibent text-gray-900 mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed">
                FreshMeat's liability shall not exceed the amount paid for the product in question. We are not liable for any indirect, incidental, special, or consequential damages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of our services, to understand our practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to our website. Continued use of our services constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contact Information</h2>
              <div className="text-gray-700 leading-relaxed">
                <p>If you have any questions about these Terms & Conditions, please contact us:</p>
                <div className="mt-4 space-y-2">
                  <p>Email: legal@freshmeat.com</p>
                  <p>Phone: +1 (555) 123-4567</p>
                  <p>Address: 123 Fresh Street, Food District, City 12345</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;