import React, { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import Modal from '../ui/Modal';
import { ChevronLeft, ChevronRight, ZoomIn, Ruler, Box, Microscope, Star, AlertTriangle, Award, DollarSign, Scan, Calendar, Clock, ClockIcon } from 'lucide-react';

interface ItemDimensions {
  height: string;
  width: string;
  depth: string;
  weight: string;
}

interface ItemCondition {
  overall: string;
  surface: string;
  structure: string;
  notes: string[];
}

interface ItemCertification {
  company: string;
  number: string;
  grade: string;
  date: string;
}

interface ScanDetails {
  id: string;
  date: string;
  method: string;
  duration: string;
  postProcessing: string;
  operator: string;
}

interface KeyFeature {
  name: string;
  image: string;
}

interface ShowcaseItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  client: string;
  dimensions: ItemDimensions;
  orthographicViews: string[];
  materialAnalysis: {
    primary: string;
    composition: Record<string, string>;
    surface: string;
  };
  keyFeatures: KeyFeature[];
  wearPatternImage: string;
  condition: ItemCondition;
  certification: ItemCertification;
  estimatedValue: string;
  scan: ScanDetails;
}

const showcaseItems: ShowcaseItem[] = [
  {
    id: 1,
    title: "Ancient Greek Amphora",
    category: "Museum Artifact",
    description: "A 5th century BCE amphora with intricate decorations, digitally preserved for the Metropolitan Museum.",
    image: "https://images.pexels.com/photos/12704622/pexels-photo-12704622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    client: "Metropolitan Museum of Art",
    dimensions: {
      height: "45.7 cm",
      width: "32.4 cm",
      depth: "32.4 cm",
      weight: "3.2 kg"
    },
    orthographicViews: [
      "https://images.pexels.com/photos/12704622/pexels-photo-12704622.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/12704622/pexels-photo-12704622.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/12704622/pexels-photo-12704622.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    materialAnalysis: {
      primary: "Terracotta",
      composition: {
        "Clay": "85%",
        "Quartz": "10%",
        "Iron Oxide": "5%"
      },
      surface: "Original slip glaze with areas of wear"
    },
    keyFeatures: [
      {
        name: "Black-figure decoration technique",
        image: "https://images.pexels.com/photos/12704622/pexels-photo-12704622.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        name: "Dionysian scene depiction",
        image: "https://images.pexels.com/photos/12704622/pexels-photo-12704622.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        name: "Double-handled design",
        image: "https://images.pexels.com/photos/12704622/pexels-photo-12704622.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        name: "Period-specific foot ring",
        image: "https://images.pexels.com/photos/12704622/pexels-photo-12704622.jpeg?auto=compress&cs=tinysrgb&w=600"
      }
    ],
    wearPatternImage: "https://images.pexels.com/photos/12704622/pexels-photo-12704622.jpeg?auto=compress&cs=tinysrgb&w=600",
    condition: {
      overall: "Good",
      surface: "Minor wear consistent with age",
      structure: "Stable with no major cracks",
      notes: [
        "Small chip on rim",
        "Surface abrasions on base",
        "Previous restoration on handle"
      ]
    },
    certification: {
      company: "International Antiquities Authentication Board",
      number: "IAAB-2023-1457",
      grade: "A-",
      date: "2023-06-15"
    },
    estimatedValue: "$175,000 - $225,000",
    scan: {
      id: "METGK-2023-0157",
      date: "2023-07-20",
      method: "Structured Light Scanning",
      duration: "4.5 hours",
      postProcessing: "12 hours",
      operator: "Dr. Sarah Chen"
    }
  },
  {
    id: 2,
    title: "Rare Coin Collection",
    category: "Numismatics",
    description: "A comprehensive scan of a private collection of rare gold coins from the Byzantine Empire.",
    image: "https://images.pexels.com/photos/8297022/pexels-photo-8297022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    client: "Private Collector",
    dimensions: {
      height: "2.8 cm",
      width: "2.8 cm",
      depth: "0.2 cm",
      weight: "4.5 g"
    },
    orthographicViews: [
      "https://images.pexels.com/photos/8297022/pexels-photo-8297022.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/8297022/pexels-photo-8297022.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/8297022/pexels-photo-8297022.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    materialAnalysis: {
      primary: "Gold",
      composition: {
        "Gold": "92%",
        "Silver": "5%",
        "Copper": "3%"
      },
      surface: "Original mint luster with slight toning"
    },
    keyFeatures: [
      {
        name: "Imperial portrait",
        image: "https://images.pexels.com/photos/8297022/pexels-photo-8297022.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        name: "Mint mark",
        image: "https://images.pexels.com/photos/8297022/pexels-photo-8297022.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        name: "Religious iconography",
        image: "https://images.pexels.com/photos/8297022/pexels-photo-8297022.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        name: "Edge details",
        image: "https://images.pexels.com/photos/8297022/pexels-photo-8297022.jpeg?auto=compress&cs=tinysrgb&w=600"
      }
    ],
    wearPatternImage: "https://images.pexels.com/photos/8297022/pexels-photo-8297022.jpeg?auto=compress&cs=tinysrgb&w=600",
    condition: {
      overall: "Excellent",
      surface: "Minimal wear",
      structure: "Fully intact",
      notes: [
        "Light surface marks",
        "Original mint luster present",
        "No evidence of cleaning"
      ]
    },
    certification: {
      company: "Numismatic Guaranty Corporation",
      number: "NGC-2023-5789",
      grade: "MS-65",
      date: "2023-08-10"
    },
    estimatedValue: "$45,000 - $55,000",
    scan: {
      id: "NUMIS-2023-0892",
      date: "2023-08-15",
      method: "Micro-CT Scanning",
      duration: "2 hours",
      postProcessing: "8 hours",
      operator: "Dr. Michael Brown"
    }
  },
  {
    id: 3,
    title: "Ming Dynasty Vase",
    category: "Porcelain",
    description: "A detailed 3D model of a rare Ming dynasty vase with detailed blue and white glazing patterns.",
    image: "https://images.pexels.com/photos/5501158/pexels-photo-5501158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    client: "Asian Art Museum",
    dimensions: {
      height: "38.2 cm",
      width: "25.6 cm",
      depth: "25.6 cm",
      weight: "2.8 kg"
    },
    orthographicViews: [
      "https://images.pexels.com/photos/5501158/pexels-photo-5501158.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/5501158/pexels-photo-5501158.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/5501158/pexels-photo-5501158.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    materialAnalysis: {
      primary: "Porcelain",
      composition: {
        "Kaolin": "70%",
        "Feldspar": "20%",
        "Quartz": "10%"
      },
      surface: "Cobalt blue underglaze decoration"
    },
    keyFeatures: [
      {
        name: "Dragon motif",
        image: "https://images.pexels.com/photos/5501158/pexels-photo-5501158.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        name: "Cloud scrolls",
        image: "https://images.pexels.com/photos/5501158/pexels-photo-5501158.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        name: "Imperial seal mark",
        image: "https://images.pexels.com/photos/5501158/pexels-photo-5501158.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        name: "Floral border",
        image: "https://images.pexels.com/photos/5501158/pexels-photo-5501158.jpeg?auto=compress&cs=tinysrgb&w=600"
      }
    ],
    wearPatternImage: "https://images.pexels.com/photos/5501158/pexels-photo-5501158.jpeg?auto=compress&cs=tinysrgb&w=600",
    condition: {
      overall: "Very Good",
      surface: "Original glaze intact",
      structure: "No repairs",
      notes: [
        "Minor glaze crackling",
        "Slight wear to foot rim",
        "Original firing flaw on base"
      ]
    },
    certification: {
      company: "Asian Ceramics Authentication Board",
      number: "ACAB-2023-789",
      grade: "A",
      date: "2023-09-01"
    },
    estimatedValue: "$300,000 - $400,000",
    scan: {
      id: "MING-2023-0456",
      date: "2023-09-05",
      method: "Photogrammetry + Structured Light",
      duration: "6 hours",
      postProcessing: "15 hours",
      operator: "Dr. Lisa Wang"
    }
  },
  {
    id: 4,
    title: "Victorian Jewelry Set",
    category: "Fine Jewelry",
    description: "Exquisite Victorian-era diamond and sapphire jewelry set, documented for insurance and authentication.",
    image: "https://images.pexels.com/photos/14285816/pexels-photo-14285816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    client: "Heritage Auctions",
    dimensions: {
      height: "5.2 cm",
      width: "3.8 cm",
      depth: "1.2 cm",
      weight: "45.6 g"
    },
    orthographicViews: [
      "https://images.pexels.com/photos/14285816/pexels-photo-14285816.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/14285816/pexels-photo-14285816.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/14285816/pexels-photo-14285816.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    materialAnalysis: {
      primary: "18K Gold",
      composition: {
        "Gold": "75%",
        "Silver": "15%",
        "Copper": "10%"
      },
      surface: "Hand-engraved with original patina"
    },
    keyFeatures: [
      {
        name: "Ceylon sapphire",
        image: "https://images.pexels.com/photos/14285816/pexels-photo-14285816.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        name: "Old mine cut diamonds",
        image: "https://images.pexels.com/photos/14285816/pexels-photo-14285816.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        name: "Filigree work",
        image: "https://images.pexels.com/photos/14285816/pexels-photo-14285816.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        name: "Period clasp mechanism",
        image: "https://images.pexels.com/photos/14285816/pexels-photo-14285816.jpeg?auto=compress&cs=tinysrgb&w=600"
      }
    ],
    wearPatternImage: "https://images.pexels.com/photos/14285816/pexels-photo-14285816.jpeg?auto=compress&cs=tinysrgb&w=600",
    condition: {
      overall: "Excellent",
      surface: "Original finish",
      structure: "All stones secure",
      notes: [
        "Original box included",
        "Period appropriate wear",
        "All original stones"
      ]
    },
    certification: {
      company: "Gemological Institute of America",
      number: "GIA-2023-12345",
      grade: "Antique - Excellent",
      date: "2023-10-15"
    },
    estimatedValue: "$85,000 - $95,000",
    scan: {
      id: "JEWEL-2023-1234",
      date: "2023-10-20",
      method: "Micro-CT + Photogrammetry",
      duration: "3 hours",
      postProcessing: "10 hours",
      operator: "Dr. Emily Roberts"
    }
  }
];

const Showcase: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState<ShowcaseItem | null>(null);
  
  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? showcaseItems.length - 1 : prev - 1));
  };
  
  const handleNext = () => {
    setActiveIndex((prev) => (prev === showcaseItems.length - 1 ? 0 : prev + 1));
  };
  
  const activeItem = showcaseItems[activeIndex];
  
  return (
    <section id="showcase" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Featured Showcase" 
          subtitle="Explore our portfolio of high-precision 3D scans from museums, collectors, and institutions around the world."
        />
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-1/2">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img 
                src={activeItem.image} 
                alt={activeItem.title} 
                className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end">
                <div className="p-6 md:p-8">
                  <div className="text-amber-400 font-medium mb-2">{activeItem.category}</div>
                  <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">{activeItem.title}</h3>
                  <p className="text-gray-200 mb-4">{activeItem.client}</p>
                  <Button 
                    size="sm"
                    onClick={() => setSelectedItem(activeItem)}
                  >
                    <ZoomIn className="mr-2 h-4 w-4" />
                    View Details
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between items-center mt-6">
              <button 
                className="h-12 w-12 rounded-full bg-white shadow-md flex items-center justify-center text-blue-900 hover:bg-blue-900 hover:text-white transition-colors duration-200"
                onClick={handlePrev}
                aria-label="Previous item"
              >
                <ChevronLeft size={24} />
              </button>
              
              <div className="text-gray-500 text-sm">
                {activeIndex + 1} / {showcaseItems.length}
              </div>
              
              <button 
                className="h-12 w-12 rounded-full bg-white shadow-md flex items-center justify-center text-blue-900 hover:bg-blue-900 hover:text-white transition-colors duration-200"
                onClick={handleNext}
                aria-label="Next item"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">{activeItem.title}</h3>
            <p className="text-gray-600 mb-6">{activeItem.description}</p>
            
            <div className="bg-white rounded-xl p-6 shadow-md mb-6">
              <h4 className="text-lg font-semibold text-blue-900 mb-3">Quick Overview</h4>
              <div className="grid grid-cols-2 gap-4">
                <DetailItem icon={<Ruler />} label="Size" value={`H: ${activeItem.dimensions.height}`} />
                <DetailItem icon={<Box />} label="Weight" value={activeItem.dimensions.weight} />
                <DetailItem icon={<Award />} label="Grade" value={activeItem.certification.grade} />
                <DetailItem icon={<DollarSign />} label="Value" value={activeItem.estimatedValue} />
              </div>
            </div>
            
            <div className="grid grid-cols-4 gap-2">
              {showcaseItems.map((item, index) => (
                <button
                  key={item.id}
                  className={`rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    index === activeIndex ? 'border-blue-900 shadow-md' : 'border-transparent opacity-70'
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-16 sm:h-20 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
      >
        {selectedItem && (
          <div className="p-6 md:p-8">
            <div className="mb-8">
              <img 
                src={selectedItem.image} 
                alt={selectedItem.title}
                className="w-full h-[300px] md:h-[400px] object-cover rounded-xl"
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <span className="text-amber-500 font-medium">{selectedItem.category}</span>
                <h2 className="text-2xl font-bold text-blue-900 mt-2 mb-4">{selectedItem.title}</h2>
                
                <div className="space-y-6">
                  {/* Dimensions */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-900 mb-3 flex items-center">
                      <Ruler className="mr-2" /> Dimensions
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      <DetailItem label="Height" value={selectedItem.dimensions.height} />
                      <DetailItem label="Width" value={selectedItem.dimensions.width} />
                      <DetailItem label="Depth" value={selectedItem.dimensions.depth} />
                      <DetailItem label="Weight" value={selectedItem.dimensions.weight} />
                    </div>
                  </div>
                  
                  {/* Material Analysis */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-900 mb-3 flex items-center">
                      <Microscope className="mr-2" /> Material Analysis
                    </h3>
                    <p className="text-gray-600 mb-2">Primary: {selectedItem.materialAnalysis.primary}</p>
                    <div className="space-y-1">
                      {Object.entries(selectedItem.materialAnalysis.composition).map(([material, percentage]) => (
                        <div key={material} className="flex justify-between text-sm">
                          <span className="text-gray-600">{material}</span>
                          <span className="font-medium">{percentage}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Certification */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-900 mb-3 flex items-center">
                      <Award className="mr-2" /> Certification
                    </h3>
                    <DetailItem label="Company" value={selectedItem.certification.company} />
                    <DetailItem label="Number" value={selectedItem.certification.number} />
                    <DetailItem label="Grade" value={selectedItem.certification.grade} />
                    <DetailItem label="Date" value={selectedItem.certification.date} />
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                {/* Condition */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-900 mb-3 flex items-center">
                    <AlertTriangle className="mr-2" /> Condition Assessment
                  </h3>
                  <DetailItem label="Overall" value={selectedItem.condition.overall} />
                  <DetailItem label="Surface" value={selectedItem.condition.surface} />
                  <DetailItem label="Structure" value={selectedItem.condition.structure} />
                  <div className="mt-2">
                    <h4 className="text-sm font-medium text-gray-700 mb-1">Notes:</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600">
                      {selectedItem.condition.notes.map((note, index) => (
                        <li key={index}>{note}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Scan Details */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-900 mb-3 flex items-center">
                    <Scan className="mr-2" /> Scan Information
                  </h3>
                  <DetailItem label="Scan ID" value={selectedItem.scan.id} />
                  <DetailItem label="Date" value={selectedItem.scan.date} />
                  <DetailItem label="Method" value={selectedItem.scan.method} />
                  <DetailItem label="Duration" value={selectedItem.scan.duration} />
                  <DetailItem label="Post-Processing" value={selectedItem.scan.postProcessing} />
                  <DetailItem label="Operator" value={selectedItem.scan.operator} />
                </div>
                
                {/* Value Estimation */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-900 mb-3 flex items-center">
                    <DollarSign className="mr-2" /> Estimated Value
                  </h3>
                  <p className="text-xl font-bold text-blue-900">{selectedItem.estimatedValue}</p>
                </div>
              </div>
            </div>
            
            {/* Key Features */}
            <div className="mt-8">
              <h3 className="font-semibold text-blue-900 mb-3">Key Features</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {selectedItem.keyFeatures.map((feature, index) => (
                  <div key={index} className="bg-blue-50 rounded-lg p-3">
                    <img src={feature.image} alt={feature.name} className="w-full h-32 object-cover rounded-lg mb-2" />
                    <p className="text-sm text-gray-700">{feature.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

interface DetailItemProps {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

const DetailItem: React.FC<DetailItemProps> = ({ label, value, icon }) => {
  return (
    <div className="flex items-start space-x-2">
      {icon && <div className="text-blue-900">{icon}</div>}
      <div>
        <div className="text-gray-600 text-sm">{label}:</div>
        <div className="font-medium text-gray-900">{value}</div>
      </div>
    </div>
  );
};

export default Showcase;