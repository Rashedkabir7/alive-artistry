
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const ProgramHero: React.FC = () => {
  const letterVariants = {
    initial: { y: -100, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }),
    whileHover: (i: number) => ({
      y: [0, -15, 0],
      color: ["#2A7D6A", "#DE4D31", "#F9A826", "#2A7D6A"],
      scale: [1, 1.2, 1],
      rotateY: [0, 20, 0],
      transition: {
        duration: 0.8,
        delay: i * 0.03,
        repeat: 0,
        repeatType: "reverse" as const,
        ease: "easeInOut"
      }
    })
  };

  const title = "Our Programs";
  
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-santaran-jade/10 via-santaran-cream to-santaran-amber/10 z-0"></div>
      
      {/* Decorative Elements */}
      <motion.div 
        className="absolute top-20 left-20 w-40 h-40 rounded-full bg-santaran-vermilion/10 mix-blend-multiply"
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 10, 0],
          y: [0, -10, 0],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          repeatType: "reverse" 
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-santaran-jade/10 mix-blend-multiply"
        animate={{ 
          scale: [1, 1.1, 1],
          x: [0, -15, 0],
          y: [0, 15, 0],
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          repeatType: "reverse" 
        }}
      />
      
      <motion.div 
        className="absolute top-1/2 right-1/4 w-20 h-20 rounded-full bg-santaran-amber/10 mix-blend-multiply"
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, 20, 0],
          y: [0, 20, 0],
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          repeatType: "reverse" 
        }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span className="inline-block py-1 px-4 rounded-full bg-santaran-jade/10 text-santaran-jade text-sm font-medium mb-6">
            Santaran Art Organization
          </span>
        </motion.div>
        
        <h1 className="heading-xl text-santaran-teal mb-6 perspective-effect" style={{ perspective: "1000px" }}>
          {title.split('').map((letter, i) => (
            <motion.span
              key={i}
              className="inline-block cursor-default mx-0.5"
              custom={i}
              initial="initial"
              animate="animate"
              whileHover="whileHover"
              variants={letterVariants}
              style={{ 
                transformStyle: "preserve-3d",
                display: "inline-block"
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </h1>
        
        <motion.p 
          className="text-xl max-w-2xl mx-auto text-gray-600 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          Explore our diverse art initiatives that aim to preserve cultural heritage, 
          foster creativity, and create positive social impact through artistic expression.
        </motion.p>
        
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ 
            opacity: { delay: 1.2, duration: 0.7 },
            y: { duration: 1.5, repeat: Infinity, repeatType: "reverse" }
          }}
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight,
              behavior: 'smooth'
            });
          }}
        >
          <div className="flex flex-col items-center">
            <span className="text-sm text-gray-500 mb-2">Discover More</span>
            <ChevronDown className="text-santaran-vermilion h-6 w-6" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramHero;
