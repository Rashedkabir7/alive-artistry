
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Program {
  id: string;
  title: string;
  description: string;
  icon: string;
}

const programs: Program[] = [
  {
    id: "harith",
    title: "Harith",
    description: "Art of environmental development focusing on ecological awareness and sustainability through creative expression.",
    icon: "🌿"
  },
  {
    id: "kalpapuri",
    title: "Kalpapuri",
    description: "Related with children art and psychology, nurturing young minds through artistic exploration.",
    icon: "👧"
  },
  {
    id: "shikar",
    title: "Shikar",
    description: "Development and persistence of folk arts & Crafts to preserve cultural heritage and traditional art forms.",
    icon: "🧶"
  },
  {
    id: "artfactory",
    title: "Art Factory",
    description: "Project for young artists to collaborate, experiment, and showcase innovative artistic approaches.",
    icon: "🎨"
  }
];

const ProgramsSection = () => {
  const [activeProgram, setActiveProgram] = useState<string | null>(null);
  
  // Text animation variants
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.4,
      },
    }),
  };
  
  return (
    <section id="programs" className="py-20 bg-santaran-cream/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-santaran-teal mb-4">Our Key Programs</h2>
          <div className="w-24 h-1 bg-santaran-terracotta mx-auto"></div>
          <p className="mt-6 text-lg max-w-2xl mx-auto">
            The key operations of Santaran Art Organization focus on nurturing creativity, 
            preserving cultural heritage, and promoting art as a medium for positive change.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program) => (
            <div 
              key={program.id}
              className={`program-card group cursor-pointer transition-all duration-300 ${
                activeProgram === program.id ? 'border-santaran-terracotta scale-105' : ''
              }`}
              onMouseEnter={() => setActiveProgram(program.id)}
              onMouseLeave={() => setActiveProgram(null)}
            >
              <motion.div 
                className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110"
                whileHover={{ 
                  rotate: [0, -10, 10, -5, 5, 0],
                  transition: { duration: 0.6 }
                }}
              >
                {program.icon}
              </motion.div>
              
              <h3 className="heading-sm text-santaran-teal mb-3 group-hover:text-santaran-terracotta transition-colors relative overflow-hidden">
                <motion.div 
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-santaran-terracotta" 
                  initial={{ scaleX: 0 }}
                  animate={activeProgram === program.id ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.4 }}
                />
                <span className="relative">
                  {program.title.split('').map((letter, i) => (
                    <motion.span
                      key={i}
                      custom={i}
                      initial="hidden"
                      animate={activeProgram === program.id ? "visible" : "hidden"}
                      variants={letterVariants}
                      className="inline-block"
                      style={{ 
                        display: "inline-block",
                        transformOrigin: "bottom"
                      }}
                    >
                      {letter === ' ' ? '\u00A0' : letter}
                    </motion.span>
                  ))}
                </span>
              </h3>
              
              <p className="text-gray-600">
                {program.description}
              </p>
              <div className="mt-4 h-1 w-0 bg-santaran-gold transition-all duration-300 group-hover:w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
