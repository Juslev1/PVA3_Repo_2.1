import React, { useState, useEffect } from 'react';
import SectionTitle from '../ui/SectionTitle';
import { Quote, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  organization: string;
  quote: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Dr. Elizabeth Chen",
    position: "Chief Curator",
    organization: "Metropolitan Museum of Art",
    quote: "DigiScan's technology has revolutionized how we document and preserve our most valuable artifacts. The detail and accuracy of their 3D scans exceed our expectations, and the blockchain certification adds an extra layer of security we deeply value.",
    rating: 5,
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    name: "Jonathan Reynolds",
    position: "Private Collector",
    organization: "Vintage Automobiles",
    quote: "As someone who's spent decades building my collection, having detailed digital scans has been invaluable for insurance and authentication purposes. The process was straightforward, and the results are stunning.",
    rating: 5,
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    name: "Sarah Thompson",
    position: "Director",
    organization: "Heritage Foundation",
    quote: "The DigiScan team brought incredible expertise to our preservation project. Their attention to detail and comprehensive approach to digital documentation has set a new standard in our field.",
    rating: 5,
    image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section id="testimonials" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Client Testimonials" 
          subtitle="Hear what museums, collectors, and institutions have to say about our 3D scanning services."
        />
        
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -top-12 left-0 text-blue-200">
            <Quote size={80} />
          </div>
          
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`transition-all duration-700 ${
                index === activeIndex
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-24 absolute top-0'
              }`}
            >
              {index === activeIndex && (
                <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl relative z-10">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-full md:w-1/3">
                      <div className="relative">
                        <div className="w-32 h-32 mx-auto overflow-hidden rounded-full border-4 border-white shadow-lg">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-amber-400 text-blue-900 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <Star key={i} size={14} fill="currentColor" />
                          ))}
                        </div>
                      </div>
                      
                      <div className="text-center mt-6">
                        <h4 className="font-bold text-xl text-blue-900">{testimonial.name}</h4>
                        <p className="text-gray-600 text-sm">{testimonial.position}</p>
                        <p className="text-blue-900 font-medium text-sm">{testimonial.organization}</p>
                      </div>
                    </div>
                    
                    <div className="w-full md:w-2/3">
                      <p className="text-gray-700 text-lg italic mb-6">"{testimonial.quote}"</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
          
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-3 w-3 rounded-full mx-2 transition-all duration-300 ${
                  index === activeIndex ? 'bg-blue-900 w-8' : 'bg-gray-300'
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;