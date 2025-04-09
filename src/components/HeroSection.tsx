import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownCircle, Circle, Star, Sun, Sparkles, Leaf, Palette, Feather } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedHeading from '@/components/AnimatedHeading';

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
      opacity: number;
      shape: string;
    }[] = [];
    
    const colors = [
      '#C95D2C', // Terracotta - Earth & Tradition
      '#1D6A6A', // Teal - Water & Fluidity
      '#E6B30E', // Amber - Sun & Energy
      '#8B4513', // Brown - Roots & Ancestry
      '#9b87f5', // Lavender - Spirituality
      '#6E59A5'  // Purple - Wisdom & Vision
    ];
    
    const shapes = ['circle', 'square', 'triangle', 'star', 'leaf', 'drop'];
    
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 6 + 1,
        speedX: (Math.random() - 0.5) * 0.7,
        speedY: (Math.random() - 0.5) * 0.7,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.6 + 0.2,
        shape: shapes[Math.floor(Math.random() * shapes.length)]
      });
    }
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle) => {
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        
        ctx.beginPath();
        
        switch(particle.shape) {
          case 'square':
            ctx.rect(particle.x, particle.y, particle.size, particle.size);
            break;
          case 'triangle':
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particle.x + particle.size, particle.y + particle.size);
            ctx.lineTo(particle.x - particle.size, particle.y + particle.size);
            break;
          case 'star':
            const spikes = 5;
            const outerRadius = particle.size;
            const innerRadius = particle.size / 2;
            
            for (let i = 0; i < spikes * 2; i++) {
              const radius = i % 2 === 0 ? outerRadius : innerRadius;
              const angle = (Math.PI / spikes) * i;
              const x = particle.x + Math.cos(angle) * radius;
              const y = particle.y + Math.sin(angle) * radius;
              
              if (i === 0) {
                ctx.moveTo(x, y);
              } else {
                ctx.lineTo(x, y);
              }
            }
            break;
          case 'leaf':
            ctx.ellipse(particle.x, particle.y, particle.size/2, particle.size, Math.PI/4, 0, 2 * Math.PI);
            break;
          case 'drop':
            ctx.moveTo(particle.x, particle.y);
            ctx.bezierCurveTo(
              particle.x - particle.size, particle.y - particle.size*2,
              particle.x + particle.size*2, particle.y - particle.size*2,
              particle.x, particle.y
            );
            break;
          default:
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        }
        
        ctx.closePath();
        ctx.fill();
        ctx.globalAlpha = 1;
        
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1;
          particle.speedY += (Math.random() - 0.5) * 0.2;
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1;
          particle.speedX += (Math.random() - 0.5) * 0.2;
        }
        
        particle.speedX = Math.max(-0.8, Math.min(0.8, particle.speedX));
        particle.speedY = Math.max(-0.8, Math.min(0.8, particle.speedY));
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
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 bg-gradient-to-b from-santaran-cream/80 via-white/50 to-santaran-cream/80"
      />
      
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
          scale: [1, 1.2],
          opacity: [0.6, 1]
        }}
        transition={{ 
          duration: 2.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      >
        <Sun size={30} />
      </motion.div>
      
      <motion.div 
        className="absolute top-[20%] right-[25%] text-santaran-terracotta/80"
        animate={{ 
          scale: [1, 1.3],
          opacity: [0.5, 0.9],
          rotate: [0, 180]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      >
        <Palette size={24} />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-[30%] right-[15%] text-santaran-terracotta"
        animate={{ 
          scale: [1, 1.2],
          opacity: [0.6, 1]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 1
        }}
      >
        <Star size={24} />
      </motion.div>

      <motion.div 
        className="absolute bottom-[50%] left-[15%] text-santaran-jade"
        animate={{ 
          scale: [1, 1.4],
          opacity: [0.4, 0.8],
          y: [0, -15]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 2
        }}
      >
        <Leaf size={20} />
      </motion.div>

      <motion.div 
        className="absolute top-[30%] left-[25%] text-santaran-amber"
        animate={{ 
          scale: [1, 1.5],
          opacity: [0.5, 1],
          rotate: [0, 45]
        }}
        transition={{ 
          duration: 3.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 1.5
        }}
      >
        <Sparkles size={18} />
      </motion.div>
      
      <motion.div 
        className="absolute top-[40%] right-[15%] text-santaran-teal/70"
        animate={{ 
          scale: [1, 1.3],
          opacity: [0.5, 0.9],
          y: [0, -10]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 2.5
        }}
      >
        <Feather size={22} />
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
              
              <div>
                <AnimatedHeading
                  text="Art for Dignifying Life"
                  tag="h1" 
                  className="heading-xl mb-6 relative font-display"
                  color="text-santaran-terracotta"
                  animation="paint"
                  duration={1.5}
                />
              </div>
              
              <motion.p 
                className="font-display text-xl italic text-santaran-brown"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
              >
                Swimming Through Currents of Tradition & Innovation
              </motion.p>
            </div>
            
            <motion.p 
              className="text-lg md:text-xl mb-8 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.7 }}
            >
              <span className="font-medium text-santaran-teal">Santaran</span> means <i>swimming</i> in Bengali. 
              Since 1998, our artistic collective has been navigating the waters of indigenous wisdom, ecological harmony,
              cultural preservation, and spiritual connection, creating ripples that transform communities.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <Link to="/programs">
                <motion.button 
                  className="art-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Our Programs
                </motion.button>
              </Link>
              
              <Link to="/about">
                <motion.button 
                  className="art-button-outline"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Discover Our Story
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
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
              
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                animate={{ 
                  opacity: [0.4, 0.8]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              >
                <div className="w-[50%] h-[50%] bg-santaran-terracotta/10 blur-3xl rounded-full"></div>
              </motion.div>
              
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              >
                <div className="w-[40%] h-[40%] bg-white/80 rounded-full shadow-lg flex items-center justify-center backdrop-blur-sm">
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <Feather size={40} className="text-santaran-teal" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ 
            y: [0, 10]
          }}
          transition={{ 
            duration: 1, 
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        >
          <a href="#about" className="block text-santaran-teal hover:text-santaran-terracotta transition-colors">
            <ArrowDownCircle size={36} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
