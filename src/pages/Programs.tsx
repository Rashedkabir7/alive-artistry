
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight, BookOpen, Users, Calendar, Heart, Globe, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import FeaturedProgramSection from "@/components/FeaturedProgramSection";
import ProgramHero from "@/components/ProgramHero";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";

const Programs: React.FC = () => {
  return (
    <div className="bg-santaran-cream min-h-screen overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <ProgramHero />
      
      {/* Featured Program Section */}
      <FeaturedProgramSection />
      
      {/* Program Details Section with Tabs */}
      <section className="py-20 px-4 md:px-8 lg:px-12 container mx-auto">
        <div className="mb-16 text-center">
          <motion.h2 
            className="heading-lg text-santaran-jade mb-6 relative inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Explore Our Initiatives
          </motion.h2>
          <div className="w-32 h-1 bg-gradient-to-r from-santaran-vermilion to-santaran-amber mx-auto"></div>
          <motion.p 
            className="mt-6 text-lg max-w-3xl mx-auto text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Our programs focus on nurturing creativity, preserving cultural heritage, 
            and promoting art as a catalyst for social change and community development.
          </motion.p>
        </div>

        <Tabs defaultValue="all" className="w-full max-w-5xl mx-auto">
          <div className="flex justify-center mb-12">
            <TabsList className="p-1 glass-dark bg-white/80 backdrop-blur-lg border border-santaran-jade/20 rounded-full">
              <TabsTrigger value="all" className="rounded-full px-6 py-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-santaran-vermilion data-[state=active]:to-santaran-amber data-[state=active]:text-white">
                All Programs
              </TabsTrigger>
              <TabsTrigger value="ongoing" className="rounded-full px-6 py-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-santaran-vermilion data-[state=active]:to-santaran-amber data-[state=active]:text-white">
                Ongoing
              </TabsTrigger>
              <TabsTrigger value="upcoming" className="rounded-full px-6 py-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-santaran-vermilion data-[state=active]:to-santaran-amber data-[state=active]:text-white">
                Upcoming
              </TabsTrigger>
              <TabsTrigger value="past" className="rounded-full px-6 py-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-santaran-vermilion data-[state=active]:to-santaran-amber data-[state=active]:text-white">
                Past
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {/* Program Cards */}
              <ProgramCard 
                title="Harith"
                description="Art of environmental development focusing on ecological awareness and sustainability through creative expression, addressing climate change through artistic interventions."
                image="/lovable-uploads/ab8abc5e-5120-4d3b-acd0-73c7a45a5cd7.png"
                category="Environmental Art"
                year="2023-Present"
                icon="🌿"
                id="harith"
              />
              <ProgramCard 
                title="Kalpapuri"
                description="Works with children's art and psychology, nurturing young minds through artistic exploration and using art as a therapeutic tool for psychological development."
                image="https://images.unsplash.com/photo-1551038247-3d9af20df552?q=80&w=1200"
                category="Children's Art"
                year="2021-Present"
                icon="👧"
                id="kalpapuri"
              />
              <ProgramCard 
                title="Shikar"
                description="Development and preservation of folk arts & crafts to maintain cultural heritage and traditional art forms across generations, documenting ancient techniques."
                image="https://images.unsplash.com/photo-1473177104440-ffee2f376098?q=80&w=1200"
                category="Folk Arts"
                year="2019-Present"
                icon="🧶"
                id="shikar"
              />
              <ProgramCard 
                title="Art Factory"
                description="Project for young artists to collaborate, experiment, and showcase innovative artistic approaches, pushing boundaries of contemporary artistic expression."
                image="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200"
                category="Contemporary Art"
                year="2022-Present"
                icon="🎨"
                id="artfactory"
              />
            </div>
          </TabsContent>
          
          <TabsContent value="ongoing">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ProgramCard 
                title="Harith"
                description="Art of environmental development focusing on ecological awareness and sustainability through creative expression, addressing climate change through artistic interventions."
                image="/lovable-uploads/ab8abc5e-5120-4d3b-acd0-73c7a45a5cd7.png"
                category="Environmental Art"
                year="2023-Present"
                icon="🌿"
                id="harith"
              />
              <ProgramCard 
                title="Art Factory"
                description="Project for young artists to collaborate, experiment, and showcase innovative artistic approaches, pushing boundaries of contemporary artistic expression."
                image="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200"
                category="Contemporary Art"
                year="2022-Present"
                icon="🎨"
                id="artfactory"
              />
            </div>
          </TabsContent>
          
          <TabsContent value="upcoming">
            <div className="text-center py-12">
              <motion.div 
                className="text-6xl mb-6"
                animate={{ 
                  y: [0, -10, 0], 
                  transition: { duration: 2, repeat: Infinity, repeatType: "reverse" }
                }}
              >
                🚀
              </motion.div>
              <h3 className="heading-md text-santaran-teal mb-4">Exciting Programs Coming Soon!</h3>
              <p className="text-gray-600 mb-6">Stay tuned for our upcoming initiatives.</p>
              <Button className="mt-4">
                <Calendar className="mr-2 h-4 w-4" />
                Get Notified
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="past">
            <div className="text-center py-12">
              <h3 className="heading-md text-santaran-teal mb-4">Archive Under Development</h3>
              <p className="text-gray-600 mb-6">Our program archives are being digitized. Check back soon.</p>
              <Button variant="outline" className="mt-4">
                <BookOpen className="mr-2 h-4 w-4" />
                View Gallery Instead
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </section>
      
      {/* Program Philosophy Section with improved visuals */}
      <section className="py-20 px-4 md:px-8 lg:px-12 bg-white relative overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-santaran-vermilion/5 blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-santaran-jade/5 blur-3xl"></div>
        
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <motion.h2 
                className="heading-md text-santaran-vermilion mb-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                Our Philosophy
              </motion.h2>
              
              <motion.p 
                className="text-lg text-gray-600 mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
              >
                At Santaran, we believe that art is not merely an aesthetic pursuit but a powerful force for dignifying life and fostering social change. Our programs are designed with three core principles:
              </motion.p>
              
              <motion.ul
                className="space-y-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <li className="flex items-start space-x-3">
                  <div className="bg-santaran-vermilion/10 p-2 rounded-full">
                    <Users className="text-santaran-vermilion h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Community Engagement</h4>
                    <p className="text-gray-600">Art must engage with communities and reflect their lived experiences</p>
                  </div>
                </li>
                
                <li className="flex items-start space-x-3">
                  <div className="bg-santaran-jade/10 p-2 rounded-full">
                    <BookOpen className="text-santaran-jade h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Knowledge Preservation</h4>
                    <p className="text-gray-600">Traditional arts and crafts contain invaluable cultural knowledge</p>
                  </div>
                </li>
                
                <li className="flex items-start space-x-3">
                  <div className="bg-santaran-amber/10 p-2 rounded-full">
                    <Globe className="text-santaran-amber h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Sustainable Future</h4>
                    <p className="text-gray-600">Art has a role in imagining and creating sustainable futures</p>
                  </div>
                </li>
              </motion.ul>
              
              <motion.div 
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Button>
                  Join Our Mission 
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>
            </div>
            
            <motion.div 
              className="order-1 md:order-2 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="artistic-card fancy-border canvas-texture aspect-[4/5] p-0 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1200" 
                  alt="Art Installation" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white border-2 border-santaran-jade p-4 rounded-lg shadow-lg">
                <p className="text-sm font-display italic">"Art for dignifying life"</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Enhanced Program Impact Stats with visual elements */}
      <section className="py-16 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-santaran-jade/10 via-santaran-cream/70 to-santaran-amber/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <motion.h2 
              className="heading-md text-santaran-teal mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              Our Impact Through Art
            </motion.h2>
            <div className="w-24 h-1 bg-santaran-terracotta mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard number="120+" title="Artists Supported" icon={<Users className="h-8 w-8 mb-3 text-santaran-vermilion" />} />
            <StatCard number="46" title="Communities Engaged" icon={<Heart className="h-8 w-8 mb-3 text-santaran-vermilion" />} />
            <StatCard number="12" title="Exhibitions Curated" icon={<Award className="h-8 w-8 mb-3 text-santaran-vermilion" />} />
            <StatCard number="4,500+" title="Workshop Participants" icon={<Users className="h-8 w-8 mb-3 text-santaran-vermilion" />} />
          </div>
        </div>
      </section>

      {/* New: Featured Program Showcase */}
      <section className="py-16 px-4 md:px-8 lg:px-12 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="heading-md text-santaran-teal mb-4">Featured Work</h2>
            <div className="w-24 h-1 bg-santaran-amber mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              className="rounded-xl overflow-hidden shadow-lg"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="relative aspect-[4/3]">
                <img 
                  src="https://images.unsplash.com/photo-1481070414801-51fd732d7184?q=80&w=1200" 
                  alt="Environmental Art Installation" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-2 py-1 bg-santaran-jade text-white text-xs rounded-full">Harith</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">River Cleaning Art Project</h3>
                <p className="text-gray-600 text-sm mt-1">Community-based art installation using recycled materials from river cleanup</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="rounded-xl overflow-hidden shadow-lg"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="relative aspect-[4/3]">
                <img 
                  src="https://images.unsplash.com/photo-1551038247-3d9af20df552?q=80&w=1200" 
                  alt="Children's Art Workshop" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-2 py-1 bg-santaran-terracotta text-white text-xs rounded-full">Kalpapuri</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">Children's Imagination Workshop</h3>
                <p className="text-gray-600 text-sm mt-1">Creative expression workshops for underprivileged children</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="rounded-xl overflow-hidden shadow-lg"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="relative aspect-[4/3]">
                <img 
                  src="https://images.unsplash.com/photo-1473177104440-ffee2f376098?q=80&w=1200" 
                  alt="Folk Art Preservation" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-2 py-1 bg-santaran-amber text-white text-xs rounded-full">Shikar</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">Folk Art Documentation</h3>
                <p className="text-gray-600 text-sm mt-1">Preserving traditional craft techniques through digital archives</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Visual Get Involved CTA */}
      <section className="py-20 px-4 md:px-8 lg:px-12">
        <div className="container mx-auto max-w-5xl relative">
          <motion.div 
            className="relative overflow-hidden rounded-3xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=1200" 
                alt="Forest" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
            </div>
            
            <div className="relative z-10 p-8 md:p-12 lg:w-2/3">
              <h2 className="heading-md text-white mb-6">Get Involved with Our Programs</h2>
              <p className="text-lg text-white/90 max-w-2xl mb-8">
                Whether you're an artist, educator, student, or art enthusiast, there are many ways to participate in Santaran's initiatives.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Button variant="default" className="bg-santaran-terracotta hover:bg-santaran-terracotta/90">Volunteer</Button>
                <Button className="bg-white text-santaran-teal hover:bg-white/90">Participate</Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/20">Support Us</Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

// ProgramCard Component with improved visuals and ID anchor
const ProgramCard: React.FC<{
  title: string;
  description: string;
  image: string;
  category: string;
  year: string;
  icon: string;
  id: string;
}> = ({ title, description, image, category, year, icon, id }) => {
  return (
    <motion.div 
      className="group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      id={id}
    >
      <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500">
        <div className="relative h-60 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-4 left-4">
            <span className="text-xs font-medium py-1 px-3 rounded-full bg-santaran-jade text-white">
              {category}
            </span>
          </div>
          <div className="absolute top-4 right-4 text-3xl bg-white p-2 rounded-full shadow-md">
            {icon}
          </div>
        </div>
        
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className="heading-sm text-santaran-teal relative overflow-hidden">
              <motion.span
                className="inline-block"
                whileHover={{ y: [-40, 0], transition: { duration: 0.3 } }}
              >
                {title.split('').map((letter, i) => (
                  <motion.span
                    key={i}
                    className="inline-block"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                    whileHover={{
                      y: [0, -5, 0],
                      color: ["#2A7D6A", "#D96941", "#F9A826"],
                      transition: {
                        y: { duration: 0.5, repeat: 0 },
                        color: { duration: 0.5, repeat: 0 }
                      }
                    }}
                  >
                    {letter === ' ' ? '\u00A0' : letter}
                  </motion.span>
                ))}
              </motion.span>
            </h3>
            <span className="text-sm text-gray-500">{year}</span>
          </div>
          
          <p className="text-gray-600 mb-4">{description}</p>
          
          <div className="flex justify-between items-center">
            <Button variant="link" className="p-0 h-auto">
              Learn more
              <motion.span
                className="inline-block ml-1"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
              >
                →
              </motion.span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

// Enhanced StatCard Component with icons
const StatCard: React.FC<{ number: string; title: string; icon: React.ReactNode }> = ({ number, title, icon }) => {
  return (
    <motion.div
      className="p-6 bg-white rounded-xl shadow-md text-center"
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="flex justify-center">
        {icon}
      </div>
      <motion.h3 
        className="text-4xl md:text-5xl font-display font-bold text-santaran-vermilion mb-2"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ 
          type: "spring", 
          stiffness: 100, 
          delay: 0.2,
          duration: 0.8 
        }}
        viewport={{ once: true }}
      >
        {number}
      </motion.h3>
      <p className="text-gray-600 font-medium">{title}</p>
    </motion.div>
  );
};

export default Programs;
