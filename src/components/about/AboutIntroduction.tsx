
import React from 'react';
import { motion, MotionValue } from 'framer-motion';
import { Heart } from 'lucide-react';
import AboutGallery from './AboutGallery';

interface AboutIntroductionProps {
  y: MotionValue<number>;
}

const AboutIntroduction: React.FC<AboutIntroductionProps> = ({ y }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
      {/* Left column with text */}
      <motion.div 
        className="space-y-6"
        style={{ y }}
      >
        <div className="relative">
          <motion.span 
            className="absolute -left-8 -top-8 text-7xl font-display text-santaran-terracotta/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            "
          </motion.span>
          
          <motion.div 
            className="text-lg leading-relaxed relative pl-6 border-l-4 border-santaran-vermilion/30 italic"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-bold text-santaran-terracotta text-2xl font-display block mb-3">"Art for Dignifying Life"</span>
            <p>This is the vision of Santaran Art Organization. "Santaran" means swimming in Bengali. 
            As a group of passionate artists, Santaran has been continuing its journey since 1998.</p>
          </motion.div>
        </div>
        
        <motion.div 
          className="flex items-center gap-3 my-8"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="h-px bg-santaran-jade/30 flex-grow"></div>
          <Heart className="text-santaran-vermilion" size={18} />
          <div className="h-px bg-santaran-jade/30 flex-grow"></div>
        </motion.div>
        
        <motion.p 
          className="text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          In 2008, Santaran achieved official recognition under the Ministry of Social Welfare, People's Republic of Bangladesh,
          as a nonprofit multidisciplinary artist-run organization dedicated to cultural preservation and artistic development.
        </motion.p>
        
        <motion.p 
          className="text-lg leading-relaxed pl-6 border-l-2 border-santaran-amber/60 italic bg-gradient-to-br from-santaran-jade to-santaran-teal bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Santaran Art Organization is continuing its journey from Chittagong, Bangladesh with the hope and mission to
          shape the artistic values regarding local reality, Indigenous knowledge, human ecology, art & culture, mythology 
          & spirituality of local people and environment in a more defined artistic way.
        </motion.p>
        
        <motion.p 
          className="text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          Santaran is trying to guide people to acquire art as the strongest medium for their better living
          through our diverse programs and initiatives, making art accessible to all and enriching lives through creative expression.
        </motion.p>
      </motion.div>
      
      {/* Right column with image showcase */}
      <AboutGallery />
    </div>
  );
};

export default AboutIntroduction;
