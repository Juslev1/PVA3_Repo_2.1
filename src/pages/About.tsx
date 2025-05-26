import React from 'react';
import { Shield, Users, Award, Target, History, Scan } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Button from '../components/ui/Button';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />
      
      <main className="pt-28">
        {/* Hero Section */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Preserving History Through Technology
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                DigiScan is revolutionizing how we document, preserve, and authenticate valuable artifacts and collectibles through cutting-edge 3D scanning technology.
              </p>
              <Button variant="secondary" href="#contact">Join Our Mission</Button>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Founded in 2020 by a team of museum curators, technology experts, and preservation specialists, DigiScan emerged from a shared vision to bridge the gap between physical artifacts and digital preservation.
                  </p>
                  <p>
                    What began as a solution for museums facing documentation challenges during the global pandemic has evolved into a comprehensive platform serving collectors, institutions, and cultural heritage organizations worldwide.
                  </p>
                  <p>
                    Our breakthrough came when we integrated blockchain technology with high-precision 3D scanning, creating an unbreakable chain of authenticity for digital artifacts. This innovation earned us recognition from the International Museum Association and established DigiScan as an industry leader.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-3xl p-3 shadow-2xl">
                  <img 
                    src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="DigiScan team at work" 
                    className="rounded-2xl w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Mission & Values</h2>
              <p className="text-xl text-gray-600">
                Our mission is to democratize digital preservation while maintaining the highest standards of accuracy and authenticity.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <ValueCard
                icon={<Shield />}
                title="Trust & Security"
                description="We ensure the highest level of security and authenticity in every digital asset we create."
              />
              <ValueCard
                icon={<Target />}
                title="Precision"
                description="Our commitment to accuracy drives every scan, measurement, and documentation process."
              />
              <ValueCard
                icon={<History />}
                title="Preservation"
                description="We're dedicated to preserving cultural heritage for future generations through digital innovation."
              />
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Leadership</h2>
              <p className="text-xl text-gray-600">
                Meet the experts behind DigiScan's innovative approach to digital preservation.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <TeamMember
                image="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                name="Dr. Sarah Chen"
                role="CEO & Co-founder"
                bio="Former museum curator with 15 years of experience in artifact preservation"
              />
              <TeamMember
                image="https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                name="Michael Roberts"
                role="CTO"
                bio="Pioneered 3D scanning technologies for cultural heritage preservation"
              />
              <TeamMember
                image="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                name="Dr. Emily Thompson"
                role="Head of Research"
                bio="Leading expert in material science and digital documentation"
              />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <StatCard number="10,000+" label="Items Scanned" />
              <StatCard number="150+" label="Museum Partners" />
              <StatCard number="99.9%" label="Accuracy Rate" />
              <StatCard number="24/7" label="Support" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => (
  <div className="text-center p-6">
    <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
      <div className="text-blue-900">{icon}</div>
    </div>
    <h3 className="text-xl font-bold text-blue-900 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

interface TeamMemberProps {
  image: string;
  name: string;
  role: string;
  bio: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ image, name, role, bio }) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden">
    <img src={image} alt={name} className="w-full h-64 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold text-blue-900 mb-1">{name}</h3>
      <p className="text-amber-500 font-medium mb-3">{role}</p>
      <p className="text-gray-600">{bio}</p>
    </div>
  </div>
);

interface StatCardProps {
  number: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ number, label }) => (
  <div className="text-center">
    <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">{number}</div>
    <div className="text-blue-100">{label}</div>
  </div>
);

export default About;