
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Palette, Users, Image, BookOpen } from 'lucide-react';
import AnimatedHeading from '../AnimatedHeading';

const AboutTimeline: React.FC = () => {
  const milestones = [
    { 
      year: "1998", 
      title: "The First Brushstroke", 
      description: "From a gathering of dreamers in Chittagong arose Santaran, planting seeds of artistic revolution",
      icon: <Palette className="text-santaran-vermilion" size={20} />,
      image: "https://images.unsplash.com/photo-1572635148818-ef6fd45eb394?q=80&w=800"
    },
    { 
      year: "2008", 
      title: "Official Recognition", 
      description: "Our vision gained official recognition from the Ministry of Social Welfare, Bangladesh",
      icon: <BookOpen className="text-santaran-amber" size={20} />,
      image: "https://images.unsplash.com/photo-1578926288207-ad2a2e19fa05?q=80&w=800"
    },
    { 
      year: "2014", 
      title: "Shikar Program", 
      description: "Launched to preserve disappearing crafts, connecting elders with young artisans",
      icon: <Image className="text-santaran-terracotta" size={20} />,
      image: "https://images.unsplash.com/photo-1582691740708-9d5f1a1c4120?q=80&w=800"
    },
    { 
      year: "2021", 
      title: "Kalpapuri Program", 
      description: "Creating sacred spaces for children to express their artistic voices",
      icon: <Users className="text-santaran-amber" size={20} />,
      image: "https://images.unsplash.com/photo-1607453998774-d533f65dac99?q=80&w=800"
    }
  ];

  return (
    <div className="my-24">
      <AnimatedHeading
        text="Our Journey"
        tag="h3"
        className="heading-md mb-12 text-center"
        color="text-santaran-teal"
        animation="wave"
      />
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-santaran-vermilion via-santaran-amber to-santaran-jade transform md:translate-x-[-50%]"></div>
        
        <div className="space-y-24">
          {milestones.map((milestone, index) => (
            <div 
              key={milestone.year}
              className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* Year bubble */}
              <motion.div 
                className="absolute left-[-12px] md:left-1/2 top-0 transform md:translate-x-[-50%] z-10 bg-white border-4 border-santaran-amber rounded-full w-6 h-6 md:w-12 md:h-12 flex items-center justify-center shadow-lg"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="text-santaran-teal text-xs md:text-base font-bold">{milestone.year}</span>
              </motion.div>
              
              {/* Content */}
              <div className={`pl-8 md:pl-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <motion.div 
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="relative aspect-video overflow-hidden rounded-md mb-4">
                    <img 
                      src={milestone.image} 
                      alt={milestone.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                      <div className="text-white">
                        <div className="flex items-center gap-2 mb-1">
                          {milestone.icon}
                          <h4 className="font-bold text-lg">{milestone.title}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">{milestone.description}</p>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutTimeline;
