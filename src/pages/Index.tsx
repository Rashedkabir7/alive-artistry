
import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowDown, Circle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '@/components/HeroSection';
import StorySection from '@/components/StorySection';
import ProjectsSection from '@/components/ProjectsSection';
import ProgramsSection from '@/components/ProgramsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ 
    target: containerRef,
    offset: ["start start", "end end"] 
  });
  
  // Additional sections data
  const storySections = [
    {
      id: "manifesto",
      title: "Art for Dignifying Life",
      subtitle: "Our Artistic Manifesto",
      content: "Santaran believes in the transformative power of art to dignify human existence. We create bridges between Indigenous knowledge, human ecology, art, culture, mythology, and spirituality.",
      imageUrl: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?q=80&w=1200",
      imagePosition: "right" as const,
      backgroundColor: "bg-santaran-teal/10"
    },
    {
      id: "journey",
      title: "Our Journey Since 1998",
      subtitle: "From Roots to Canopy",
      content: "Like the sacred Banyan tree, our journey is rooted deeply in Chittagong soil while our branches extend through collaborative artistic interventions across Bangladesh and beyond.",
      imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200",
      imagePosition: "left" as const,
      backgroundColor: "bg-santaran-terracotta/10"
    },
    {
      id: "vision",
      title: "Yanbriksha",
      subtitle: "The Banyan Tree of Knowledge",
      content: "Our artistic philosophy is like the 'Yanbriksha' - a Banyan tree of knowledge rooted to the ground, yet spreading its branches across the sky, connecting earth and heaven.",
      imageUrl: "https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=1200",
      imagePosition: "right" as const,
      backgroundColor: "bg-santaran-gold/10"
    }
  ];
  
  useEffect(() => {
    // Preload animations and assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    // Smooth scroll behavior for hash links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href')?.substring(1);
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
    
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let currentActive = 0;
      
      sections.forEach((section, index) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight / 2) {
          currentActive = index;
        }
      });
      
      setCurrentSection(currentActive);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (isLoading) {
    return (
      <motion.div 
        className="fixed inset-0 flex items-center justify-center bg-santaran-cream z-50"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <div className="relative">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-center"
          >
            <div className="relative mb-8">
              <motion.img
                src="/lovable-uploads/e04b0dc7-2eda-4b22-b81d-9d2151bc534f.png"
                alt="Santaran Art Organization"
                className="w-40 h-40 mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              />
              <motion.div 
                className="absolute -bottom-4 -right-4 w-full h-full rounded-full border-2 border-santaran-terracotta/40"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1.2, opacity: 0.8 }}
                transition={{ delay: 0.5, duration: 1, repeat: Infinity, repeatType: "mirror" }}
              />
            </div>
            <motion.h1 
              className="font-display text-3xl text-santaran-teal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Santaran Art Organization
            </motion.h1>
            <motion.p
              className="text-santaran-terracotta mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Art for Dignifying Life
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="relative overflow-x-hidden" ref={containerRef}>
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Manifesto & Story Sections */}
      {storySections.map((section) => (
        <StorySection 
          key={section.id}
          id={section.id}
          title={section.title}
          subtitle={section.subtitle}
          content={section.content}
          imageUrl={section.imageUrl}
          imagePosition={section.imagePosition}
          backgroundColor={section.backgroundColor}
        />
      ))}
      
      {/* Programs Section */}
      <ProgramsSection />
      
      {/* Projects Showcase */}
      <ProjectsSection />
      
      {/* Testimonials */}
      <TestimonialsSection />
      
      {/* Contact Section */}
      <ContactSection />
      
      {/* Interactive Sidebar Navigation */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden md:block">
        <div className="flex flex-col items-center space-y-6">
          {["home", "manifesto", "journey", "vision", "programs", "projects", "testimonials", "contact"].map((id, index) => (
            <motion.button
              key={id}
              onClick={() => {
                const element = document.getElementById(id === "home" ? "root" : id);
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSection === index 
                  ? "bg-santaran-terracotta scale-125" 
                  : "bg-santaran-teal/40 hover:bg-santaran-teal"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Navigate to ${id} section`}
            />
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
