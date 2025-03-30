
import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Timeline from '../components/Timeline';
import StorySection from '../components/StorySection';
import { useInView } from 'framer-motion';

const About = () => {
  const { scrollYProgress } = useScroll();
  const opacityProgress = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const mainRef = useRef(null);
  const isInView = useInView(mainRef, { once: true });
  
  return (
    <div className="bg-santaran-cream">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="w-full h-full"
            style={{ 
              backgroundImage: 'url(https://images.unsplash.com/photo-1493397212122-2b85dda8106b?q=80&w=2000)', 
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-santaran-cream/90"></div>
        </div>
        
        <div className="container relative z-10 px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-white heading-xl mb-6">Our Journey</h1>
            <p className="text-white/90 text-xl md:text-2xl mb-8">
              Since 1998, Santaran has been creating bridges between Indigenous knowledge,
              human ecology, art, culture, mythology, and spirituality.
            </p>
          </motion.div>
          
          <motion.div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ 
              y: [0, 10, 0], 
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          >
            <ChevronDown size={36} className="text-white" />
          </motion.div>
        </div>
      </section>
      
      {/* Origin Story */}
      <StorySection 
        title="Our Roots"
        subtitle="Where the Journey Began"
        content="Santaran was born in Chittagong, Bangladesh in 1998, from a collective vision of artists who wanted to dignify human life through art. The name 'Santaran' meaning 'swimming' in Bengali symbolizes our continuous journey through the currents of art and culture."
        imageUrl="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?q=80&w=1200"
        imagePosition="right"
        backgroundColor="bg-santaran-teal/5"
      />
      
      {/* Journey Timeline */}
      <section className="py-24" ref={mainRef}>
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg text-santaran-teal mb-4">Our Timeline</h2>
            <div className="w-24 h-1 bg-santaran-terracotta mx-auto"></div>
            <p className="mt-6 text-lg max-w-2xl mx-auto">
              Explore our artistic journey through the years, marking significant milestones 
              and creative interventions that have shaped our identity.
            </p>
          </motion.div>
          
          <Timeline />
        </div>
      </section>
      
      {/* Philosophy Section */}
      <StorySection 
        title="Yanbriksha Philosophy"
        subtitle="The Banyan Tree of Knowledge"
        content="Our artistic philosophy is rooted in the symbol of 'Yanbriksha' - a Banyan tree of knowledge with roots firmly grounded to earth, branches spread across the sky, connecting the material and spiritual realms. This philosophy guides our approach to art as a medium for preserving indigenous knowledge while embracing contemporary expressions."
        imageUrl="https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=1200"
        imagePosition="left"
        backgroundColor="bg-santaran-gold/10"
      />
      
      {/* Team Section with Artistic Approach */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg text-santaran-teal mb-4">The Collective</h2>
            <div className="w-24 h-1 bg-santaran-terracotta mx-auto"></div>
            <p className="mt-6 text-lg max-w-2xl mx-auto">
              Our artistic community brings diverse perspectives and skills to create 
              meaningful interventions through collaborative practices.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
            {[
              {
                name: "Mahbubur Rahman",
                role: "Founder & Artistic Director",
                bio: "Artist and cultural activist leading Santaran's vision since its inception.",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300"
              },
              {
                name: "Tayeba Begum Lipi",
                role: "Co-founder & Program Director",
                bio: "Contemporary artist focusing on cultural preservation through artistic expression.",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300"
              },
              {
                name: "Abdul Hakim",
                role: "Senior Artist & Mentor",
                bio: "Specializing in indigenous art forms and traditional techniques.",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="relative mt-6">
                    <h3 className="text-2xl font-display font-semibold">{member.name}</h3>
                    <p className="text-santaran-terracotta">{member.role}</p>
                    <p className="mt-2 text-gray-600">{member.bio}</p>
                    <div className="h-0.5 w-0 bg-santaran-teal mt-3 transition-all duration-300 group-hover:w-16"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
