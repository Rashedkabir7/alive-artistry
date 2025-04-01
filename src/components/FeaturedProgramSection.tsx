
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { useNavigate } from 'react-router-dom';

interface Program {
  id: string;
  title: string;
  description: string;
  category: string;
  year: string;
  image: string;
  link: string;
}

const programs: Program[] = [
  {
    id: "harith",
    title: "Harith",
    description: "Our flagship environmental art program focusing on ecological awareness and sustainability through creative expression. Artists engage with environmental issues through installations, workshops, and community projects.",
    category: "Environmental Art",
    year: "2023",
    image: "/lovable-uploads/ab8abc5e-5120-4d3b-acd0-73c7a45a5cd7.png",
    link: "/programs#harith"
  },
  {
    id: "kalpapuri",
    title: "Kalpapuri",
    description: "A program dedicated to children's art education and psychological development through artistic expression. We create safe spaces for young minds to explore creativity and build confidence.",
    category: "Children's Art",
    year: "2021",
    image: "https://images.unsplash.com/photo-1551038247-3d9af20df552?q=80&w=1200",
    link: "/programs#kalpapuri"
  },
  {
    id: "shikar",
    title: "Shikar",
    description: "Preserving traditional folk arts and crafts of Bangladesh through documentation, training workshops, and exhibitions. We work with master artisans to pass down endangered cultural practices to new generations.",
    category: "Folk Arts",
    year: "2019",
    image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?q=80&w=1200",
    link: "/programs#shikar"
  },
  {
    id: "artfactory",
    title: "Art Factory",
    description: "An incubator for experimental contemporary art practices that pushes boundaries and explores new artistic territories. Young artists collaborate on innovative projects across various media.",
    category: "Contemporary Art",
    year: "2022",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200",
    link: "/programs#artfactory"
  }
];

const FeaturedProgramSection: React.FC = () => {
  const [activeProgram, setActiveProgram] = useState<string>(programs[0].id);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const navigate = useNavigate();

  const currentProgram = programs.find(prog => prog.id === activeProgram) || programs[0];

  const goToNextProgram = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    const currentIndex = programs.findIndex(prog => prog.id === activeProgram);
    const nextIndex = (currentIndex + 1) % programs.length;
    setActiveProgram(programs[nextIndex].id);
    setTimeout(() => setIsAnimating(false), 700);
  };

  const goToPrevProgram = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    const currentIndex = programs.findIndex(prog => prog.id === activeProgram);
    const prevIndex = (currentIndex - 1 + programs.length) % programs.length;
    setActiveProgram(programs[prevIndex].id);
    setTimeout(() => setIsAnimating(false), 700);
  };

  const handleProgramChange = (value: string) => {
    if (value && value !== activeProgram && !isAnimating) {
      setIsAnimating(true);
      setActiveProgram(value);
      setTimeout(() => setIsAnimating(false), 700);
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20, rotateY: 90 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.6,
        type: "spring",
        stiffness: 100,
        damping: 12
      },
    }),
    hover: (i: number) => ({
      y: [0, -8, 0],
      color: ["#2A7D6A", "#D96941", "#F9A826", "#2A7D6A"],
      scale: [1, 1.2, 1],
      transition: {
        duration: 0.8,
        delay: i * 0.03,
        repeat: 0,
        repeatType: "mirror" as const,
        ease: "easeInOut"
      }
    })
  };

  const handleLearnMoreClick = () => {
    navigate(currentProgram.link);
  };

  return (
    <section className="py-20 px-4 md:px-8 lg:px-12 bg-santaran-cream relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-santaran-vermilion/5 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-santaran-jade/5 blur-3xl"></div>
      
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <motion.div 
              key={activeProgram + "-text"}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.7 }}
              className="h-full flex flex-col justify-center"
            >
              <div className="mb-6">
                <span className="inline-block py-1 px-4 rounded-full bg-santaran-vermilion/10 text-santaran-vermilion text-xs font-medium">
                  Featured Program
                </span>
                <h3 className="mt-4 mb-2 text-santaran-amber">
                  {currentProgram.category} • {currentProgram.year}
                </h3>
                <h2 className="heading-md text-santaran-teal mb-3" style={{ perspective: "800px" }}>
                  {currentProgram.title.split('').map((letter, i) => (
                    <motion.span
                      key={i}
                      custom={i}
                      variants={letterVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover="hover"
                      className="inline-block cursor-pointer"
                      style={{ 
                        display: "inline-block",
                        transformOrigin: "center",
                        transformStyle: "preserve-3d"
                      }}
                    >
                      {letter === ' ' ? '\u00A0' : letter}
                    </motion.span>
                  ))}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-santaran-vermilion to-santaran-amber"></div>
              </div>
              
              <motion.p 
                className="text-gray-600 mb-8"
                key={activeProgram + "-desc"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                {currentProgram.description}
              </motion.p>
              
              <div className="flex items-center gap-4">
                <Button onClick={handleLearnMoreClick}>
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                
                <div className="flex items-center space-x-2">
                  <button 
                    onClick={goToPrevProgram} 
                    className="p-2 rounded-full border border-gray-300 hover:bg-white hover:border-santaran-jade transition-colors"
                    disabled={isAnimating}
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </button>
                  <button 
                    onClick={goToNextProgram} 
                    className="p-2 rounded-full border border-gray-300 hover:bg-white hover:border-santaran-jade transition-colors"
                    disabled={isAnimating}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <div className="relative">
              <motion.div
                key={activeProgram + "-image"}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="artistic-card fancy-border canvas-texture aspect-square"
              >
                <img 
                  src={currentProgram.image}
                  alt={currentProgram.title}
                  className="w-full h-full object-cover rounded-lg"
                />
                
                <motion.div 
                  className="absolute -bottom-4 -left-4 bg-white shadow-lg px-4 py-2 rounded-lg border-2 border-santaran-jade/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <span className="text-sm font-medium">{currentProgram.category}</span>
                </motion.div>
              </motion.div>
              
              <div className="mt-6 flex justify-center">
                <ToggleGroup type="single" value={activeProgram} onValueChange={handleProgramChange}>
                  {programs.map((program) => (
                    <ToggleGroupItem 
                      key={program.id} 
                      value={program.id} 
                      aria-label={`View ${program.title} program`}
                      disabled={isAnimating}
                      className="px-4 py-2 rounded-md"
                    >
                      {program.title}
                    </ToggleGroupItem>
                  ))}
                </ToggleGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProgramSection;
