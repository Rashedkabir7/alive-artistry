
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Palette, Heart, Leaf, Feather, Sparkles, Brush, GitCommit } from 'lucide-react';
import AnimatedHeading from '@/components/AnimatedHeading';
import { Card, CardContent } from '@/components/ui/card';

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

  const milestones = [
    { year: "1998", title: "Formation", description: "Santaran begins as a small collective of artists in Chittagong" },
    { year: "2001", title: "First Exhibition", description: "Hosted first collaborative show focusing on folk traditions" },
    { year: "2008", title: "Official Registration", description: "Registered under Ministry of Social Welfare, Bangladesh" },
    { year: "2010", title: "Harith Launch", description: "Started environmental art initiative across rural Bangladesh" },
    { year: "2014", title: "Folk Arts Revival", description: "Launched Shikar to document and preserve traditional crafts" },
    { year: "2018", title: "20 Year Anniversary", description: "Celebrated two decades with nationwide exhibitions" },
    { year: "2021", title: "Children's Initiative", description: "Began Kalpapuri program focused on young artists" }
  ];
  
  return (
    <motion.section 
      id="about" 
      ref={sectionRef}
      className="py-24 bg-white relative overflow-hidden"
      style={{ opacity }}
    >
      {/* Enhanced artistic background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-santaran-cream/40 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-santaran-jade/10 rounded-full blur-3xl -z-10 transform -translate-x-1/3 translate-y-1/3"></div>
      <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-santaran-amber/10 rounded-full blur-2xl -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-santaran-vermilion/5 rounded-full blur-2xl -z-10"></div>
      
      {/* Floating brush strokes */}
      <motion.div
        className="absolute top-20 right-10 w-20 h-6 bg-santaran-jade/10 rounded-full -z-10 transform rotate-45"
        animate={{ 
          y: [0, -15],
          rotate: [45, 55]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      ></motion.div>
      
      <motion.div
        className="absolute bottom-20 left-10 w-16 h-4 bg-santaran-vermilion/10 rounded-full -z-10 transform -rotate-12"
        animate={{ 
          y: [0, 10],
          rotate: [-12, -20]
        }}
        transition={{ 
          duration: 3.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      ></motion.div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16 relative">
          {/* Artistic rotating icon */}
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
          
          {/* Decorative ink splatter */}
          <motion.div 
            className="absolute -z-10 opacity-10"
            style={{ 
              top: '20%', 
              left: '15%',
              width: '200px',
              height: '200px',
              backgroundImage: "url('https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?q=80&w=400')",
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
            animate={{ 
              scale: [1, 1.05],
              opacity: [0.1, 0.15]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="h-1 bg-gradient-to-r from-santaran-vermilion to-santaran-amber mb-8"
          />
          
          {/* Enhanced heading with artistic wave animation */}
          <AnimatedHeading
            text="About Santaran"
            tag="h2"
            className="heading-lg mb-6 text-center font-display tracking-wider"
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
          
          {/* Artistic brush stroke divider */}
          <motion.div
            className="relative w-60 h-10 mb-10 overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="absolute inset-0 bg-no-repeat bg-center bg-contain"
              style={{ 
                backgroundImage: "url('https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?q=80&w=400')",
                backgroundSize: 'contain',
                filter: 'contrast(0.8) brightness(1.5)'
              }}
              animate={{ 
                x: [10, -10]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            className="space-y-6"
            style={{ y }}
          >
            <div className="relative">
              <motion.span 
                className="absolute -left-8 -top-8 text-7xl font-display text-santaran-terracotta/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                "
              </motion.span>
              
              {/* Enhanced quote with artistic styling */}
              <motion.p 
                className="text-lg leading-relaxed relative pl-6 border-l-4 border-santaran-vermilion/30 italic"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <span className="font-bold text-santaran-terracotta text-2xl font-display">"Art for Dignifying Life"</span> is the vision of Santaran Art Organization. Santaran means swimming,
                it is Bengali words. As a group of artists Santaran has been continuing its journey since 1998.
              </motion.p>
              
              {/* Artistic divider with animation */}
              <motion.div className="my-6 h-px w-full overflow-hidden">
                <motion.div
                  className="h-full w-full bg-gradient-to-r from-santaran-amber via-santaran-jade to-santaran-vermilion"
                  animate={{
                    x: ["-100%", "100%"]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </motion.div>
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
            
            {/* Enhanced highlighted text with artistic border */}
            <motion.div
              className="relative pl-6 border-l-2 border-santaran-amber/60"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {/* Decorative feathers */}
              <motion.div 
                className="absolute -left-1 -top-3 text-santaran-amber/40"
                animate={{ 
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <Feather size={16} />
              </motion.div>
              
              <motion.div 
                className="absolute -left-2 bottom-3 text-santaran-jade/40"
                animate={{ 
                  rotate: [0, -7, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <Feather size={14} />
              </motion.div>
              
              <p className="text-lg leading-relaxed italic bg-gradient-to-br from-santaran-jade to-santaran-teal bg-clip-text text-transparent">
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
          
          {/* Enhanced philosophy card with artistic elements */}
          <motion.div 
            className="relative"
            style={{ 
              opacity: philosophyOpacity,
              scale: philosophyScale
            }}
          >
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-700">
              <div className="bg-santaran-cream p-10 rounded-lg border-2 border-santaran-teal/20 fancy-border artistic-card relative overflow-hidden">
                {/* Updated artistic background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-repeat opacity-10" style={{
                    backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.2\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
                  }}></div>
                </div>
                
                {/* Enhanced animated leaf icon */}
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
                
                {/* Enhanced heading with artistic animation */}
                <AnimatedHeading
                  text="Our Philosophy"
                  tag="h3"
                  className="heading-md text-santaran-terracotta mb-6 font-display tracking-wider"
                  color="text-santaran-terracotta"
                  animation="paint"
                  staggerDelay={0.08}
                />
                
                <motion.div 
                  className="w-16 h-1 bg-santaran-amber mb-6"
                  initial={{ width: 0 }}
                  whileInView={{ width: '4rem' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                />
                
                {/* Enhanced philosophy text with artistic highlights */}
                <motion.p 
                  className="text-lg mb-8 relative"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  Santaran believes that through our activities our artistic philosophy will become the 
                  <motion.span 
                    className="font-bold text-santaran-teal italic mx-2"
                    whileHover={{ 
                      scale: 1.05,
                      color: "#DE4D31"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    'Yanbriksha'
                  </motion.span> 
                  <motion.span className="relative">
                    (alike a Banyan tree of knowledge)
                    
                    {/* Subtle sparkle effect */}
                    <motion.span
                      className="absolute -top-2 -right-1 text-santaran-amber"
                      animate={{
                        scale: [0.8, 1.2],
                        opacity: [0.4, 0.8]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    >
                      <Sparkles size={12} />
                    </motion.span>
                  </motion.span>
                  <motion.span className="ml-1">
                    which is rooted to the ground but spreading its branches all over the sky.
                  </motion.span>
                </motion.p>
                
                {/* Enhanced circular animation */}
                <div className="flex items-center justify-center mt-8">
                  <motion.div 
                    className="flex items-center justify-center"
                    animate={{ 
                      scale: [1, 1.1],
                      opacity: [0.7, 1]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }}
                  >
                    <div className="w-20 h-20 rounded-full bg-santaran-teal/5 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-santaran-teal/10 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-santaran-teal/15 flex items-center justify-center">
                          <div className="w-8 h-8 rounded-full bg-santaran-teal/20 flex items-center justify-center">
                            <div className="w-4 h-4 rounded-full bg-santaran-teal"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Orbiting element */}
                    <motion.div
                      className="absolute w-3 h-3 bg-santaran-amber rounded-full"
                      animate={{
                        x: [0, 40, 0, -40, 0],
                        y: [-40, 0, 40, 0, -40]
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                  </motion.div>
                </div>
                
                {/* Artistic corner accents */}
                <div className="absolute top-1 left-1 w-6 h-6 border-t-2 border-l-2 border-santaran-vermilion/40"></div>
                <div className="absolute top-1 right-1 w-6 h-6 border-t-2 border-r-2 border-santaran-jade/40"></div>
                <div className="absolute bottom-1 left-1 w-6 h-6 border-b-2 border-l-2 border-santaran-jade/40"></div>
                <div className="absolute bottom-1 right-1 w-6 h-6 border-b-2 border-r-2 border-santaran-vermilion/40"></div>
              </div>
            </div>
            
            {/* Enhanced decorative elements */}
            <motion.div 
              className="absolute -top-6 -right-6 w-24 h-24 bg-santaran-gold/20 rounded-full -z-10"
              animate={{ 
                scale: [1, 1.2],
                opacity: [0.2, 0.3]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
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
                repeatType: "reverse",
                ease: "easeInOut",
                delay: 1
              }}
            />
            
            {/* Additional decorative element */}
            <motion.div
              className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-12 h-36 bg-santaran-amber/5 -z-10 rounded-full blur-md"
              animate={{
                height: [36, 48, 36]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>

        {/* NEW: Journey Timeline Section */}
        <div className="mt-16 mb-20">
          <AnimatedHeading
            text="Our Artistic Journey"
            tag="h3"
            className="heading-md mb-12 text-center"
            color="text-santaran-teal"
            animation="wave"
          />
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-santaran-vermilion via-santaran-amber to-santaran-jade"></div>
            
            <div className="space-y-24">
              {milestones.map((milestone, index) => (
                <motion.div 
                  key={milestone.year}
                  className={`relative flex ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center justify-center`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Year bubble */}
                  <motion.div 
                    className="absolute left-1/2 transform -translate-x-1/2 z-10 bg-white border-4 border-santaran-amber rounded-full w-16 h-16 flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-santaran-teal font-bold">{milestone.year}</span>
                  </motion.div>
                  
                  {/* Content card */}
                  <Card className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'} hover:shadow-lg transition-shadow duration-300`}>
                    <CardContent className="p-6">
                      <div className="mb-2 flex items-center">
                        <motion.div 
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                          className="mr-2"
                        >
                          {index % 4 === 0 && <Brush className="text-santaran-vermilion" size={16} />}
                          {index % 4 === 1 && <Sparkles className="text-santaran-amber" size={16} />}
                          {index % 4 === 2 && <GitCommit className="text-santaran-jade" size={16} />}
                          {index % 4 === 3 && <Palette className="text-santaran-teal" size={16} />}
                        </motion.div>
                        <h4 className="font-bold text-lg text-santaran-terracotta">{milestone.title}</h4>
                      </div>
                      <p className="text-gray-600">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        {/* NEW: Core Values Section */}
        <div className="mt-24">
          <AnimatedHeading
            text="Our Core Values"
            tag="h3"
            className="heading-md mb-10 text-center"
            color="text-santaran-vermilion"
            animation="typewriter"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <motion.div 
              className="p-8 rounded-lg bg-gradient-to-br from-white to-santaran-cream border border-santaran-amber/20 shadow-md relative overflow-hidden"
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                className="absolute -right-4 -top-4 text-santaran-vermilion/10"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <Palette size={80} />
              </motion.div>
              
              <div className="relative z-10">
                <h4 className="text-xl font-display font-bold mb-4 text-santaran-teal">Cultural Preservation</h4>
                <p className="text-gray-600">Preserving indigenous artistic traditions and knowledge systems as living heritage for future generations.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="p-8 rounded-lg bg-gradient-to-br from-white to-santaran-cream border border-santaran-amber/20 shadow-md relative overflow-hidden"
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.div 
                className="absolute -right-4 -top-4 text-santaran-amber/10"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <Heart size={80} />
              </motion.div>
              
              <div className="relative z-10">
                <h4 className="text-xl font-display font-bold mb-4 text-santaran-amber">Community Engagement</h4>
                <p className="text-gray-600">Involving communities in artistic processes to foster deeper connections and cultural ownership.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="p-8 rounded-lg bg-gradient-to-br from-white to-santaran-cream border border-santaran-amber/20 shadow-md relative overflow-hidden"
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.div 
                className="absolute -right-4 -top-4 text-santaran-jade/10"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <Leaf size={80} />
              </motion.div>
              
              <div className="relative z-10">
                <h4 className="text-xl font-display font-bold mb-4 text-santaran-jade">Environmental Harmony</h4>
                <p className="text-gray-600">Creating art that respects and reflects the delicate balance between humans and the natural world.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
