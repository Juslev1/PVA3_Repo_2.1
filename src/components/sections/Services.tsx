import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { Scan as Scan3d, Shield, FileDigit, ScrollText, Glasses, Server } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Our Services" 
          subtitle="Comprehensive solutions to document, protect, and showcase your valuable items in the digital realm."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            icon={<Scan3d size={32} />}
            title="High-Precision 3D Scanning"
            description="Capture every detail of your valuable items with our state-of-the-art 3D scanning technology, providing sub-millimeter accuracy."
          />
          
          <ServiceCard 
            icon={<FileDigit size={32} />}
            title="Digital Documentation"
            description="Create comprehensive digital records of your items, including high-resolution images, detailed measurements, and condition reports."
          />
          
          <ServiceCard 
            icon={<Shield size={32} />}
            title="Blockchain Certification"
            description="Secure your digital assets with blockchain technology, providing immutable proof of ownership and authenticity."
          />
          
          <ServiceCard 
            icon={<ScrollText size={32} />}
            title="Insurance Documentation"
            description="Generate detailed reports for insurance purposes, including valuation estimates and comprehensive item documentation."
          />
          
          <ServiceCard 
            icon={<Glasses size={32} />}
            title="Virtual Exhibition"
            description="Showcase your collection in immersive virtual galleries accessible from anywhere in the world."
          />
          
          <ServiceCard 
            icon={<Server size={32} />}
            title="Secure Digital Storage"
            description="Store your digital assets securely with redundant backups and enterprise-grade encryption."
          />
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-50 rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
      <div className="h-16 w-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-900 transition-colors duration-300">
        <div className="text-blue-900 group-hover:text-white transition-colors duration-300">{icon}</div>
      </div>
      
      <h3 className="text-xl font-bold text-blue-900 mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Services;