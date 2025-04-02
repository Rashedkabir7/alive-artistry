
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Palette, Heart, Leaf } from 'lucide-react';
import AnimatedHeading from '@/components/AnimatedHeading';

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2, 1], [100, 0, 0]);
  
  const philosophyOpacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);
  const philosophyScale = useTransform(scrollYProgress, [0, 0.3, 1], [0.8, 1, 1]);
  
  return (
    <motion.section 
      id="about" 
      ref={sectionRef}
      className="py-24 bg-white relative overflow-hidden"
      style={{ opacity }}
    >
      {/* Artistic background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-santaran-cream/40 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-santaran-jade/10 rounded-full blur-3xl -z-10 transform -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16 relative">
          <motion.div
            animate={{ 
              rotate: [0, 360]
            }}
            transition={{ 
              duration: 15, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute -z-10 opacity-5"
          >
            <Palette size={280} />
          </motion.div>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="h-1 bg-gradient-to-r from-santaran-vermilion to-santaran-amber mb-8"
          />
          
          <AnimatedHeading
            text="About Santaran"
            tag="h2"
            className="heading-lg mb-6 text-center"
            color="text-santaran-teal"
            animation="wave"
            staggerDelay={0.05}
            duration={0.7}
          />
          
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-santaran-amber to-santaran-teal mx-auto mb-10"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="space-y-6"
            style={{ y }}
          >
            <div className="relative">
              <motion.span 
                className="absolute -left-8 -top-8 text-5xl font-display text-santaran-terracotta/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                "
              </motion.span>
              
              <motion.p 
                className="text-lg leading-relaxed relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <span className="font-bold text-santaran-terracotta text-xl">"Art for Dignifying Life"</span> is the vision of Santaran Art Organization. Santaran means swimming,
                it is Bengali words. As a group of artists Santaran has been continuing its journey since 1998.
              </motion.p>
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
              In 2008 it got the registration under the Ministry of Social Welfare, People's Republic of Bangladesh
              as 'Santaran Art Organization', nonprofit multidisciplinary artist run organization.
            </motion.p>
            
            <motion.div
              className="relative pl-6 border-l-2 border-santaran-amber/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <p className="text-lg leading-relaxed italic">
                Santaran Art Organization is continuing its journey from Chittagong, Bangladesh with the hope and mission to
                shape the artistic values regarding local reality, Indigenous knowledge, human ecology, art & culture, 
                mythology & spirituality of local people and environment in a more defined artistic way.
              </p>
            </motion.div>
            
            <motion.p 
              className="text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              Santaran is trying to guide people to acquire art as the strongest medium for their better living.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="relative"
            style={{ 
              opacity: philosophyOpacity,
              scale: philosophyScale
            }}
          >
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
              <div className="bg-santaran-cream p-10 rounded-lg border-2 border-santaran-teal/20 fancy-border artistic-card">
                <motion.div 
                  className="absolute -right-10 -top-10 text-santaran-amber opacity-10"
                  animate={{ 
                    rotate: [0, 360] 
                  }}
                  transition={{ 
                    duration: 20, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                >
                  <Leaf size={120} />
                </motion.div>
                
                <AnimatedHeading
                  text="Our Philosophy"
                  tag="h3"
                  className="heading-md text-santaran-terracotta mb-6"
                  color="text-santaran-terracotta"
                  animation="letter-by-letter"
                  staggerDelay={0.08}
                />
                
                <motion.div 
                  className="w-16 h-1 bg-santaran-amber mb-6"
                  initial={{ width: 0 }}
                  whileInView={{ width: '4rem' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                />
                
                <motion.p 
                  className="text-lg mb-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  Santaran believes that through our activities our artistic philosophy will become the 
                  <motion.span 
                    className="font-bold text-santaran-teal italic ml-1"
                    whileHover={{ 
                      scale: 1.05,
                      color: "#DE4D31"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    'Yanbriksha'
                  </motion.span> 
                  <motion.span className="ml-1">
                    (alike a Banyan tree of knowledge) which is rooted to the ground but spreading its branches all over the sky.
                  </motion.span>
                </motion.p>
                
                <div className="flex items-center justify-center">
                  <motion.div 
                    className="flex items-center justify-center"
                    animate={{ 
                      scale: [1, 1.1],
                      opacity: [0.7, 1]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse" as const,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="w-16 h-16 rounded-full bg-santaran-teal/10 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-santaran-teal/20 flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-santaran-teal/30 flex items-center justify-center">
                          <div className="w-4 h-4 rounded-full bg-santaran-teal"></div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
            
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
                repeatType: "reverse" as const,
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
                repeatType: "reverse" as const,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
