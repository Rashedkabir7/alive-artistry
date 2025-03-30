
import React from 'react';
import { motion } from 'framer-motion';

interface StorySectionProps {
  title: string;
  subtitle: string;
  content: string;
  imageUrl: string;
  imagePosition: 'left' | 'right';
  backgroundColor?: string;
}

const StorySection: React.FC<StorySectionProps> = ({
  title,
  subtitle,
  content,
  imageUrl,
  imagePosition,
  backgroundColor = 'bg-white'
}) => {
  return (
    <section className={`py-24 ${backgroundColor}`}>
      <div className="container mx-auto px-4">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${imagePosition === 'left' ? '' : 'lg:flex-row-reverse'}`}>
          {/* Image Section */}
          <motion.div
            className="relative overflow-hidden rounded-lg"
            initial={{ opacity: 0, x: imagePosition === 'left' ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          </motion.div>
          
          {/* Text Section */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: imagePosition === 'left' ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-block">
              <div className="w-16 h-1 bg-santaran-terracotta"></div>
              <h3 className="mt-4 font-medium text-xl text-santaran-terracotta">{subtitle}</h3>
            </div>
            
            <h2 className="heading-lg">{title}</h2>
            
            <p className="text-xl leading-relaxed">
              {content}
            </p>
            
            <motion.div 
              className="h-0.5 w-0 bg-santaran-teal transition-all duration-700"
              whileInView={{ width: "60%" }}
              viewport={{ once: true }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
