import React from 'react';
import { Scan as Scan3d, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Scan3d className="h-8 w-8 text-amber-400" />
              <span className="ml-2 text-xl font-bold">DigiScan</span>
            </div>
            <p className="text-gray-300 mb-6">
              Helping collectors, museums, and asset owners document, present, and protect their valuable items in a digital environment.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook size={20} />} />
              <SocialIcon icon={<Twitter size={20} />} />
              <SocialIcon icon={<Instagram size={20} />} />
              <SocialIcon icon={<Linkedin size={20} />} />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="#services">Services</FooterLink>
              <FooterLink href="#showcase">Showcase</FooterLink>
              <FooterLink href="#process">Process</FooterLink>
              <FooterLink href="#testimonials">Testimonials</FooterLink>
              <FooterLink href="#faq">FAQ</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <FooterLink href="#3d-scanning">3D Scanning</FooterLink>
              <FooterLink href="#digital-documentation">Digital Documentation</FooterLink>
              <FooterLink href="#blockchain-certification">Blockchain Certification</FooterLink>
              <FooterLink href="#insurance-support">Insurance Support</FooterLink>
              <FooterLink href="#museum-solutions">Museum Solutions</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-amber-400 mr-2 mt-0.5" />
                <span className="text-gray-300">123 Scanning Avenue, Digital City, DC 10101</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-amber-400 mr-2" />
                <span className="text-gray-300">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-amber-400 mr-2" />
                <span className="text-gray-300">info@digiscan.example</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-12 pt-6">
          <p className="text-center text-gray-400">
            &copy; {currentYear} DigiScan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => {
  return (
    <li>
      <a 
        href={href} 
        className="text-gray-300 hover:text-amber-400 transition-colors duration-200"
      >
        {children}
      </a>
    </li>
  );
};

interface SocialIconProps {
  icon: React.ReactNode;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon }) => {
  return (
    <a 
      href="#" 
      className="h-9 w-9 rounded-full bg-blue-800 flex items-center justify-center hover:bg-amber-400 transition-colors duration-200"
    >
      {icon}
    </a>
  );
};

export default Footer;