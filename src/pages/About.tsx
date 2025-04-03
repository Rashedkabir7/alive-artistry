
import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Users, Award, Calendar, MapPin, Image, Palette, BookOpen, Heart } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Timeline from '../components/Timeline';
import AnimatedHeading from '@/components/AnimatedHeading';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {
  const { scrollYProgress } = useScroll();
  const opacityProgress = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const mainRef = useRef(null);
  const isInView = useInView(mainRef, { once: true });
  
  const coreValues = [
    {
      title: "Cultural Preservation",
      description: "Preserving indigenous artistic traditions and knowledge systems as living heritage for future generations.",
      icon: <BookOpen className="w-6 h-6" />,
      color: "text-santaran-teal",
      image: "https://images.unsplash.com/photo-1582691740708-9d5f1a1c4120?q=80&w=600"
    },
    {
      title: "Community Engagement",
      description: "Involving communities in artistic processes to foster deeper connections and cultural ownership.",
      icon: <Users className="w-6 h-6" />,
      color: "text-santaran-amber",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=600"
    },
    {
      title: "Environmental Harmony",
      description: "Creating art that respects and reflects the delicate balance between humans and the natural world.",
      icon: <Heart className="w-6 h-6" />,
      color: "text-santaran-jade",
      image: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?q=80&w=600"
    }
  ];

  const galleryItems = [
    {
      title: "Traditional Folk Arts Exhibition",
      description: "Showcasing indigenous art forms from rural Bangladesh",
      image: "https://images.unsplash.com/photo-1577083287809-1c774a469596?q=80&w=1200"
    },
    {
      title: "Children's Art Workshop",
      description: "Nurturing young artistic talents through guided creative sessions",
      image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1200"
    },
    {
      title: "Environmental Art Installation",
      description: "Art pieces created using sustainable materials and practices",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200"
    },
    {
      title: "Community Art Project",
      description: "Collaborative creation involving local artisans and residents",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?q=80&w=1200"
    }
  ];

  const milestones = [
    { 
      year: "1998", 
      title: "Formation", 
      description: "Santaran begins as a small collective of artists in Chittagong",
      icon: <Palette className="text-santaran-vermilion" size={20} />,
      image: "https://images.unsplash.com/photo-1572635148818-ef6fd45eb394?q=80&w=800"
    },
    { 
      year: "2008", 
      title: "Official Registration", 
      description: "Registered under Ministry of Social Welfare, Bangladesh",
      icon: <BookOpen className="text-santaran-amber" size={20} />,
      image: "https://images.unsplash.com/photo-1578926288207-ad2a2e19fa05?q=80&w=800"
    },
    { 
      year: "2014", 
      title: "Folk Arts Revival", 
      description: "Launched Shikar to document and preserve traditional crafts",
      icon: <Image className="text-santaran-terracotta" size={20} />,
      image: "https://images.unsplash.com/photo-1582691740708-9d5f1a1c4120?q=80&w=800"
    },
    { 
      year: "2021", 
      title: "Children's Initiative", 
      description: "Began Kalpapuri program focused on young artists",
      icon: <Users className="text-santaran-amber" size={20} />,
      image: "https://images.unsplash.com/photo-1607453998774-d533f65dac99?q=80&w=800"
    }
  ];

  const teamMembers = [
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
            <h1 className="text-white heading-xl mb-6 font-display">About Santaran</h1>
            <p className="text-white/90 text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Since 1998, Santaran has been creating bridges between indigenous knowledge,
              human ecology, art, culture, mythology, and spirituality.
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
                    alt="Santaran artists collaborating on a project" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-lg overflow-hidden border-4 border-white shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1577083330179-0d0ff7134303?q=80&w=800"
                    alt="Traditional art form" 
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
                text="Our Mission"
                tag="h2"
                className="heading-lg mb-6"
                color="text-santaran-teal"
                animation="wave"
              />
              
              <div className="w-20 h-1 bg-santaran-vermilion mb-6"></div>
              
              <p className="text-lg mb-6">
                Santaran Art Organization continues its journey from Chittagong, Bangladesh with the mission to
                shape artistic values through indigenous knowledge, human ecology, traditional art forms, and 
                the spirituality of local communities in a more defined artistic way.
              </p>
              
              <p className="text-lg mb-8">
                Through our diverse programs and initiatives, we strive to make art accessible to all and
                guide people to embrace art as a powerful medium for enhancing their quality of life.
              </p>
              
              <div className="p-6 bg-santaran-jade/10 rounded-lg border-l-4 border-santaran-jade">
                <h3 className="font-display text-xl mb-2 text-santaran-jade">Our Vision</h3>
                <p className="italic">"Art for Dignifying Life" - This is the vision of Santaran Art Organization, promoting meaningful artistic expressions that honor tradition while embracing innovation.</p>
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
            text="Our Philosophy"
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
              <h3 className="text-2xl font-bold text-santaran-teal mb-4 font-display">The Banyan Tree of Knowledge</h3>
              
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
                          <Palette size={40} className="text-santaran-teal" />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  
                  <div className="w-full md:w-2/3 md:pl-6">
                    <p className="italic text-santaran-jade text-lg">
                      "Through our activities, this artistic philosophy becomes a living force that 
                      nourishes communities, preserves traditions, and cultivates new growth."
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
            text="Our Core Values"
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
              size="lg" 
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
            text="Our Work"
            tag="h2"
            className="heading-lg text-center mb-4"
            color="text-santaran-vermilion"
            animation="wave"
          />
          <p className="text-lg text-center mb-16 max-w-2xl mx-auto">
            Explore the visual narrative of Santaran's artistic journey, showcasing our cultural 
            preservation efforts and community engagement through various art forms.
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
              <Link to="/gallery">View Full Gallery</Link>
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
            <h2 className="heading-lg text-santaran-teal mb-4">Our Journey</h2>
            <div className="w-24 h-1 bg-santaran-terracotta mx-auto"></div>
            <p className="mt-6 text-lg max-w-2xl mx-auto">
              Explore key moments in our artistic journey that have shaped Santaran's identity and impact.
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
              "Today, Santaran continues to evolve, bringing the transformative power of art to communities 
              across Bangladesh and beyond, while honoring our rich cultural heritage."
            </p>
            
            <div className="mt-10">
              <Link to="/about#team">
                <Button>Meet Our Team</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Team Section */}
      <section id="team" className="py-24 px-4 bg-santaran-cream/50">
        <div className="container mx-auto max-w-6xl">
          <AnimatedHeading
            text="The Collective"
            tag="h2"
            className="heading-lg text-center mb-4"
            color="text-santaran-teal"
            animation="wave"
          />
          <p className="text-lg text-center mb-16 max-w-2xl mx-auto">
            Our artistic community brings diverse perspectives and skills to create 
            meaningful interventions through collaborative practices.
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
            <Button 
              variant="outline" 
              asChild
            >
              <Link to="/contact">Connect With Us</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
