
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Palette, Sparkles, Leaf } from 'lucide-react';
import AnimatedHeading from '@/components/AnimatedHeading';

interface StorySectionProps {
  id?: string;
  title: string;
  subtitle: string;
  content: string;
  imageUrl: string;
  imagePosition: 'left' | 'right';
  backgroundColor?: string;
}

const StorySection: React.FC<StorySectionProps> = ({
  id,
  title,
  subtitle,
  content,
  imageUrl,
  imagePosition,
  backgroundColor = 'bg-white'
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.9], [0, 1, 1]);
  const x = useTransform(
    scrollYProgress, 
    [0, 0.3, 0.9], 
    [imagePosition === 'left' ? -100 : 100, 0, 0]
  );
  const imageScale = useTransform(
    scrollYProgress, 
    [0, 0.3, 0.9], 
    [0.8, 1, 1]
  );
  const textX = useTransform(
    scrollYProgress, 
    [0, 0.3, 0.9], 
    [imagePosition === 'left' ? 100 : -100, 0, 0]
  );
  const rotate = useTransform(
    scrollYProgress, 
    [0, 0.3], 
    [imagePosition === 'left' ? 5 : -5, 0]
  );

  // Random artistic icon based on section
  const getRandomIcon = () => {
    const icons = [
      <Palette className="text-santaran-vermilion/70" size={24} />,
      <Sparkles className="text-santaran-amber/70" size={24} />,
      <Leaf className="text-santaran-jade/70" size={24} />
    ];
    return icons[Math.floor(Math.random() * icons.length)];
  };

  return (
    <motion.section 
      id={id}
      ref={sectionRef}
      className={`py-32 ${backgroundColor} overflow-hidden`}
      style={{ opacity }}
    >
      <div className="container mx-auto px-4">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${imagePosition === 'left' ? '' : 'lg:flex-row-reverse'}`}>
          {/* Image Section */}
          <motion.div
            className="relative"
            style={{ 
              x,
              scale: imageScale,
              rotate,
            }}
          >
            <div className="relative overflow-hidden rounded-lg group">
              <div className="aspect-[4/3] overflow-hidden">
                <motion.img
                  src={imageUrl}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  whileHover={{ scale: 1.05 }}
                />
              </div>
              
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80"
                whileHover={{ opacity: 0.4 }}
                transition={{ duration: 0.3 }}
              />
              
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-2">
                  <motion.div 
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 5, repeat: Infinity }}
                  >
                    {getRandomIcon()}
                  </motion.div>
                  <h3 className="text-white font-display text-2xl">{subtitle}</h3>
                </div>
              </motion.div>
            </div>
            
            {/* Enhanced decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-4 border-r-4 border-santaran-terracotta opacity-60 hidden md:block" />
            <div className="absolute -top-6 -left-6 w-24 h-24 border-t-4 border-l-4 border-santaran-teal opacity-60 hidden md:block" />
            
            {/* Floating artistic dots */}
            <motion.div
              className="absolute -top-8 right-8 w-6 h-6 rounded-full bg-santaran-amber/30"
              animate={{ 
                y: [0, -15, 0],
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            
            <motion.div
              className="absolute -bottom-4 left-10 w-4 h-4 rounded-full bg-santaran-vermilion/30"
              animate={{ 
                y: [0, 10, 0],
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            />
          </motion.div>
          
          {/* Text Section */}
          <motion.div 
            className="space-y-8"
            style={{ x: textX }}
          >
            <div className="inline-block relative">
              <motion.div 
                className={`w-16 h-1 bg-santaran-terracotta`}
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              
              <motion.h3 
                className="mt-4 font-medium text-xl text-santaran-terracotta"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {subtitle}
              </motion.h3>
            </div>
            
            <AnimatedHeading
              text={title}
              tag="h2"
              className="heading-lg"
              color="text-santaran-teal"
              animation="letter-by-letter"
            />
            
            <motion.p 
              className="text-xl leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {content}
            </motion.p>
            
            <motion.div 
              className="h-0.5 w-0 bg-santaran-teal"
              whileInView={{ width: "60%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
            />
            
            <motion.a
              href={`#${id}-more`}
              className="inline-flex items-center text-lg font-medium text-santaran-teal group"
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span>Learn more</span>
              <motion.span 
                className="ml-2 transform transition-transform"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.a>
            
            {/* Artistic floating element */}
            <motion.div
              className="absolute bottom-10 right-0 text-santaran-teal/10 hidden lg:block"
              style={{ fontSize: "120px", fontFamily: "serif", fontWeight: "bold" }}
              animate={{ 
                opacity: [0.1, 0.2, 0.1],
                rotate: [0, 5, 0]
              }}
              transition={{ duration: 8, repeat: Infinity }}
            >
              A
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default StorySection;
