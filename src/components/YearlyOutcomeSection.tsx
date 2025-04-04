
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ArtisticGalleryImages from './ArtisticGalleryImages';

interface Outcome {
  year: string;
  items: {
    title: string;
    count: number;
    icon: string;
  }[];
}

const outcomes: Outcome[] = [
  {
    year: "2023",
    items: [
      { title: "Art Workshops", count: 35, icon: "🖌️" },
      { title: "Community Events", count: 18, icon: "🌎" },
      { title: "Children Engaged", count: 450, icon: "👧" },
      { title: "Artists Supported", count: 56, icon: "👨‍🎨" }
    ]
  },
  {
    year: "2022",
    items: [
      { title: "Art Exhibitions", count: 12, icon: "🖼️" },
      { title: "Folk Art Programs", count: 8, icon: "🧶" },
      { title: "Ecological Projects", count: 6, icon: "🌿" },
      { title: "Publications", count: 4, icon: "📚" }
    ]
  }
];

const YearlyOutcomeSection = () => {
  return (
    <section className="py-20 bg-white/90 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-santaran-teal/5 to-santaran-terracotta/5 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-tl from-santaran-amber/5 to-santaran-jade/5 blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-santaran-teal mb-4">Our Impact Through Art</h2>
          <div className="w-24 h-1 bg-santaran-amber mx-auto"></div>
          <p className="mt-6 text-lg max-w-2xl mx-auto text-gray-600">
            Achievements and outcomes of our programs and initiatives
            that continue to make a difference in our communities.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2 relative">
            {/* Gallery component */}
            <div className="rounded-lg overflow-hidden shadow-xl">
              <div>
                <ArtisticGalleryImages category="mixed" autoPlay={true} interval={5000} />
              </div>
            </div>
            
            <motion.div 
              className="absolute -bottom-10 -right-10 w-40 h-40 bg-santaran-jade/20 rounded-full blur-xl"
              animate={{ 
                scale: [1, 1.2],
                opacity: [0.3, 0.6],
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          </div>
          
          <div className="md:w-1/2">
            <div className="space-y-12">
              {outcomes.map((yearData, yearIndex) => (
                <motion.div 
                  key={yearData.year}
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: yearIndex * 0.1 }}
                >
                  <div className="flex items-center mb-6">
                    <h3 className="heading-md text-santaran-terracotta mr-3">{yearData.year}</h3>
                    <div className="h-0.5 flex-grow bg-gradient-to-r from-santaran-terracotta to-transparent"></div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {yearData.items.map((item, index) => (
                      <motion.div 
                        key={item.title}
                        className="bg-white p-5 rounded-lg shadow-md transition-all"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ y: -5, boxShadow: "0 12px 20px rgba(0,0,0,0.1)" }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ 
                          duration: 0.4, 
                          delay: yearIndex * 0.1 + index * 0.1 
                        }}
                      >
                        <div className="text-3xl mb-2">{item.icon}</div>
                        <h4 className="font-medium text-santaran-brown mb-1">{item.title}</h4>
                        <p className="text-2xl font-bold text-santaran-teal">{item.count}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="mt-8 flex justify-end"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <a 
                href="/about" 
                className="inline-flex items-center text-santaran-terracotta hover:text-santaran-jade transition-colors"
              >
                <span>View full impact report</span>
                <motion.div
                  animate={{ 
                    x: [0, 5],
                    transition: { 
                      duration: 1, 
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }
                  }}
                >
                  <ArrowRight size={18} className="ml-2" />
                </motion.div>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YearlyOutcomeSection;
