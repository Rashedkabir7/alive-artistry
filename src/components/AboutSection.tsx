
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Palette, Heart, Leaf, Brush, Users, BookOpen, Award, Star, Image, Map, Calendar } from 'lucide-react';
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
  
  const milestones = [
    { 
      year: "1998", 
      title: "Formation", 
      description: "Santaran begins as a small collective of artists in Chittagong",
      icon: <Palette className="text-santaran-vermilion" size={20} />,
      image: "https://images.unsplash.com/photo-1572635148818-ef6fd45eb394?q=80&w=800"
    },
    { 
      year: "2001", 
      title: "First Exhibition", 
      description: "Hosted first collaborative show focusing on folk traditions",
      icon: <Image className="text-santaran-jade" size={20} />,
      image: "https://images.unsplash.com/photo-1577083330179-0d0ff7134303?q=80&w=800"
    },
    { 
      year: "2008", 
      title: "Official Registration", 
      description: "Registered under Ministry of Social Welfare, Bangladesh",
      icon: <BookOpen className="text-santaran-amber" size={20} />,
      image: "https://images.unsplash.com/photo-1578926288207-ad2a2e19fa05?q=80&w=800"
    },
    { 
      year: "2010", 
      title: "Harith Launch", 
      description: "Started environmental art initiative across rural Bangladesh",
      icon: <Leaf className="text-santaran-jade" size={20} />,
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800"
    },
    { 
      year: "2014", 
      title: "Folk Arts Revival", 
      description: "Launched Shikar to document and preserve traditional crafts",
      icon: <Brush className="text-santaran-terracotta" size={20} />,
      image: "https://images.unsplash.com/photo-1582691740708-9d5f1a1c4120?q=80&w=800"
    },
    { 
      year: "2018", 
      title: "20 Year Anniversary", 
      description: "Celebrated two decades with nationwide exhibitions",
      icon: <Award className="text-santaran-gold" size={20} />,
      image: "https://images.unsplash.com/photo-1605773527852-c546a8584ea3?q=80&w=800"
    },
    { 
      year: "2021", 
      title: "Children's Initiative", 
      description: "Began Kalpapuri program focused on young artists",
      icon: <Star className="text-santaran-amber" size={20} />,
      image: "https://images.unsplash.com/photo-1607453998774-d533f65dac99?q=80&w=800"
    }
  ];
  
  const coreValues = [
    {
      title: "Cultural Preservation",
      description: "Preserving indigenous artistic traditions and knowledge systems as living heritage for future generations.",
      icon: <BookOpen />,
      color: "text-santaran-teal",
      image: "https://images.unsplash.com/photo-1582691740708-9d5f1a1c4120?q=80&w=600"
    },
    {
      title: "Community Engagement",
      description: "Involving communities in artistic processes to foster deeper connections and cultural ownership.",
      icon: <Users />,
      color: "text-santaran-amber",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=600"
    },
    {
      title: "Environmental Harmony",
      description: "Creating art that respects and reflects the delicate balance between humans and the natural world.",
      icon: <Leaf />,
      color: "text-santaran-jade",
      image: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?q=80&w=600"
    }
  ];
  
  return (
    <motion.section 
      id="about" 
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-white to-santaran-cream/30 relative overflow-hidden"
      style={{ opacity }}
    >
      {/* Artistic background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-santaran-cream/40 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-santaran-jade/10 rounded-full blur-3xl -z-10 transform -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16 relative">
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
          
          {/* Main heading with animation */}
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
        </div>
        
        {/* Main About section with image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left column with text */}
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
              
              <motion.div 
                className="text-lg leading-relaxed relative pl-6 border-l-4 border-santaran-vermilion/30 italic"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <span className="font-bold text-santaran-terracotta text-2xl font-display block mb-3">"Art for Dignifying Life"</span>
                <p>This is the vision of Santaran Art Organization. "Santaran" means swimming in Bengali. 
                As a group of passionate artists, Santaran has been continuing its journey since 1998.</p>
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
              In 2008, Santaran achieved official recognition under the Ministry of Social Welfare, People's Republic of Bangladesh,
              as a nonprofit multidisciplinary artist-run organization dedicated to cultural preservation and artistic development.
            </motion.p>
            
            <motion.p 
              className="text-lg leading-relaxed pl-6 border-l-2 border-santaran-amber/60 italic bg-gradient-to-br from-santaran-jade to-santaran-teal bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Santaran Art Organization continues its journey from Chittagong, Bangladesh with the mission to
              shape artistic values through indigenous knowledge, human ecology, traditional art forms, and 
              the spirituality of local communities in a more defined artistic way.
            </motion.p>
            
            <motion.p 
              className="text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              Through our diverse programs and initiatives, we strive to make art accessible to all and
              guide people to embrace art as a powerful medium for enhancing their quality of life.
            </motion.p>
          </motion.div>
          
          {/* Right column with image showcase */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <motion.div
                  className="rounded-lg overflow-hidden aspect-[3/4] shadow-lg"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1578926288207-ad2a2e19fa05?q=80&w=800" 
                    alt="Traditional folk art exhibition" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                
                <motion.div
                  className="rounded-lg overflow-hidden aspect-square shadow-lg"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1551966775-a4ddc8df052b?q=80&w=800" 
                    alt="Children's art workshop" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
              
              <div className="space-y-4 mt-6">
                <motion.div
                  className="rounded-lg overflow-hidden aspect-square shadow-lg"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1490971588422-52f6262a237a?q=80&w=800" 
                    alt="Cultural art event" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                
                <motion.div
                  className="rounded-lg overflow-hidden aspect-[3/4] shadow-lg"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800" 
                    alt="Environmental art installation" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </div>
            
            {/* Artistic caption */}
            <motion.div
              className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-lg"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <p className="text-santaran-teal italic font-medium text-center">
                "Through art, we preserve heritage and shape the future"
              </p>
            </motion.div>
            
            {/* Decorative elements */}
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
          </motion.div>
        </div>

        {/* Philosophy Section with Visual Representation */}
        <div className="mb-24">
          <AnimatedHeading
            text="Our Philosophy"
            tag="h3"
            className="heading-md mb-10 text-center"
            color="text-santaran-terracotta"
            animation="typewriter"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
            {/* Left visual element */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative">
                <motion.div 
                  className="w-full aspect-square flex items-center justify-center"
                  animate={{ 
                    rotate: [0, 360]
                  }}
                  transition={{ 
                    duration: 60,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <svg width="100%" height="100%" viewBox="0 0 400 400">
                    <defs>
                      <path id="circle" d="M 200, 200 m -175, 0 a 175,175 0 1,1 350,0 a 175,175 0 1,1 -350,0" />
                    </defs>
                    <text fill="#DE4D31" fontSize="22">
                      <textPath xlinkHref="#circle" startOffset="0%">
                        Art • Culture • Heritage • Knowledge • Wisdom • Community • Nature • Balance • Harmony •
                      </textPath>
                    </text>
                  </svg>
                </motion.div>
                
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ 
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ 
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1588512285341-c481fb6de19d?q=80&w=600" 
                    alt="Traditional art symbolizing Yanbriksha" 
                    className="w-3/5 h-3/5 object-cover rounded-full border-4 border-santaran-amber shadow-lg"
                  />
                </motion.div>
              </div>
            </motion.div>
            
            {/* Right content */}
            <motion.div
              className="lg:col-span-2 bg-white/80 p-8 rounded-lg shadow-lg border border-santaran-amber/20"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <h4 className="text-xl font-bold text-santaran-teal mb-4 font-display">The Banyan Tree of Knowledge</h4>
              
              <div className="space-y-6">
                <p className="text-lg">
                  Santaran's artistic philosophy is represented by the concept of 
                  <motion.span 
                    className="font-bold text-santaran-terracotta italic mx-2"
                    whileHover={{ 
                      scale: 1.05,
                      color: "#DE4D31"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    'Yanbriksha'
                  </motion.span> 
                  (the Banyan tree of knowledge).
                </p>
                
                <p className="text-lg">
                  Like the sacred Banyan tree which is deeply rooted yet spreads its branches far and wide, 
                  our artistic vision is firmly grounded in traditional values while constantly evolving and 
                  expanding to embrace new forms of expression.
                </p>
                
                <div className="flex items-center">
                  <div className="w-1/3">
                    <motion.div 
                      className="relative"
                      animate={{ 
                        y: [0, -5, 0]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <div className="aspect-square relative">
                        <div className="absolute inset-0 bg-santaran-jade/20 rounded-full transform -translate-x-1/4 translate-y-1/4"></div>
                        <div className="absolute inset-0 bg-santaran-amber/20 rounded-full transform translate-x-1/4 -translate-y-1/4"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Leaf size={40} className="text-santaran-teal" />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  
                  <div className="w-2/3 pl-6">
                    <p className="italic text-santaran-jade">
                      "Through our activities, this artistic philosophy becomes a living force that 
                      nourishes communities, preserves traditions, and cultivates new growth."
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Enhanced Core Values Section */}
        <div className="my-24">
          <AnimatedHeading
            text="Our Core Values"
            tag="h3"
            className="heading-md mb-12 text-center"
            color="text-santaran-vermilion"
            animation="wave"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div 
                key={value.title}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg h-80">
                  {/* Background image */}
                  <div className="absolute inset-0">
                    <img 
                      src={value.image} 
                      alt={value.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                    <div className="mb-3">
                      <span className={`inline-block p-3 rounded-full bg-white/20 backdrop-blur-sm ${value.color}`}>
                        {value.icon}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold mb-2 font-display">{value.title}</h4>
                    <p className="text-white/90 group-hover:translate-y-0 transition-transform duration-500">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Journey Timeline Section with Images */}
        <div className="mt-24">
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
                  
                  {/* Content card with image */}
                  <Card className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'} overflow-hidden hover:shadow-lg transition-shadow duration-300 group`}>
                    <div className="aspect-video relative overflow-hidden">
                      <img 
                        src={milestone.image} 
                        alt={milestone.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                        <div className="text-white">
                          <div className="flex items-center gap-2 mb-1">
                            {milestone.icon}
                            <h4 className="font-bold text-lg">{milestone.title}</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <p className="text-gray-600">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Final statement */}
          <motion.div 
            className="max-w-2xl mx-auto mt-20 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-santaran-teal/5 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-santaran-teal/10 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-santaran-teal/15 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-santaran-teal/20 flex items-center justify-center">
                      <Map className="text-santaran-teal" size={16} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="italic text-xl text-gray-600">
              "Today, Santaran continues to evolve, bringing the transformative power of art to communities 
              across Bangladesh and beyond, while honoring our rich cultural heritage."
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
