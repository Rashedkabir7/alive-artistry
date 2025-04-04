
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Calendar, MapPin, Image, Book, GalleryHorizontal } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import ArtisticGalleryImages from '@/components/ArtisticGalleryImages';

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
        description: "An immersive exhibition exploring humanity's relationship with nature through diverse media.",
        curator: "Dr. Rina Ahmed",
        artists: ["Zahid Hassan", "Mariam Khan", "Tanvir Rahman"],
        additionalImages: [
          "https://images.unsplash.com/photo-1544967082-d9d25d867d66?q=80&w=1200",
          "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1200"
        ],
        tags: ["environmental", "multimedia", "contemporary"]
      },
      {
        id: "ex2",
        title: "Folk Traditions Reimagined",
        subtitle: "Contemporary Folk Art",
        date: "June 5 - August 15, 2023",
        location: "Bengal Arts Foundation, Dhaka",
        image: "https://images.unsplash.com/photo-1561839561-b13bcfe95249?q=80&w=1200",
        description: "Contemporary artists reinterpret traditional folk art motifs in a celebration of cultural heritage.",
        curator: "Farhana Begum",
        artists: ["Iqbal Ahmed", "Nusrat Jahan", "Rokeya Sultana"],
        additionalImages: [
          "https://images.unsplash.com/photo-1578926288207-32bacb6ee3c6?q=80&w=1200",
          "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?q=80&w=1200"
        ],
        tags: ["folk art", "heritage", "traditional"]
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
        description: "The flagship triennial event showcasing traditional folk arts and crafts from across Bangladesh.",
        curator: "Kabir Uddin",
        artists: ["Multiple artists from across Bangladesh"],
        additionalImages: [
          "https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&w=1200", 
          "https://images.unsplash.com/photo-1588512285341-c481fb6de19d?q=80&w=1200"
        ],
        tags: ["triennial", "folk arts", "crafts"]
      },
      {
        id: "ex4",
        title: "Digital Narratives",
        subtitle: "New Media Art Exhibition",
        date: "October 5 - November 30, 2023",
        location: "Digital Art Space, Dhaka",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200",
        description: "Exploring the intersection of traditional storytelling and digital technologies.",
        curator: "Zaid Rahman",
        artists: ["Tanzia Ahmed", "Rafiq Islam", "Digital Art Collective"],
        additionalImages: [
          "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1200",
          "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1200"
        ],
        tags: ["digital", "new media", "interactive"]
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
        description: "Celebrating the creativity and imagination of young artists from the Kalpapuri program.",
        curator: "Amina Khatun",
        artists: ["Young artists from Kalpapuri program"],
        additionalImages: [
          "https://images.unsplash.com/photo-1555009433-3039e19eb354?q=80&w=1200",
          "https://images.unsplash.com/photo-1607453998774-d533f65dac99?q=80&w=1200"
        ],
        tags: ["children", "education", "community"]
      },
      {
        id: "ex6",
        title: "Indigenous Knowledge Systems",
        subtitle: "Research Exhibition",
        date: "November 10 - December 20, 2022",
        location: "National Museum, Dhaka",
        image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?q=80&w=1200",
        description: "Documenting and preserving indigenous knowledge through artistic research and collaboration.",
        curator: "Dr. Jamal Hossain",
        artists: ["Collaborative research team"],
        additionalImages: [
          "https://images.unsplash.com/photo-1530512112057-7607c9865916?q=80&w=1200",
          "https://images.unsplash.com/photo-1566230724840-2e2729cdb08a?q=80&w=1200"
        ],
        tags: ["indigenous", "research", "documentation"]
      },
      {
        id: "ex7",
        title: "Art & Ecology Symposium",
        subtitle: "Environmental Art Exhibition",
        date: "August 5 - September 30, 2022",
        location: "University of Chittagong",
        image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=1200",
        description: "A collaborative exhibition exploring ecological concerns through artistic interventions.",
        curator: "Prof. Salma Khan",
        artists: ["Faculty and students of Fine Arts"],
        additionalImages: [
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
          "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200"
        ],
        tags: ["ecology", "symposium", "academic"]
      }
    ]
  }
];

const Exhibitions = () => {
  const [selectedExhibition, setSelectedExhibition] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>("current");
  
  const getExhibitionById = (id: string) => {
    for (const category of exhibitions) {
      const found = category.items.find(item => item.id === id);
      if (found) return found;
    }
    return null;
  };

  const selectedExhibitionData = selectedExhibition ? getExhibitionById(selectedExhibition) : null;

  return (
    <div className="bg-santaran-cream min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="w-full h-full"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            style={{ 
              backgroundImage: 'url(https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2000)', 
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
              Immerse yourself in our curated exhibitions that showcase the intersection of 
              indigenous knowledge, ecology, and contemporary artistic practices.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <button 
                onClick={() => {
                  const element = document.getElementById('exhibition-tabs');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3 bg-santaran-terracotta text-white rounded-full hover:bg-santaran-terracotta/90 transition-colors"
              >
                View Exhibitions
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Exhibition Tabs */}
      <section id="exhibition-tabs" className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="current" className="w-full" onValueChange={setActiveTab} value={activeTab}>
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  {category.items.map((exhibition) => (
                    <motion.div
                      key={exhibition.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      className="group"
                    >
                      <Card className="overflow-hidden border-0 shadow-lg h-full bg-white hover:shadow-xl transition-shadow">
                        <div className="relative overflow-hidden">
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
                            <h3 className="text-white text-2xl font-display font-semibold">{exhibition.title}</h3>
                          </div>
                        </div>
                        
                        <CardContent className="pt-5">
                          <div className="flex flex-col space-y-2 text-gray-600 text-sm mb-4">
                            <div className="flex items-center">
                              <Calendar size={16} className="mr-2 text-santaran-teal" />
                              <span>{exhibition.date}</span>
                            </div>
                            <div className="flex items-center">
                              <MapPin size={16} className="mr-2 text-santaran-teal" />
                              <span>{exhibition.location}</span>
                            </div>
                          </div>
                          
                          <p className="text-gray-700 line-clamp-2 mb-4">{exhibition.description}</p>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {exhibition.tags.map(tag => (
                              <span key={tag} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </CardContent>
                        
                        <CardFooter className="pt-0">
                          <button 
                            onClick={() => setSelectedExhibition(exhibition.id)}
                            className="text-santaran-teal font-medium hover:text-santaran-terracotta flex items-center transition-colors"
                          >
                            View Exhibition Details
                            <ArrowRight size={18} className="ml-2" />
                          </button>
                        </CardFooter>
                      </Card>
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
        {selectedExhibition && selectedExhibitionData && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 overflow-y-auto"
            onClick={() => setSelectedExhibition(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-lg overflow-hidden max-w-5xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={selectedExhibitionData.image} 
                    alt={selectedExhibitionData.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                </div>
                
                <button 
                  onClick={() => setSelectedExhibition(null)}
                  className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/40 transition-colors"
                  aria-label="Close exhibition details"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
                
                <div className="absolute bottom-6 left-6">
                  <span className="inline-block bg-santaran-terracotta text-white text-sm px-3 py-1 rounded-full mb-3">
                    {selectedExhibitionData.subtitle}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-display font-semibold text-white">
                    {selectedExhibitionData.title}
                  </h2>
                </div>
              </div>
              
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <Book className="mr-2 text-santaran-teal" size={20} />
                      About the Exhibition
                    </h3>
                    
                    <div className="prose max-w-none mb-8">
                      <p className="text-lg leading-relaxed">
                        {selectedExhibitionData.description}
                      </p>
                      <p className="mt-4 text-lg leading-relaxed">
                        This exhibition features works that explore the relationship between indigenous knowledge 
                        and contemporary art practices, inviting viewers to engage with multiple perspectives 
                        and artistic approaches. Through diverse media including painting, sculpture, installation, 
                        and digital art, the artists invite contemplation on our relationship with culture, nature,
                        and society.
                      </p>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <GalleryHorizontal className="mr-2 text-santaran-teal" size={20} />
                      Exhibition Gallery
                    </h3>
                    
                    <div className="mb-8">
                      <div>
                        <ArtisticGalleryImages 
                          category={selectedExhibitionData.tags.includes('folk art') ? 'folk' : 
                                  selectedExhibitionData.tags.includes('children') ? 'children' :
                                  selectedExhibitionData.tags.includes('environmental') || selectedExhibitionData.tags.includes('ecology') ? 'nature' : 
                                  'contemporary'}
                          autoPlay={true}
                          interval={4000}
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Exhibition Details</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-santaran-teal">Dates</h4>
                        <p className="flex items-center">
                          <Calendar size={16} className="mr-2 text-gray-500" />
                          {selectedExhibitionData.date}
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-santaran-teal">Location</h4>
                        <p className="flex items-center">
                          <MapPin size={16} className="mr-2 text-gray-500" />
                          {selectedExhibitionData.location}
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-santaran-teal">Curator</h4>
                        <p>{selectedExhibitionData.curator}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-santaran-teal">Featured Artists</h4>
                        <ul className="list-disc ml-5">
                          {selectedExhibitionData.artists.map((artist, index) => (
                            <li key={index}>{artist}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-santaran-teal">Tags</h4>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {selectedExhibitionData.tags.map(tag => (
                            <span key={tag} className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 space-y-4">
                      <button className="w-full bg-santaran-teal text-white py-3 rounded-lg hover:bg-santaran-teal/90 transition-colors flex justify-center items-center">
                        <Image className="mr-2" size={18} />
                        Download Exhibition Catalog
                      </button>
                      
                      <button className="w-full bg-santaran-terracotta text-white py-3 rounded-lg hover:bg-santaran-terracotta/90 transition-colors">
                        Plan Your Visit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <Footer />
    </div>
  );
};

export default Exhibitions;
