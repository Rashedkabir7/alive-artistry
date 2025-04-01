
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Paintbrush } from 'lucide-react';

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
  
  // Advanced text animation variants with 3D rotation and color transitions
  const letterVariants = {
    hidden: { opacity: 0, y: 20, rotateY: 90 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.6,
        type: "spring",
        stiffness: 100,
        damping: 12
      },
    }),
    hover: (i: number) => ({
      y: [0, -8, 0],
      color: ["#2A7D6A", "#D96941", "#F9A826", "#2A7D6A"],
      scale: [1, 1.2, 1],
      transition: {
        duration: 0.8,
        delay: i * 0.03,
        repeat: 0,
        repeatType: "mirror" as const,
        ease: "easeInOut"
      }
    })
  };

  // Container animation for the entire title
  const titleContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section id="programs" className="py-20 bg-santaran-cream/50 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-santaran-vermilion/5 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-santaran-jade/5 blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="heading-lg text-santaran-teal mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Our Key Programs
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-santaran-vermilion to-santaran-amber mx-auto"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          ></motion.div>
          <motion.p 
            className="mt-6 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            The key operations of Santaran Art Organization focus on nurturing creativity, 
            preserving cultural heritage, and promoting art as a medium for positive change.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program) => (
            <Link
              to={`/programs/${program.id}`}
              key={program.id}
              className="block"
            >
              <motion.div 
                className={`program-card group cursor-pointer transition-all duration-500 ${
                  activeProgram === program.id ? 'border-santaran-vermilion shadow-xl' : ''
                }`}
                onMouseEnter={() => setActiveProgram(program.id)}
                onMouseLeave={() => setActiveProgram(null)}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div 
                  className="text-5xl mb-4 transition-transform duration-300"
                  whileHover={{ 
                    rotate: [0, -10, 10, -5, 5, 0],
                    scale: [1, 1.3, 1],
                    transition: { duration: 0.8, ease: "easeInOut" }
                  }}
                >
                  {program.icon}
                </motion.div>
                
                <h3 className="heading-sm text-santaran-teal mb-3 group-hover:text-santaran-vermilion transition-colors relative overflow-hidden">
                  <motion.div 
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-santaran-vermilion via-santaran-gold to-santaran-vermilion" 
                    initial={{ scaleX: 0 }}
                    animate={activeProgram === program.id ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                  
                  {/* Animated program title with 3D effect */}
                  <motion.span 
                    className="relative inline-block perspective-effect"
                    variants={titleContainerVariants}
                    initial="hidden"
                    animate="visible"
                    style={{ perspective: "800px" }}
                  >
                    {program.title.split('').map((letter, i) => (
                      <motion.span
                        key={i}
                        custom={i}
                        variants={letterVariants}
                        whileHover="hover"
                        className="inline-block cursor-pointer"
                        style={{ 
                          display: "inline-block",
                          transformOrigin: "center",
                          transformStyle: "preserve-3d"
                        }}
                      >
                        {letter === ' ' ? '\u00A0' : letter}
                      </motion.span>
                    ))}
                  </motion.span>
                </h3>
                
                <p className="text-gray-600">
                  {program.description}
                </p>
                
                <motion.div 
                  className="mt-4 h-1 bg-gradient-to-r from-santaran-teal via-santaran-jade to-santaran-gold"
                  initial={{ width: 0 }}
                  animate={{ width: activeProgram === program.id ? "100%" : "0%" }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
              </motion.div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button onClick={() => window.location.href = "/programs"}>
            View All Programs 
            <motion.div
              className="ml-2"
              animate={{ 
                x: [0, 5, 0],
                rotate: [-5, 5, -5, 5, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
                times: [0, 0.2, 1]
              }}
            >
              <Paintbrush className="w-4 h-4 text-white" />
            </motion.div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
