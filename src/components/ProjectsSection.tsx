
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ArtisticArrow from '@/components/ArtisticArrow';

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  hasSubprograms?: boolean;
}

const projects: Project[] = [
  {
    id: "harith",
    title: "Harith",
    description: "Immersive outdoor experiences combining art and nature conservation.",
    category: "Environmental Art",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=500",
    hasSubprograms: true
  },
  {
    id: "kalpapuri",
    title: "Kalpapuri",
    description: "Creative education project training the next generation of artists.",
    category: "Children's Art",
    image: "https://images.unsplash.com/photo-1607457561901-e6ec3a6d16cf?q=80&w=500",
    hasSubprograms: true
  },
  {
    id: "shikar",
    title: "Shikar",
    description: "Celebration of traditional folk arts and crafts held every three years.",
    category: "Folk Arts",
    image: "https://images.unsplash.com/photo-1606722590583-6951b5ea92ad?q=80&w=500",
    hasSubprograms: true
  },
  {
    id: "artfactory",
    title: "Art Factory",
    description: "Hosting artists from around the world for cultural exchange and collaboration.",
    category: "Contemporary Art",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=500",
    hasSubprograms: true
  },
  {
    id: "art-bridge",
    title: "Art Bridge",
    description: "International artist exchange program fostering cross-cultural dialogue.",
    category: "International Exchange",
    image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=500"
  },
  {
    id: "digital-aesthetics",
    title: "Digital Aesthetics",
    description: "Exploration of digital and new media art forms including virtual reality.",
    category: "Digital Art",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=500"
  },
  {
    id: "river-traces",
    title: "River Traces",
    description: "Community-based art project exploring Bangladesh's riverine heritage.",
    category: "Community Art",
    image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?q=80&w=500"
  },
  {
    id: "artist-village",
    title: "Artist Village",
    description: "Rural artist residency program facilitating urban-rural artistic collaboration.",
    category: "Residency",
    image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=500"
  }
];

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);

  // Animation variants for text
  const titleContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.1
      }
    }
  };

  const titleCharVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8, rotateY: 90 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200
      }
    }
  };
  
  const categoryVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };
  
  // Project card variants
  const cardVariants = {
    initial: { 
      y: 20, 
      opacity: 0, 
      scale: 0.95,
      boxShadow: "0 0 0 rgba(0, 0, 0, 0)"
    },
    animate: (i: number) => ({ 
      y: 0, 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        delay: i * 0.1,
        stiffness: 100,
        damping: 15
      }
    }),
    hover: {
      y: -8, 
      boxShadow: "0 20px 30px rgba(0, 0, 0, 0.1)",
      transition: { type: "spring", stiffness: 300, damping: 20 }
    }
  };

  // Auto-rotate through projects
  useEffect(() => {
    if (!autoRotate) return;
    
    const interval = setInterval(() => {
      const currentIndex = projects.findIndex(project => project.id === hoveredProject);
      const nextIndex = hoveredProject === null ? 0 : (currentIndex + 1) % projects.length;
      setHoveredProject(projects[nextIndex].id);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [hoveredProject, autoRotate]);

  return (
    <section id="projects" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-br from-santaran-vermilion/5 to-santaran-jade/5 blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-tl from-santaran-amber/5 to-santaran-teal/5 blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-transparent bg-gradient-to-r from-santaran-teal via-santaran-jade to-santaran-vermilion bg-clip-text mb-4">Our Programs</h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-santaran-terracotta via-santaran-gold to-santaran-amber mx-auto rounded-full"></div>
          <p className="mt-6 text-lg max-w-2xl mx-auto text-gray-600">
            Explore our diverse range of programs, each contributing to our mission
            of dignifying life through art and cultural preservation.
          </p>
          
          <div className="mt-6 flex items-center justify-center gap-2">
            <span className="text-sm text-gray-500">Auto-reveal</span>
            <button
              onClick={() => setAutoRotate(!autoRotate)}
              className={`w-12 h-6 rounded-full relative ${autoRotate ? 'bg-santaran-jade' : 'bg-gray-200'}`}
            >
              <motion.div 
                className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full"
                animate={{ x: autoRotate ? 24 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id} 
              className={`
                group relative overflow-hidden rounded-lg 
                transition-all duration-700 transform
                ${hoveredProject === project.id ? 'scale-105' : 'scale-100'}
                ${activeProject === project.id ? 'ring-4 ring-santaran-jade ring-offset-2' : ''}
              `}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => setActiveProject(project.id === activeProject ? null : project.id)}
              variants={cardVariants}
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              custom={index}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
              
              {/* Decorative background shapes */}
              <motion.div 
                className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br from-santaran-vermilion/20 via-santaran-amber/20 to-santaran-teal/10 blur-xl"
                animate={{ 
                  scale: hoveredProject === project.id ? 1.2 : 1,
                  opacity: hoveredProject === project.id ? 1 : 0.5,
                }}
                transition={{ duration: 0.8 }}
              />
              
              <motion.img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-64 object-cover"
                initial={{ scale: 1 }}
                animate={{ 
                  scale: hoveredProject === project.id ? 1.1 : 1,
                  filter: hoveredProject === project.id ? 'brightness(1.1)' : 'brightness(1)'
                }}
                transition={{ duration: 0.7 }}
              />
              
              <motion.div 
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"
                animate={{ 
                  opacity: hoveredProject === project.id ? 1 : 0.7
                }}
                transition={{ duration: 0.5 }}
              />
              
              <div className="absolute bottom-0 left-0 right-0 p-5 z-20 transform">
                <motion.div
                  variants={categoryVariants}
                  initial="initial"
                  animate="animate"
                  className="inline-block px-2 py-1 bg-santaran-terracotta/90 text-white text-xs rounded-full mb-2"
                >
                  {project.category}
                </motion.div>
                
                <motion.div
                  variants={titleContainerVariants}
                  initial="hidden"
                  animate={hoveredProject === project.id ? "visible" : "hidden"}
                  className="mb-2"
                >
                  <h3 className="text-white font-display text-xl font-bold">
                    {project.title.split('').map((char, index) => (
                      <motion.span
                        key={index}
                        variants={titleCharVariants}
                        className="inline-block"
                        style={{ 
                          display: "inline-block",
                          transformStyle: "preserve-3d" 
                        }}
                      >
                        {char === ' ' ? '\u00A0' : char}
                      </motion.span>
                    ))}
                  </h3>
                </motion.div>
                
                <motion.p 
                  className="text-white/80 text-sm mb-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: hoveredProject === project.id ? 1 : 0,
                    y: hoveredProject === project.id ? 0 : 10
                  }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  {project.description}
                </motion.p>
                
                <Link to={`/programs/${project.id}`}>
                  <motion.div 
                    className="flex items-center text-santaran-cream hover:text-santaran-gold transition-colors text-sm font-medium"
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: hoveredProject === project.id ? 1 : 0.7
                    }}
                    transition={{ delay: 0.2 }}
                  >
                    Learn more 
                    <motion.div
                      animate={{ 
                        x: hoveredProject === project.id ? [0, 5] : 0,
                        transition: { 
                          duration: 1, 
                          repeat: hoveredProject === project.id ? Infinity : 0,
                          repeatType: "reverse" 
                        }
                      }}
                    >
                      <ArrowRight size={14} className="ml-1" />
                    </motion.div>
                  </motion.div>
                </Link>
                
                {project.hasSubprograms && (
                  <motion.div
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-santaran-amber flex items-center justify-center shadow-lg"
                    initial={{ scale: 0 }}
                    animate={{ 
                      scale: hoveredProject === project.id ? [1, 1.2] : 1,
                      transition: { 
                        duration: 0.4, 
                        type: "spring",
                        repeat: hoveredProject === project.id ? Infinity : 0,
                        repeatType: "reverse"
                      }
                    }}
                  >
                    <span className="text-xs font-bold text-white">+</span>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/programs"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-santaran-teal to-santaran-jade hover:opacity-90 text-white rounded-full transition-all shadow-lg hover:shadow-xl"
          >
            <span>View All Programs</span>
            <motion.div
              className="ml-2"
              animate={{ 
                x: [0, 5],
                transition: { 
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }
              }}
            >
              <ArtisticArrow direction="right" size="sm" />
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
