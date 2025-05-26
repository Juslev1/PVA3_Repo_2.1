import React, { useState, useEffect } from 'react';
import { Scan as Scan3d, Menu, X } from 'lucide-react';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Scan3d className="h-8 w-8 text-blue-900" />
            <span className="ml-2 text-xl font-bold text-blue-900">DigiScan</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="/pricing">Pricing</NavLink>
            <NavLink href="/showcase">Showcase</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" href="/login">Login</Button>
            <Button href="/signup">Sign Up</Button>
          </div>
          
          <button 
            className="md:hidden p-2 text-blue-900"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <MobileNavLink href="/" onClick={toggleMobileMenu}>Home</MobileNavLink>
            <MobileNavLink href="/about" onClick={toggleMobileMenu}>About</MobileNavLink>
            <MobileNavLink href="#services" onClick={toggleMobileMenu}>Services</MobileNavLink>
            <MobileNavLink href="/pricing" onClick={toggleMobileMenu}>Pricing</MobileNavLink>
            <MobileNavLink href="/showcase" onClick={toggleMobileMenu}>Showcase</MobileNavLink>
            <MobileNavLink href="#faq" onClick={toggleMobileMenu}>FAQ</MobileNavLink>
            <Button variant="outline" href="/login" fullWidth onClick={toggleMobileMenu}>Login</Button>
            <Button href="/signup" fullWidth onClick={toggleMobileMenu}>Sign Up</Button>
          </div>
        </div>
      )}
    </header>
  );
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  return (
    <a 
      href={href} 
      className="text-gray-700 hover:text-blue-900 transition-colors duration-200 font-medium"
    >
      {children}
    </a>
  );
};

interface MobileNavLinkProps extends NavLinkProps {
  onClick?: () => void;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ href, children, onClick }) => {
  return (
    <a 
      href={href} 
      className="block py-2 text-gray-700 hover:text-blue-900 transition-colors duration-200 font-medium"
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default Header;