
import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ChevronDown, Users, Award, Calendar, MapPin, Image, Palette, BookOpen, Heart, Leaf, Feather } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedHeading from '@/components/AnimatedHeading';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  const { scrollYProgress } = useScroll();
  const opacityProgress = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const mainRef = useRef(null);
  const isInView = useInView(mainRef, { once: true });
  
  const coreValues = [
    {
      title: "Cultural Preservation",
      description: "Weaving the threads of indigenous artistic traditions into the fabric of contemporary society, safeguarding wisdom passed through generations.",
      icon: <BookOpen className="w-6 h-6" />,
      color: "text-santaran-teal",
      image: "https://images.unsplash.com/photo-1582691740708-9d5f1a1c4120?q=80&w=600"
    },
    {
      title: "Community Engagement",
      description: "Creating circles of connection where art becomes a language that transcends barriers, building bridges between diverse voices.",
      icon: <Users className="w-6 h-6" />,
      color: "text-santaran-amber",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=600"
    },
    {
      title: "Environmental Harmony",
      description: "Honoring the sacred dialogue between humanity and nature, our art echoes the whispers of forests and rivers that sustain all life.",
      icon: <Leaf className="w-6 h-6" />,
      color: "text-santaran-jade",
      image: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?q=80&w=600"
    }
  ];

  const galleryItems = [
    {
      title: "Whispers of Ancestry",
      description: "Indigenous art forms that carry stories from our ancestors through the language of symbols and patterns",
      image: "https://images.unsplash.com/photo-1577083287809-1c774a469596?q=80&w=1200"
    },
    {
      title: "Seeds of Imagination",
      description: "Nurturing the creative spirit in children through artistic expression that honors their unique vision",
      image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1200"
    },
    {
      title: "Canvas of Earth",
      description: "Art that breathes with the rhythm of nature, using sustainable materials that honor our planet",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200"
    },
    {
      title: "Woven Community",
      description: "Collaborative creations that celebrate the diversity of hands and hearts working in harmony",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?q=80&w=1200"
    }
  ];

  const milestones = [
    { 
      year: "1998", 
      title: "The First Brushstroke", 
      description: "From a gathering of dreamers in Chittagong arose Santaran, planting seeds of artistic revolution",
      icon: <Palette className="text-santaran-vermilion" size={20} />,
      image: "https://images.unsplash.com/photo-1572635148818-ef6fd45eb394?q=80&w=800"
    },
    { 
      year: "2008", 
      title: "Roots Taking Hold", 
      description: "Our vision gained official recognition, allowing us to deepen our impact across communities",
      icon: <BookOpen className="text-santaran-amber" size={20} />,
      image: "https://images.unsplash.com/photo-1578926288207-ad2a2e19fa05?q=80&w=800"
    },
    { 
      year: "2014", 
      title: "Revival of Traditional Wisdom", 
      description: "Shikar program launched to preserve disappearing crafts, connecting elders with young artisans",
      icon: <Image className="text-santaran-terracotta" size={20} />,
      image: "https://images.unsplash.com/photo-1582691740708-9d5f1a1c4120?q=80&w=800"
    },
    { 
      year: "2021", 
      title: "Nurturing New Growth", 
      description: "Kalpapuri program blossomed, creating sacred spaces for children to express their artistic voices",
      icon: <Users className="text-santaran-amber" size={20} />,
      image: "https://images.unsplash.com/photo-1607453998774-d533f65dac99?q=80&w=800"
    }
  ];

  const teamMembers = [
    {
      name: "Mahbubur Rahman",
      role: "Founder & Artistic Director",
      bio: "A visionary who walks between worlds, Mahbubur weaves traditional knowledge with contemporary expression to create spaces of transformation.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300"
    },
    {
      name: "Tayeba Begum Lipi",
      role: "Co-founder & Program Director",
      bio: "With hands that honor the ancestral and eyes that see the future, Tayeba guides our programs with wisdom and compassion.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300"
    },
    {
      name: "Abdul Hakim",
      role: "Master Artisan & Elder",
      bio: "Keeper of forgotten techniques and guardian of artistic heritage, Abdul's hands carry the memory of generations of craftspeople.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300"
    }
  ];
  
  return (
    <div className="bg-santaran-cream">
      <Navbar />
      
      {/* Hero Section with Immersive Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="w-full h-full"
            style={{ 
              backgroundImage: 'url(https://images.unsplash.com/photo-1493397212122-2b85dda8106b?q=80&w=2000)', 
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-santaran-cream/90"></div>
        </div>
        
        <div className="container relative z-10 px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-white heading-xl mb-6 font-display">Our Artistic Journey</h1>
            <p className="text-white/90 text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Since 1998, Santaran has been swimming through currents of tradition and innovation,
              weaving indigenous wisdom into the tapestry of contemporary expression.
            </p>
            <Button 
              size="lg" 
              className="mt-4"
              onClick={() => {
                document.getElementById('our-mission')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Discover Our Story
            </Button>
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
      
      {/* Mission and Vision Section */}
      <section id="our-mission" className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="w-full aspect-square overflow-hidden rounded-lg shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1578926288207-ad2a2e19fa05?q=80&w=1200" 
                    alt="Artists collaborating on a community project" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-lg overflow-hidden border-4 border-white shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1577083330179-0d0ff7134303?q=80&w=800"
                    alt="Traditional pottery being created" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <AnimatedHeading
                text="Our Sacred Purpose"
                tag="h2"
                className="heading-lg mb-6"
                color="text-santaran-teal"
                animation="wave"
              />
              
              <div className="w-20 h-1 bg-santaran-vermilion mb-6"></div>
              
              <p className="text-lg mb-6">
                From the fertile soils of Chittagong, Bangladesh, Santaran flows like a river,
                carrying the essence of indigenous wisdom, ecological harmony, and artistic expression
                to nourish communities thirsting for cultural connection.
              </p>
              
              <p className="text-lg mb-8">
                We believe art is not merely decoration but a living force—a language that speaks
                across generations, a medicine that heals divided communities, and a light that
                illuminates forgotten pathways to our shared humanity.
              </p>
              
              <div className="p-6 bg-santaran-jade/10 rounded-lg border-l-4 border-santaran-jade">
                <h3 className="font-display text-xl mb-2 text-santaran-jade">Our Vision</h3>
                <p className="italic">"Art for Dignifying Life" — Like a banyan tree with deep roots and far-reaching branches, we envision a world where art dignifies life by honoring tradition while embracing transformation.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Philosophy Section with Visual Representation */}
      <section className="py-24 px-4 bg-santaran-cream/50 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-santaran-amber/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-santaran-vermilion/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-6xl">
          <AnimatedHeading
            text="The Banyan Tree Philosophy"
            tag="h2"
            className="heading-lg text-center mb-16"
            color="text-santaran-vermilion"
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
                      <path id="philosophy-circle" d="M 200, 200 m -175, 0 a 175,175 0 1,1 350,0 a 175,175 0 1,1 -350,0" />
                    </defs>
                    <text fill="#DE4D31" fontSize="22">
                      <textPath href="#philosophy-circle" startOffset="0%">
                        Wisdom • Tradition • Heritage • Ecology • Spirit • Community • Balance • Harmony • Dignity •
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
                    alt="Ancient banyan tree symbolizing Yanbriksha" 
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
              <h3 className="text-2xl font-bold text-santaran-teal mb-4 font-display">Yanbriksha: The Sacred Tree of Knowledge</h3>
              
              <div className="space-y-6">
                <p className="text-lg">
                  At the heart of Santaran's philosophy stands 
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
                  — the Banyan tree of knowledge, whose roots reach deep into ancestral wisdom while its branches extend into the future.
                </p>
                
                <p className="text-lg">
                  Like the sacred Banyan that provides shelter to countless beings, our artistic vision embraces diversity, 
                  creating spaces where traditional knowledge systems can breathe and evolve alongside contemporary expression.
                  Each aerial root that touches the ground represents a new connection between past and present.
                </p>
                
                <div className="flex flex-col md:flex-row items-center mt-8">
                  <div className="w-full md:w-1/3 mb-4 md:mb-0">
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
                          <Feather size={40} className="text-santaran-teal" />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  
                  <div className="w-full md:w-2/3 md:pl-6">
                    <p className="italic text-santaran-jade text-lg">
                      "In the shade of Yanbriksha, we gather to share stories, preserve crafts, and nurture the seeds 
                      of artistic expression that will grow into forests of cultural resilience."
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <AnimatedHeading
            text="Sacred Principles"
            tag="h2"
            className="heading-lg text-center mb-16"
            color="text-santaran-jade"
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

          <div className="mt-16 text-center">
            <Button 
              variant="outline"
              onClick={() => {
                document.getElementById('our-history')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explore Our History
            </Button>
          </div>
        </div>
      </section>
      
      {/* Gallery Showcase */}
      <section className="py-24 px-4 bg-santaran-cream/30">
        <div className="container mx-auto max-w-6xl">
          <AnimatedHeading
            text="Artistic Tapestry"
            tag="h2"
            className="heading-lg text-center mb-4"
            color="text-santaran-vermilion"
            animation="wave"
          />
          <p className="text-lg text-center mb-16 max-w-2xl mx-auto">
            Each creation is a thread in the tapestry of Santaran's journey, weaving together 
            stories of cultural preservation, community connection, and environmental reverence.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {galleryItems.map((item, index) => (
              <motion.div 
                key={index}
                className="relative group overflow-hidden rounded-lg aspect-[4/3] shadow-xl"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 0.98 }}
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white text-xl font-display mb-2">{item.title}</h3>
                  <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Button asChild>
              <Link to="/gallery">Experience Our Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Artistic Journey Timeline */}
      <section className="py-24 px-4 bg-white" id="our-history" ref={mainRef}>
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg text-santaran-teal mb-4">Rivers of Time</h2>
            <div className="w-24 h-1 bg-santaran-terracotta mx-auto"></div>
            <p className="mt-6 text-lg max-w-2xl mx-auto">
              Like a river carving its path through the landscape, these moments have shaped
              our journey and the communities we serve.
            </p>
          </motion.div>
          
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
                      <MapPin className="text-santaran-teal" size={16} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="italic text-xl text-gray-600">
              "Today, our river continues to flow, nourishing new landscapes of artistic expression
              while carrying the precious sediment of tradition to future generations."
            </p>
            
            <div className="mt-10">
              <Button>
                <Link to="#team">Meet Our Artistic Circle</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Team Section */}
      <section id="team" className="py-24 px-4 bg-santaran-cream/50">
        <div className="container mx-auto max-w-6xl">
          <AnimatedHeading
            text="Keepers of the Vision"
            tag="h2"
            className="heading-lg text-center mb-4"
            color="text-santaran-teal"
            animation="wave"
          />
          <p className="text-lg text-center mb-16 max-w-2xl mx-auto">
            Like diverse instruments in an orchestra, our artistic collective brings unique voices
            that harmonize in service of our shared vision.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden">
                  <div className="aspect-square overflow-hidden rounded-lg">
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
          
          <div className="text-center mt-16">
            <Button variant="outline">
              <Link to="/contact">Join Our Circle</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
