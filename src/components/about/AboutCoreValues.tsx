
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Heart, Palette } from 'lucide-react';
import AnimatedHeading from '../AnimatedHeading';

const AboutCoreValues: React.FC = () => {
  const corePrograms = [
    {
      title: "Harith",
      description: "Art of environmental development through environmental art camps and community engagement.",
      icon: <Palette className="w-4 h-4" />,
      color: "text-santaran-teal",
      image: "/lovable-uploads/ba08dcae-6f27-4ebb-8369-f4401e96da77.png"
    },
    {
      title: "Kalpapuri",
      description: "Children's art and psychology program fostering creativity and cultural awareness in young minds.",
      icon: <Users className="w-4 h-4" />,
      color: "text-santaran-amber",
      image: "/lovable-uploads/af34992d-81d8-452e-96a6-c7be948fdead.png"
    },
    {
      title: "Shikar",
      description: "Development and persistence of folk arts and crafts, preserving indigenous artistic traditions.",
      icon: <BookOpen className="w-4 h-4" />,
      color: "text-santaran-jade",
      image: "/lovable-uploads/e0f7c15b-d242-4daa-82aa-f2ffa25629f9.png"
    },
    {
      title: "Art Factory",
      description: "Supporting young artists in developing their skills and experimenting with contemporary art forms.",
      icon: <Heart className="w-4 h-4" />,
      color: "text-santaran-vermilion",
      image: "/lovable-uploads/af85aab8-53e2-4fc8-adbf-2248330efcf6.png"
    }
  ];

  return (
    <div className="py-24 px-4 bg-santaran-cream/30">
      <div className="container mx-auto max-w-6xl">
        <AnimatedHeading
          text="Our Core Programs"
          tag="h2"
          className="heading-lg text-center mb-12"
          color="text-santaran-vermilion"
          animation="wave"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {corePrograms.map((program, index) => (
            <motion.div 
              key={program.title}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg h-80">
                <div className="absolute inset-0">
                  <img 
                    src={program.image} 
                    alt={program.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </div>
                
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <div className="mb-3">
                    <span className={`inline-block p-3 rounded-full bg-white/20 backdrop-blur-sm ${program.color}`}>
                      {program.icon}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold mb-2 font-display">{program.title}</h4>
                  <p className="text-white/90 group-hover:translate-y-0 transition-transform duration-500">{program.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutCoreValues;
