
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownCircle, Circle, Star, Sun } from 'lucide-react';

const HeroSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
    }[] = [];
    
    const colors = ['#C95D2C', '#1D6A6A', '#E6B30E', '#8B4513'];
    
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 5 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle) => {
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    const handleResize = () => {
      if (!canvasRef.current) return;
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animate as unknown as number);
    };
  }, []);
  
  return (
    <section className="relative min-h-screen flex items-center pt-16 pb-12 overflow-hidden">
      {/* Animated Canvas Background */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 bg-gradient-to-b from-santaran-cream/80 via-white/50 to-santaran-cream/80"
      />
      
      {/* Decorative Elements */}
      <motion.div 
        className="absolute top-20 right-20 text-santaran-terracotta opacity-20 hidden md:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
      >
        <Circle size={140} strokeWidth={1} />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-20 left-10 text-santaran-teal opacity-30 hidden md:block"
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      >
        <Circle size={100} strokeWidth={1} />
      </motion.div>
      
      <motion.div 
        className="absolute top-40 left-[10%] text-santaran-gold"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <Sun size={30} />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-[30%] right-[15%] text-santaran-terracotta"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      >
        <Star size={24} />
      </motion.div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative mb-4">
              <motion.div 
                className="absolute -left-6 -top-6 w-12 h-12 border-t-2 border-l-2 border-santaran-terracotta"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              />
              <motion.div 
                className="absolute -right-6 -bottom-6 w-12 h-12 border-b-2 border-r-2 border-santaran-teal"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              />
              
              <h1 className="heading-xl mb-6 relative">
                <motion.span 
                  className="text-santaran-terracotta block"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  Art
                </motion.span>
                <motion.span 
                  className="text-santaran-teal"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  for Dignifying 
                </motion.span>
                <motion.span 
                  className="text-santaran-brown block md:inline"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  Life
                </motion.span>
              </h1>
            </div>
            
            <motion.p 
              className="text-lg md:text-xl mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.7 }}
            >
              <span className="font-medium text-santaran-teal">Santaran</span> means swimming in Bengali. 
              As a group of artists, Santaran has been continuing its journey since 1998, 
              creating a bridge between <span className="italic">Indigenous knowledge, human ecology, 
              art, culture, mythology, and spirituality.</span>
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <motion.a 
                href="#programs" 
                className="relative group overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="absolute inset-0 w-full h-full bg-santaran-terracotta transform transition-transform group-hover:scale-x-0 origin-right"></span>
                <span className="absolute inset-0 w-full h-full bg-santaran-teal transform scale-x-0 transition-transform group-hover:scale-x-100 origin-left"></span>
                <span className="relative px-8 py-3 text-white text-lg font-medium block rounded-full">
                  Explore Programs
                </span>
              </motion.a>
              
              <motion.a 
                href="#about" 
                className="relative px-8 py-3 rounded-full border-2 border-santaran-teal text-santaran-teal hover:text-white text-lg font-medium overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="absolute inset-0 w-full h-full bg-santaran-teal transform scale-x-0 transition-transform group-hover:scale-x-100 origin-left"></span>
                <span className="relative block">Learn More</span>
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Decorative circles */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full border-2 border-dashed border-santaran-terracotta/30 rounded-full"></div>
              </motion.div>
              
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                initial={{ rotate: 0 }}
                animate={{ rotate: -360 }}
                transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-[85%] h-[85%] border-2 border-dashed border-santaran-teal/30 rounded-full"></div>
              </motion.div>
              
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-[70%] h-[70%] border-2 border-dashed border-santaran-gold/30 rounded-full"></div>
              </motion.div>
              
              {/* Tree image with animation */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  repeatType: "reverse" 
                }}
              >
                <img
                  src="/public/lovable-uploads/e04b0dc7-2eda-4b22-b81d-9d2151bc534f.png"
                  alt="Yanbriksha - Banyan tree of knowledge"
                  className="w-[80%] h-auto object-contain drop-shadow-xl"
                />
              </motion.div>
              
              {/* Glowing effect */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                animate={{ 
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                }}
              >
                <div className="w-[50%] h-[50%] bg-santaran-terracotta/10 blur-3xl rounded-full"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ 
            y: [0, 10, 0],
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
          }}
        >
          <a href="#manifesto" className="block text-santaran-teal hover:text-santaran-terracotta transition-colors">
            <ArrowDownCircle size={36} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
