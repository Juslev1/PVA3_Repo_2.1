import React, { useState, useRef, useEffect } from 'react';
import SectionTitle from '../ui/SectionTitle';
import { Check, ArrowRight } from 'lucide-react';

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  image: string;
}

const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Initial Consultation",
    description: "We discuss your needs, the items you want to scan, and determine the best approach for your specific case.",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    title: "3D Scanning",
    description: "Using advanced scanning technology, we capture every detail of your item with sub-millimeter precision.",
    image: "https://images.pexels.com/photos/8069524/pexels-photo-8069524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    title: "Digital Processing",
    description: "Our experts process the raw scan data, creating a high-fidelity 3D model with accurate textures and details.",
    image: "https://images.pexels.com/photos/7514677/pexels-photo-7514677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 4,
    title: "Documentation",
    description: "We create comprehensive documentation including measurements, condition assessment, and historical information.",
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 5,
    title: "Blockchain Certification",
    description: "Your digital asset is certified and secured on the blockchain, providing immutable proof of ownership.",
    image: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 6,
    title: "Delivery & Support",
    description: "We deliver your digital assets and provide ongoing support for accessing and utilizing your 3D models.",
    image: "https://images.pexels.com/photos/7238759/pexels-photo-7238759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);
  const sectionRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepId = Number(entry.target.getAttribute('data-step'));
            setActiveStep(stepId);
          }
        });
      },
      {
        root: null,
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0
      }
    );

    stepsRef.current.forEach((step) => {
      if (step) observer.observe(step);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" className="py-20 bg-white relative" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Our Process" 
          subtitle="From initial consultation to digital delivery, we ensure a smooth and comprehensive experience."
        />
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="lg:sticky lg:top-24 lg:h-[500px]">
              <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-2xl shadow-xl">
                <img 
                  src={processSteps.find(step => step.id === activeStep)?.image} 
                  alt={processSteps.find(step => step.id === activeStep)?.title}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end">
                  <div className="p-6 md:p-8">
                    <div className="text-amber-400 font-medium mb-2">Step {activeStep}</div>
                    <h3 className="text-white text-2xl md:text-3xl font-bold">
                      {processSteps.find(step => step.id === activeStep)?.title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <div
                  key={step.id}
                  ref={el => stepsRef.current[index] = el}
                  data-step={step.id}
                >
                  <ProcessStepItem 
                    step={step} 
                    isActive={step.id === activeStep}
                    onClick={() => setActiveStep(step.id)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ProcessStepItemProps {
  step: ProcessStep;
  isActive: boolean;
  onClick: () => void;
}

const ProcessStepItem: React.FC<ProcessStepItemProps> = ({ step, isActive, onClick }) => {
  return (
    <div 
      className={`p-6 rounded-xl transition-all duration-300 cursor-pointer ${
        isActive 
          ? 'bg-blue-900 text-white shadow-lg' 
          : 'bg-gray-50 hover:bg-gray-100'
      }`}
      onClick={onClick}
    >
      <div className="flex items-center">
        <div className={`h-10 w-10 rounded-full flex items-center justify-center mr-4 ${
          isActive 
            ? 'bg-amber-400 text-blue-900' 
            : 'bg-blue-100 text-blue-900'
        }`}>
          {isActive ? <Check size={20} /> : <span>{step.id}</span>}
        </div>
        
        <div className="flex-1">
          <h3 className={`text-lg font-bold ${isActive ? 'text-white' : 'text-blue-900'}`}>
            {step.title}
          </h3>
          <p className={`mt-2 ${isActive ? 'text-blue-100' : 'text-gray-600'}`}>
            {step.description}
          </p>
        </div>
        
        <div className={`${isActive ? 'text-amber-400' : 'text-blue-900'}`}>
          <ArrowRight size={20} />
        </div>
      </div>
    </div>
  );
};

export default Process;