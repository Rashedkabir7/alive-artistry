
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
              src="https://images.unsplash.com/photo-1578926288207-ad2a2e19fa05?q=80&w=800" 
              alt="Traditional folk art exhibition" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          <motion.div
            className="rounded-lg overflow-hidden aspect-square shadow-lg"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1551966775-a4ddc8df052b?q=80&w=800" 
              alt="Children's art workshop" 
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
              src="https://images.unsplash.com/photo-1490971588422-52f6262a237a?q=80&w=800" 
              alt="Cultural art event" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          <motion.div
            className="rounded-lg overflow-hidden aspect-[3/4] shadow-lg"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800" 
              alt="Environmental art installation" 
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
