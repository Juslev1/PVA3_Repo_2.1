import React from 'react';
import { Check, Scan, Package, Users, Clock, Shield, Database } from 'lucide-react';
import Button from '../components/ui/Button';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const Pricing: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />
      
      <main className="pt-28">
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                Simple, Transparent Pricing
              </h1>
              <p className="text-xl text-gray-600">
                Choose the perfect plan for your 3D scanning needs. All plans include high-quality scans, documentation, and blockchain certification.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Single Item Package */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-transparent hover:border-blue-900 transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-blue-900">Single Item</h2>
                    <p className="text-gray-600">Perfect for individual pieces</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Package className="h-6 w-6 text-blue-900" />
                  </div>
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-blue-900">$499</span>
                  <span className="text-gray-600">/item</span>
                </div>

                <ul className="space-y-4 mb-8">
                  <PricingFeature>High-precision 3D scanning</PricingFeature>
                  <PricingFeature>Complete digital documentation</PricingFeature>
                  <PricingFeature>Blockchain certification</PricingFeature>
                  <PricingFeature>Material analysis report</PricingFeature>
                  <PricingFeature>Condition assessment</PricingFeature>
                  <PricingFeature>30-day cloud storage</PricingFeature>
                </ul>

                <Button href="#contact" fullWidth>Get Started</Button>
              </div>

              {/* Subscription Package */}
              <div className="bg-blue-900 rounded-2xl shadow-xl p-8 text-white transform hover:scale-105 transition-all duration-300">
                <div className="absolute top-4 right-4 bg-amber-400 text-blue-900 px-3 py-1 rounded-full text-sm font-medium">
                  Best Value
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold">Professional</h2>
                    <p className="text-blue-100">For collectors & institutions</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-bold">$1,999</span>
                  <span className="text-blue-100">/month</span>
                </div>

                <ul className="space-y-4 mb-8">
                  <PricingFeature light>Up to 5 items per month</PricingFeature>
                  <PricingFeature light>Priority scanning service</PricingFeature>
                  <PricingFeature light>Advanced material analysis</PricingFeature>
                  <PricingFeature light>Detailed condition reports</PricingFeature>
                  <PricingFeature light>Unlimited cloud storage</PricingFeature>
                  <PricingFeature light>API access</PricingFeature>
                  <PricingFeature light>Dedicated support</PricingFeature>
                </ul>

                <Button variant="secondary" href="#contact" fullWidth>Subscribe Now</Button>
              </div>
            </div>

            <div className="mt-20">
              <h2 className="text-2xl font-bold text-blue-900 text-center mb-12">
                All Plans Include
              </h2>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <FeatureCard
                  icon={<Scan />}
                  title="High-Precision Scanning"
                  description="Sub-millimeter accuracy with latest technology"
                />
                <FeatureCard
                  icon={<Shield />}
                  title="Blockchain Security"
                  description="Immutable proof of authenticity"
                />
                <FeatureCard
                  icon={<Database />}
                  title="Secure Storage"
                  description="Enterprise-grade encrypted storage"
                />
                <FeatureCard
                  icon={<Clock />}
                  title="Fast Turnaround"
                  description="48-hour processing guarantee"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

interface PricingFeatureProps {
  children: React.ReactNode;
  light?: boolean;
}

const PricingFeature: React.FC<PricingFeatureProps> = ({ children, light }) => (
  <li className="flex items-center">
    <Check className={`h-5 w-5 mr-3 ${light ? 'text-amber-400' : 'text-blue-900'}`} />
    <span className={light ? 'text-blue-50' : 'text-gray-600'}>{children}</span>
  </li>
);

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-white rounded-xl p-6 shadow-md">
    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
      <div className="text-blue-900">{icon}</div>
    </div>
    <h3 className="text-lg font-semibold text-blue-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Pricing;