import React, { useEffect, useState } from 'react';
import Button from '../ui/Button';
import { ShieldCheck, Database, Scan } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="pt-28 pb-20 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className={`w-full lg:w-1/2 mb-12 lg:mb-0 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`}>
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-900 rounded-full font-medium text-sm mb-6">
              Secure Digital Documentation
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 leading-tight mb-6">
              Preserve Your <span className="text-amber-500">Valuables</span> in the Digital Realm
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-xl">
              Professional 3D scanning services for collectors, museums, and asset owners. Document, present, and protect your items with blockchain-certified digital twins.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" href="#contact">
                Get Started
              </Button>
              <Button size="lg" variant="outline" href="#showcase">
                View Showcase
              </Button>
            </div>
            
            <div className="flex flex-wrap mt-12 gap-8">
              <FeaturePoint icon={<Scan />} text="High-Precision 3D Scanning" />
              <FeaturePoint icon={<Database />} text="Digital Documentation" />
              <FeaturePoint icon={<ShieldCheck />} text="Blockchain Security" />
            </div>
          </div>
          
          <div className={`w-full lg:w-1/2 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`}>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-3xl p-3 shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/7691374/pexels-photo-7691374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="3D scanning of artifacts" 
                  className="rounded-2xl w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 w-48 md:w-64 animate-float">
                <div className="text-sm font-semibold text-blue-900 mb-1">Scan Complete</div>
                <div className="text-xs text-gray-500">Ming Dynasty Vase</div>
                <div className="mt-2 h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full w-full"></div>
                </div>
              </div>
              <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg p-4 w-48 md:w-64 animate-float delay-300">
                <div className="text-sm font-semibold text-blue-900 mb-1">Blockchain Verified</div>
                <div className="text-xs text-gray-500">Digital Certificate #38291</div>
                <div className="mt-2 flex">
                  <div className="h-2 w-2 rounded-full bg-green-500 mr-1"></div>
                  <div className="text-xs text-green-600 font-medium">Authenticated</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface FeaturePointProps {
  icon: React.ReactNode;
  text: string;
}

const FeaturePoint: React.FC<FeaturePointProps> = ({ icon, text }) => {
  return (
    <div className="flex items-center">
      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
        <div className="text-blue-900">{icon}</div>
      </div>
      <span className="text-gray-700 font-medium">{text}</span>
    </div>
  );
};

export default Hero;