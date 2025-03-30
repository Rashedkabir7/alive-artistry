
import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowDown, Circle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Index = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ 
    target: containerRef,
    offset: ["start start", "end end"] 
  });
  
  // Parallax values for different elements
  const heroTextY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const heroImageScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.15]);
  const opacityProgress = useTransform(scrollYProgress, [0.8, 1], [1, 0]);
  
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
    
    return () => clearTimeout(timer);
  }, []);

  // Section data
  const sections = [
    {
      id: "manifesto",
      title: "Art for Dignifying Life",
      subtitle: "Our Artistic Manifesto",
      content: "Santaran believes in the transformative power of art to dignify human existence. We create bridges between Indigenous knowledge, human ecology, art, culture, mythology, and spirituality.",
      backgroundClass: "bg-santaran-teal/10",
      textColorClass: "text-santaran-teal",
      imageUrl: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?q=80&w=1200"
    },
    {
      id: "journey",
      title: "Our Journey Since 1998",
      subtitle: "From Roots to Canopy",
      content: "Like the sacred Banyan tree, our journey is rooted deeply in Chittagong soil while our branches extend through collaborative artistic interventions across Bangladesh and beyond.",
      backgroundClass: "bg-santaran-terracotta/10",
      textColorClass: "text-santaran-terracotta",
      imageUrl: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?q=80&w=1200"
    },
    {
      id: "vision",
      title: "Yanbriksha",
      subtitle: "The Banyan Tree of Knowledge",
      content: "Our artistic philosophy is like the 'Yanbriksha' - a Banyan tree of knowledge rooted to the ground, yet spreading its branches across the sky, connecting earth and heaven.",
      backgroundClass: "bg-santaran-gold/10",
      textColorClass: "text-santaran-brown",
      imageUrl: "https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=1200"
    }
  ];
  
  // Handle section navigation
  const handleSectionChange = (index: number) => {
    setCurrentSection(index);
    const element = document.getElementById(sections[index].id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
                src="/public/lovable-uploads/e04b0dc7-2eda-4b22-b81d-9d2151bc534f.png"
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
      
      {/* Hero Section with Parallax */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div
            className="w-full h-full"
            style={{ 
              backgroundImage: 'url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2000)', 
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              scale: heroImageScale
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-santaran-cream/90"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            style={{ y: heroTextY }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h4 className="text-santaran-gold font-medium tracking-wide text-lg mb-2">Since 1998</h4>
              <h1 className="heading-xl text-white mb-6 leading-tight">
                Santaran Art Organization
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/80 max-w-2xl mx-auto">
                Connecting Indigenous Knowledge, Human Ecology, Art & Culture, 
                Mythology & Spirituality Through Artistic Expression
              </p>
              
              <div className="flex flex-wrap gap-6 justify-center mt-12">
                <motion.a
                  href="#manifesto"
                  className="relative group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="absolute inset-0 rounded-full bg-santaran-terracotta blur-sm group-hover:blur-md transition-all duration-300"></span>
                  <span className="relative block px-8 py-3 bg-santaran-terracotta text-white rounded-full">
                    Discover Our Story
                  </span>
                </motion.a>
                
                <motion.a
                  href="#programs"
                  className="relative group border-2 border-white px-8 py-3 text-white rounded-full hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Explore Programs
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 1.2,
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          >
            <ArrowDown size={28} className="text-white/80" />
          </motion.div>
        </div>
      </section>
      
      {/* Manifesto & Story Sections */}
      {sections.map((section, index) => (
        <section 
          key={section.id}
          id={section.id}
          className={`min-h-screen flex items-center py-24 ${section.backgroundClass}`}
        >
          <div className="container mx-auto px-4">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-block">
                  <div className={`w-16 h-1 ${section.textColorClass}`}></div>
                  <h3 className={`mt-4 font-medium text-xl ${section.textColorClass}`}>{section.subtitle}</h3>
                </div>
                
                <h2 className="heading-lg">{section.title}</h2>
                
                <p className="text-xl leading-relaxed">
                  {section.content}
                </p>
                
                <motion.a
                  href={`#${section.id}-more`}
                  className={`inline-flex items-center text-lg font-medium ${section.textColorClass} hover:underline`}
                  whileHover={{ x: 5 }}
                >
                  Learn more
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </motion.a>
              </motion.div>
              
              <motion.div
                className="relative overflow-hidden rounded-xl group"
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={section.imageUrl}
                    alt={section.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <p className="text-white font-display text-lg">{section.title}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}
      
      {/* Interactive Programs Section */}
      <section id="programs" className="py-24 bg-gradient-to-b from-santaran-cream to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="heading-lg text-santaran-teal mb-4">Our Pillars of Creation</h2>
            <div className="w-24 h-1 bg-santaran-terracotta mx-auto"></div>
            <p className="mt-6 text-lg max-w-2xl mx-auto">
              Through these four interconnected programs, we nurture art that respects both 
              human dignity and our relationship with the environment.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                id: "harith",
                title: "Harith",
                description: "Environmental art development focusing on ecological awareness and sustainability through creative expression.",
                icon: "🌿",
                color: "teal"
              },
              {
                id: "kalpapuri",
                title: "Kalpapuri",
                description: "Nurturing children's art and psychology through artistic exploration and creative learning.",
                icon: "👧",
                color: "terracotta"
              },
              {
                id: "shikar",
                title: "Shikar",
                description: "Preservation and development of folk arts and crafts to protect cultural heritage and traditional art forms.",
                icon: "🧶",
                color: "gold"
              },
              {
                id: "artfactory",
                title: "Art Factory",
                description: "A collaborative space for young artists to experiment and showcase innovative artistic approaches.",
                icon: "🎨",
                color: "brown"
              }
            ].map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="program-card group hover:bg-santaran-cream/50"
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className={`text-5xl mb-6 transition-transform duration-300 group-hover:scale-125`}>
                  {program.icon}
                </div>
                <h3 className={`heading-sm text-santaran-${program.color} mb-3`}>{program.title}</h3>
                <p className="text-gray-600">{program.description}</p>
                <motion.div 
                  className={`mt-6 h-1 w-0 bg-santaran-${program.color} transition-all duration-300 group-hover:w-full`}
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Projects Showcase */}
      <section id="projects" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="heading-lg text-santaran-teal mb-4">Our Living Projects</h2>
            <div className="w-24 h-1 bg-santaran-terracotta mx-auto"></div>
            <p className="mt-6 text-lg max-w-2xl mx-auto">
              Explore the diverse range of projects under our programs, each contributing to our mission
              of dignifying life through art and cultural preservation.
            </p>
          </motion.div>
          
          <div className="relative">
            <motion.div 
              className="flex space-x-6 overflow-x-auto pb-8 snap-x snap-mandatory"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {[
                {
                  id: "env-art-camp",
                  title: "Environmental Art Camp",
                  description: "Immersive outdoor experiences combining art and nature conservation.",
                  category: "Harith",
                  image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=500"
                },
                {
                  id: "dharitri",
                  title: "Dharitri",
                  description: "Eco-tourism project promoting sustainable travel and environmental awareness.",
                  category: "Harith",
                  image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=500"
                },
                {
                  id: "kalpaloker",
                  title: "Kalpaloker Citra",
                  description: "Workshop projects for children to explore creativity and artistic expression.",
                  category: "Kalpapuri",
                  image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?q=80&w=500"
                },
                {
                  id: "kalpapuri-school",
                  title: "Kalpapuri School of Arts & Crafts",
                  description: "Creative education project training the next generation of artists.",
                  category: "Kalpapuri",
                  image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&w=500"
                },
                {
                  id: "folk-triennial",
                  title: "Karnaphuli Folk Triennial",
                  description: "Celebration of traditional folk arts and crafts held every three years.",
                  category: "Shikar",
                  image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?q=80&w=500"
                },
                {
                  id: "kandrabindu",
                  title: "Kandrabindu",
                  description: "Project of product design, development & marketing of traditional crafts.",
                  category: "Shikar",
                  image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=500"
                }
              ].map((project, index) => (
                <motion.div
                  key={project.id}
                  className="min-w-[300px] md:min-w-[400px] snap-center"
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="relative group overflow-hidden rounded-xl h-64 md:h-80">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300 z-10"></div>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="inline-block px-2 py-1 bg-santaran-terracotta/90 text-white text-xs rounded mb-2">
                        {project.category}
                      </span>
                      <h3 className="text-white font-display text-xl mb-1">{project.title}</h3>
                      <p className="text-white/80 text-sm mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {project.description}
                      </p>
                      <a 
                        href={`#project-${project.id}`} 
                        className="inline-flex items-center text-santaran-cream hover:text-santaran-gold transition-colors text-sm font-medium"
                      >
                        Explore project
                        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <div className="absolute top-1/2 -left-16 transform -translate-y-1/2 text-santaran-teal opacity-60">
              <Circle size={160} strokeWidth={0.5} />
            </div>
            
            <div className="absolute -bottom-20 -right-20 text-santaran-terracotta opacity-20">
              <Circle size={240} strokeWidth={0.5} />
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <motion.a 
              href="/gallery"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center px-8 py-3 bg-santaran-teal text-white rounded-full hover:bg-santaran-teal/90 transition-colors"
            >
              Explore Our Gallery
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </motion.a>
          </div>
        </div>
      </section>
      
      {/* Interactive Sidebar Navigation */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden md:block">
        <div className="flex flex-col items-center space-y-6">
          {["home", "manifesto", "journey", "vision", "programs", "projects"].map((id, index) => (
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
