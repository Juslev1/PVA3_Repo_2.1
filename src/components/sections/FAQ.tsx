import React, { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: 1,
    question: "What types of items can you scan?",
    answer: "We can scan a wide variety of items, from small artifacts and jewelry to large sculptures and furniture. Our technology allows us to capture objects ranging from a few centimeters to several meters in size, with appropriate levels of detail for each scale."
  },
  {
    id: 2,
    question: "How accurate are your 3D scans?",
    answer: "Our scanning technology provides sub-millimeter accuracy, capturing details as fine as 0.1mm depending on the object's size and material. This level of precision ensures that even the smallest details and textures are faithfully reproduced in the digital model."
  },
  {
    id: 3,
    question: "How does the blockchain certification work?",
    answer: "We create a unique digital certificate for each scan, which is recorded on a secure blockchain. This certificate contains a cryptographic hash of the 3D model, metadata about the object, and ownership information, providing immutable proof of the digital asset's authenticity and provenance."
  },
  {
    id: 4,
    question: "Can the 3D models be used for insurance purposes?",
    answer: "Yes, our detailed 3D models and accompanying documentation are specifically designed to serve as comprehensive records for insurance purposes. Many insurance companies accept our digital documentation as supporting evidence for high-value items."
  },
  {
    id: 5,
    question: "Do you travel to scan items, or do they need to be brought to you?",
    answer: "We offer both options. Our mobile scanning unit can travel to museums, galleries, or private residences to scan items that cannot be moved. Alternatively, items can be brought to our secure scanning facility for the highest precision results."
  },
  {
    id: 6,
    question: "How long does the scanning process take?",
    answer: "The scanning time varies depending on the complexity and size of the object. Small items might take a few hours, while larger or more complex items could require a full day. The digital processing typically takes an additional 1-3 days depending on the required level of detail."
  },
  {
    id: 7,
    question: "What file formats do you provide for the 3D models?",
    answer: "We provide industry-standard formats including OBJ, STL, GLTF, and FBX, ensuring compatibility with a wide range of 3D software and platforms. We can also provide custom formats upon request."
  },
  {
    id: 8,
    question: "How secure is my data and information?",
    answer: "We take data security extremely seriously. All digital assets are encrypted and stored in secure cloud environments with redundant backups. Access is strictly controlled and limited to authorized personnel and the client. Our blockchain certification adds an additional layer of security and authentication."
  },
];

const FAQ: React.FC = () => {
  const [openItemId, setOpenItemId] = useState<number | null>(1);
  
  const toggleItem = (id: number) => {
    setOpenItemId(openItemId === id ? null : id);
  };
  
  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Frequently Asked Questions" 
          subtitle="Find answers to common questions about our 3D scanning services and technology."
        />
        
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item) => (
            <div key={item.id} className="mb-4">
              <button 
                className={`w-full text-left p-6 rounded-xl flex justify-between items-center transition-all duration-200 ${
                  openItemId === item.id 
                    ? 'bg-blue-900 text-white shadow-md' 
                    : 'bg-white hover:bg-gray-100'
                }`}
                onClick={() => toggleItem(item.id)}
                aria-expanded={openItemId === item.id}
              >
                <span className="font-semibold text-lg">{item.question}</span>
                <span>
                  {openItemId === item.id ? (
                    <ChevronUp className={openItemId === item.id ? 'text-white' : 'text-blue-900'} />
                  ) : (
                    <ChevronDown className="text-blue-900" />
                  )}
                </span>
              </button>
              
              {openItemId === item.id && (
                <div className="bg-white p-6 rounded-b-xl shadow-md -mt-2">
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;