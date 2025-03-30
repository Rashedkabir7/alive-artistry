
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Calendar, MapPin } from 'lucide-react';

const exhibitions = [
  {
    category: "current",
    items: [
      {
        id: "ex1",
        title: "Echoes of the Land",
        subtitle: "Environmental Art Exhibition",
        date: "May 15 - July 30, 2023",
        location: "Santaran Gallery, Chittagong",
        image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?q=80&w=1200",
        description: "An immersive exhibition exploring humanity's relationship with nature through diverse media."
      },
      {
        id: "ex2",
        title: "Folk Traditions Reimagined",
        subtitle: "Contemporary Folk Art",
        date: "June 5 - August 15, 2023",
        location: "Bengal Arts Foundation, Dhaka",
        image: "https://images.unsplash.com/photo-1561839561-b13bcfe95249?q=80&w=1200",
        description: "Contemporary artists reinterpret traditional folk art motifs in a celebration of cultural heritage."
      }
    ]
  },
  {
    category: "upcoming",
    items: [
      {
        id: "ex3",
        title: "Karnaphuli Folk Triennial",
        subtitle: "Celebrating Folk Arts & Crafts",
        date: "September 10 - December 15, 2023",
        location: "Multiple venues, Chittagong",
        image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?q=80&w=1200",
        description: "The flagship triennial event showcasing traditional folk arts and crafts from across Bangladesh."
      },
      {
        id: "ex4",
        title: "Digital Narratives",
        subtitle: "New Media Art Exhibition",
        date: "October 5 - November 30, 2023",
        location: "Digital Art Space, Dhaka",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200",
        description: "Exploring the intersection of traditional storytelling and digital technologies."
      }
    ]
  },
  {
    category: "past",
    items: [
      {
        id: "ex5",
        title: "Children's Art Festival",
        subtitle: "Kalpapuri Annual Exhibition",
        date: "January 15 - February 28, 2023",
        location: "Santaran Art Center, Chittagong",
        image: "https://images.unsplash.com/photo-1551038247-3d9af20df552?q=80&w=1200",
        description: "Celebrating the creativity and imagination of young artists from the Kalpapuri program."
      },
      {
        id: "ex6",
        title: "Indigenous Knowledge Systems",
        subtitle: "Research Exhibition",
        date: "November 10 - December 20, 2022",
        location: "National Museum, Dhaka",
        image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?q=80&w=1200",
        description: "Documenting and preserving indigenous knowledge through artistic research and collaboration."
      },
      {
        id: "ex7",
        title: "Art & Ecology Symposium",
        subtitle: "Environmental Art Exhibition",
        date: "August 5 - September 30, 2022",
        location: "University of Chittagong",
        image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=1200",
        description: "A collaborative exhibition exploring ecological concerns through artistic interventions."
      }
    ]
  }
];

const Exhibitions = () => {
  const [selectedExhibition, setSelectedExhibition] = useState<string | null>(null);
  
  const getExhibitionById = (id: string) => {
    for (const category of exhibitions) {
      const found = category.items.find(item => item.id === id);
      if (found) return found;
    }
    return null;
  };

  return (
    <div className="bg-santaran-cream">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="w-full h-full"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            style={{ 
              backgroundImage: 'url(https://images.unsplash.com/photo-1439337153520-7082a56a81f4?q=80&w=2000)', 
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(0.7)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-santaran-cream"></div>
        </div>
        
        <div className="container relative z-10 px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-white heading-xl mb-6">Exhibitions</h1>
            <p className="text-white/90 text-xl md:text-2xl mb-8">
              Explore our curated exhibitions showcasing the intersection of 
              indigenous knowledge, ecology, and contemporary art practices.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Exhibition Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="current" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="bg-santaran-cream border border-santaran-teal/20">
                <TabsTrigger 
                  value="current" 
                  className="data-[state=active]:bg-santaran-teal data-[state=active]:text-white px-8 py-3"
                >
                  Current
                </TabsTrigger>
                <TabsTrigger 
                  value="upcoming"
                  className="data-[state=active]:bg-santaran-teal data-[state=active]:text-white px-8 py-3"
                >
                  Upcoming
                </TabsTrigger>
                <TabsTrigger 
                  value="past"
                  className="data-[state=active]:bg-santaran-teal data-[state=active]:text-white px-8 py-3"
                >
                  Past
                </TabsTrigger>
              </TabsList>
            </div>
            
            {exhibitions.map((category) => (
              <TabsContent key={category.category} value={category.category} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {category.items.map((exhibition) => (
                    <motion.div
                      key={exhibition.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      className="group cursor-pointer"
                      onClick={() => setSelectedExhibition(exhibition.id)}
                    >
                      <div className="relative overflow-hidden rounded-lg">
                        <div className="aspect-[16/10] overflow-hidden">
                          <img
                            src={exhibition.image}
                            alt={exhibition.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                        
                        <div className="absolute bottom-0 left-0 p-6 w-full">
                          <span className="inline-block bg-santaran-terracotta text-white text-sm px-3 py-1 rounded-full mb-3">
                            {exhibition.subtitle}
                          </span>
                          <h3 className="text-white text-2xl font-display font-semibold mb-2">{exhibition.title}</h3>
                          
                          <div className="flex flex-col space-y-2 text-white/80 text-sm">
                            <div className="flex items-center">
                              <Calendar size={16} className="mr-2" />
                              <span>{exhibition.date}</span>
                            </div>
                            <div className="flex items-center">
                              <MapPin size={16} className="mr-2" />
                              <span>{exhibition.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
      
      {/* Exhibition Detail Modal */}
      <AnimatePresence>
        {selectedExhibition && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setSelectedExhibition(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-lg overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {getExhibitionById(selectedExhibition) && (
                <>
                  <div className="relative h-80">
                    <img 
                      src={getExhibitionById(selectedExhibition)?.image} 
                      alt={getExhibitionById(selectedExhibition)?.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    <button 
                      onClick={() => setSelectedExhibition(null)}
                      className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/40 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>
                  </div>
                  
                  <div className="p-8">
                    <span className="inline-block bg-santaran-terracotta text-white text-sm px-3 py-1 rounded-full mb-3">
                      {getExhibitionById(selectedExhibition)?.subtitle}
                    </span>
                    <h2 className="text-3xl font-display font-semibold mb-4">
                      {getExhibitionById(selectedExhibition)?.title}
                    </h2>
                    
                    <div className="flex flex-wrap gap-6 mb-6">
                      <div className="flex items-center text-gray-600">
                        <Calendar size={18} className="mr-2" />
                        <span>{getExhibitionById(selectedExhibition)?.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin size={18} className="mr-2" />
                        <span>{getExhibitionById(selectedExhibition)?.location}</span>
                      </div>
                    </div>
                    
                    <div className="prose max-w-none">
                      <p className="text-lg leading-relaxed">
                        {getExhibitionById(selectedExhibition)?.description}
                      </p>
                      <p className="mt-4 text-lg leading-relaxed">
                        This exhibition features works that explore the relationship between indigenous knowledge 
                        and contemporary art practices, inviting viewers to engage with multiple perspectives 
                        and artistic approaches. Through diverse media including painting, sculpture, installation, 
                        and digital art, the artists invite contemplation on our relationship with culture, nature,
                        and society.
                      </p>
                    </div>
                    
                    <div className="mt-8 flex justify-between items-center">
                      <button className="flex items-center gap-2 text-santaran-teal hover:underline">
                        <span>Download Exhibition Guide</span>
                        <ArrowRight size={18} />
                      </button>
                      
                      <button 
                        className="bg-santaran-terracotta text-white px-6 py-3 rounded-full hover:bg-santaran-terracotta/90 transition-colors"
                      >
                        Plan Your Visit
                      </button>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <Footer />
    </div>
  );
};

export default Exhibitions;
