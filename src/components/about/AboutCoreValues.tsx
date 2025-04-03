
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Heart } from 'lucide-react';
import AnimatedHeading from '../AnimatedHeading';

const AboutCoreValues: React.FC = () => {
  const coreValues = [
    {
      title: "Cultural Preservation",
      description: "Preserving indigenous artistic traditions and knowledge systems as living heritage for future generations.",
      icon: <BookOpen className="w-4 h-4" />,
      color: "text-santaran-teal",
      image: "https://images.unsplash.com/photo-1582691740708-9d5f1a1c4120?q=80&w=600"
    },
    {
      title: "Community Engagement",
      description: "Involving communities in artistic processes to foster deeper connections and cultural ownership.",
      icon: <Users className="w-4 h-4" />,
      color: "text-santaran-amber",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=600"
    },
    {
      title: "Environmental Harmony",
      description: "Creating art that respects and reflects the delicate balance between humans and the natural world.",
      icon: <Heart className="w-4 h-4" />,
      color: "text-santaran-jade",
      image: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?q=80&w=600"
    }
  ];

  return (
    <div className="my-24">
      <AnimatedHeading
        text="Our Core Values"
        tag="h3"
        className="heading-md mb-12 text-center"
        color="text-santaran-vermilion"
        animation="wave"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {coreValues.map((value, index) => (
          <motion.div 
            key={value.title}
            className="group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="relative overflow-hidden rounded-lg shadow-lg h-80">
              {/* Background image */}
              <div className="absolute inset-0">
                <img 
                  src={value.image} 
                  alt={value.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <div className="mb-3">
                  <span className={`inline-block p-3 rounded-full bg-white/20 backdrop-blur-sm ${value.color}`}>
                    {value.icon}
                  </span>
                </div>
                <h4 className="text-xl font-bold mb-2 font-display">{value.title}</h4>
                <p className="text-white/90 group-hover:translate-y-0 transition-transform duration-500">{value.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutCoreValues;
