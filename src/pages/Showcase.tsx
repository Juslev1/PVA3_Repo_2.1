import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ShowcaseSection from '../components/sections/Showcase';
import SectionTitle from '../components/ui/SectionTitle';

const ShowcasePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />
      <main className="pt-28">
        <div className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle 
              title="Our Digital Collection" 
              subtitle="Explore our comprehensive portfolio of high-precision 3D scans, showcasing artifacts, collectibles, and precious items from around the world."
              className="mb-20"
            />
          </div>
        </div>

        <div className="bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-8">Museum Artifacts</h2>
          </div>
          <ShowcaseSection />
        </div>

        <div className="bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-8">Fine Art & Sculptures</h2>
          </div>
          <ShowcaseSection />
        </div>

        <div className="bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-8">Private Collections</h2>
          </div>
          <ShowcaseSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ShowcasePage;