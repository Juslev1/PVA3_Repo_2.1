import React, { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    service: 'scanning',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a server
    // For this example, we'll just simulate a successful submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };
  
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Get In Touch" 
          subtitle="Contact us to discuss your 3D scanning needs or schedule a consultation."
        />
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-1/3 order-2 lg:order-1">
            <div className="bg-blue-50 rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold text-blue-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <ContactInfo 
                  icon={<Phone size={24} />}
                  title="Phone"
                  details={["+1 (555) 123-4567"]}
                />
                
                <ContactInfo 
                  icon={<Mail size={24} />}
                  title="Email"
                  details={["info@digiscan.example", "support@digiscan.example"]}
                />
                
                <ContactInfo 
                  icon={<MapPin size={24} />}
                  title="Office"
                  details={[
                    "123 Scanning Avenue",
                    "Digital City, DC 10101",
                    "United States"
                  ]}
                />
              </div>
              
              <div className="mt-8 pt-8 border-t border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-4">Business Hours</h4>
                <p className="text-gray-600 mb-2">Monday - Friday: 9am - 6pm</p>
                <p className="text-gray-600">Saturday: 10am - 4pm (by appointment)</p>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-2/3 order-1 lg:order-2">
            {isSubmitted ? (
              <div className="bg-green-50 rounded-xl p-8 shadow-md text-center">
                <div className="text-green-500 mb-4">
                  <CheckCircle size={64} className="mx-auto" />
                </div>
                <h3 className="text-2xl font-bold text-green-700 mb-4">Thank You!</h3>
                <p className="text-gray-700 mb-6">
                  Your message has been received. We'll get back to you within 24 hours.
                </p>
                <Button 
                  variant="primary" 
                  onClick={() => setIsSubmitted(false)}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-gray-50 rounded-xl p-8 shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-gray-700 font-medium mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formState.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all appearance-none bg-white"
                    >
                      <option value="scanning">3D Scanning</option>
                      <option value="documentation">Digital Documentation</option>
                      <option value="blockchain">Blockchain Certification</option>
                      <option value="insurance">Insurance Documentation</option>
                      <option value="exhibition">Virtual Exhibition</option>
                      <option value="other">Other Services</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                    placeholder="Tell us about your project or item(s) you'd like to scan..."
                  />
                </div>
                
                <Button variant="primary" size="lg" fullWidth>
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  details: string[];
}

const ContactInfo: React.FC<ContactInfoProps> = ({ icon, title, details }) => {
  return (
    <div className="flex">
      <div className="h-12 w-12 rounded-full bg-blue-200 flex items-center justify-center mr-4 text-blue-900">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-blue-900 mb-1">{title}</h4>
        {details.map((detail, index) => (
          <p key={index} className="text-gray-600">{detail}</p>
        ))}
      </div>
    </div>
  );
};

export default Contact;