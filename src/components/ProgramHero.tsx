
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import AnimatedHeading from '@/components/AnimatedHeading';

const ProgramHero: React.FC = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };
  
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
        
        <AnimatedHeading 
          text="Our Programs"
          tag="h1"
          className="heading-xl mb-6"
          color="text-santaran-teal"
          animation="wave"
        />
        
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
          onClick={scrollToContent}
        >
          <div className="flex flex-col items-center">
            <span className="text-sm text-gray-500 mb-2">Discover More</span>
            <motion.div
              animate={{ 
                y: [0, 5, 0],
                transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <svg className="h-6 w-6 text-santaran-vermilion" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramHero;
