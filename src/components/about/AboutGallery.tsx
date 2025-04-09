
import React from 'react';
import { motion } from 'framer-motion';

const AboutGallery: React.FC = () => {
  return (
    <motion.div 
      className="relative"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-4">
          <motion.div
            className="rounded-lg overflow-hidden aspect-[3/4] shadow-lg"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src="/lovable-uploads/d4c3be64-52f3-4bb2-b9a9-753a1adb0f1d.png" 
              alt="Folk art exhibition by Santaran" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          <motion.div
            className="rounded-lg overflow-hidden aspect-square shadow-lg"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src="/lovable-uploads/887da09b-bba4-4dc6-bd86-4b7ee23ccaba.png" 
              alt="Children's art workshop at Kalpapuri" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
        
        <div className="space-y-4 mt-6">
          <motion.div
            className="rounded-lg overflow-hidden aspect-square shadow-lg"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src="/lovable-uploads/ae063821-89d9-4a5e-93b4-557f6be0e877.png" 
              alt="Karnaphuli Folk Triennial cultural performance" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          <motion.div
            className="rounded-lg overflow-hidden aspect-[3/4] shadow-lg"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src="/lovable-uploads/caa29365-e9b3-4edf-8838-882a1f05f9d9.png" 
              alt="Environmental art installation from Horith program" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
      
      {/* Artistic caption */}
      <motion.div
        className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-lg"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <p className="text-santaran-teal italic font-medium text-center">
          "Through art, we preserve heritage and shape the future"
        </p>
      </motion.div>
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute -top-6 -right-6 w-24 h-24 bg-santaran-gold/20 rounded-full -z-10"
        animate={{ 
          scale: [1, 1.2],
          opacity: [0.2, 0.3]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute -bottom-6 -left-6 w-32 h-32 bg-santaran-terracotta/10 rounded-full -z-10"
        animate={{ 
          scale: [1, 1.15],
          opacity: [0.1, 0.2]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 1
        }}
      />
    </motion.div>
  );
};

export default AboutGallery;
