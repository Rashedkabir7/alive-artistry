
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, ArrowDown, Heart, Feather, Users } from 'lucide-react';
import ContactSection from '../components/ContactSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  // Decorative element variants
  const floatingCircle = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-santaran-cream/30">
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section with Artistic Elements */}
      <motion.section 
        className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-santaran-cream/30 to-white"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4 relative z-10">
          <motion.div variants={fadeIn} className="text-center">
            <span className="inline-block px-4 py-1 bg-santaran-jade/10 text-santaran-jade rounded-full text-sm mb-4 font-medium">
              Begin a Conversation
            </span>
            <h1 className="heading-xl text-santaran-teal mb-6 font-serif">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="inline-block"
              >
                Weave Your Story With Ours
              </motion.span>
            </h1>
            <div className="w-24 h-1 bg-santaran-terracotta mx-auto"></div>
            <motion.p 
              variants={fadeIn}
              className="mt-8 text-lg max-w-2xl mx-auto text-gray-700"
            >
              Like threads in a tapestry, every connection enriches our collective artwork. 
              Reach out to share your vision, explore collaborations, or join our artistic community.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-12 flex justify-center"
            >
              <a 
                href="#contact-form" 
                className="flex flex-col items-center text-santaran-terracotta hover:text-santaran-teal transition-colors"
              >
                <span className="mb-2">Share Your Thoughts</span>
                <motion.div
                  animate={{ 
                    y: [0, 10, 0],
                    transition: { 
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "loop" 
                    }
                  }}
                >
                  <ArrowDown size={24} />
                </motion.div>
              </a>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Decorative artistic elements */}
        <motion.div 
          className="absolute -top-32 -right-32 w-96 h-96 bg-santaran-jade/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.05, 1],
            transition: { duration: 8, repeat: Infinity, repeatType: "reverse" }
          }}
        ></motion.div>
        <motion.div 
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-santaran-terracotta/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            transition: { duration: 10, repeat: Infinity, repeatType: "reverse" }
          }}
        ></motion.div>
        
        {/* Floating artistic circles */}
        <motion.div 
          className="hidden md:block absolute top-1/4 left-16 w-6 h-6 bg-santaran-gold/30 rounded-full"
          variants={floatingCircle}
          animate="animate"
        ></motion.div>
        <motion.div 
          className="hidden md:block absolute bottom-1/3 right-20 w-4 h-4 bg-santaran-terracotta/40 rounded-full"
          variants={floatingCircle}
          animate="animate"
          transition={{ delay: 1 }}
        ></motion.div>
      </motion.section>
      
      {/* Quick Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Email Card */}
            <motion.div 
              className="bg-gradient-to-br from-santaran-cream/50 to-white p-8 rounded-lg shadow-lg border border-santaran-jade/10 text-center hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <div className="mx-auto w-16 h-16 flex items-center justify-center bg-gradient-to-br from-santaran-teal to-santaran-jade rounded-full text-white mb-4 shadow-lg">
                <Mail size={28} />
              </div>
              <h3 className="font-display text-xl font-medium text-santaran-teal mb-2">Words to Us</h3>
              <p className="text-gray-600 mb-3">For stories, questions, and collaborations</p>
              <a href="mailto:contact@santaranart.org" className="text-santaran-terracotta hover:underline font-medium">contact@santaranart.org</a>
            </motion.div>
            
            {/* Phone Card */}
            <motion.div 
              className="bg-gradient-to-br from-santaran-cream/50 to-white p-8 rounded-lg shadow-lg border border-santaran-jade/10 text-center hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="mx-auto w-16 h-16 flex items-center justify-center bg-gradient-to-br from-santaran-jade to-santaran-teal rounded-full text-white mb-4 shadow-lg">
                <Phone size={28} />
              </div>
              <h3 className="font-display text-xl font-medium text-santaran-teal mb-2">Voice to Voice</h3>
              <p className="text-gray-600 mb-3">Speak with our artistic guides</p>
              <a href="tel:+8801234567890" className="text-santaran-terracotta hover:underline font-medium">+880 123 456 7890</a>
            </motion.div>
            
            {/* Location Card */}
            <motion.div 
              className="bg-gradient-to-br from-santaran-cream/50 to-white p-8 rounded-lg shadow-lg border border-santaran-jade/10 text-center hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="mx-auto w-16 h-16 flex items-center justify-center bg-gradient-to-br from-santaran-terracotta to-santaran-amber rounded-full text-white mb-4 shadow-lg">
                <MapPin size={28} />
              </div>
              <h3 className="font-display text-xl font-medium text-santaran-teal mb-2">Sacred Space</h3>
              <p className="text-gray-600 mb-3">Visit our studio sanctuary by appointment</p>
              <p className="text-santaran-terracotta font-medium">Chittagong, Bangladesh</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section with anchor */}
      <div id="contact-form">
        <ContactSection />
      </div>
      
      {/* Enhanced Map Section with artistic elements */}
      <section className="py-16 bg-gradient-to-b from-white to-santaran-cream/30 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="heading-md text-santaran-teal mb-4 font-serif">Our Earthly Anchor</h2>
            <div className="w-16 h-1 bg-santaran-terracotta mx-auto"></div>
          </motion.div>
          
          <motion.div 
            className="relative fancy-border bg-white/80 p-6 rounded-lg shadow-xl backdrop-blur-sm overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Artistic decorative elements */}
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-santaran-jade/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-santaran-terracotta/10 rounded-full blur-3xl"></div>
            
            <div className="aspect-[16/9] w-full relative z-10 rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118085.23298754766!2d91.7285884738315!3d22.330297886521507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8a64095dfd3%3A0x5015cc5bcb6905d9!2sChittagong%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1697642181220!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
                title="Santaran Art Organization Location"
              ></iframe>
            </div>
            
            <motion.div
              className="mt-6 bg-gradient-to-r from-santaran-teal/10 to-santaran-jade/10 p-4 rounded-lg max-w-xl mx-auto text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <p className="text-gray-700">
                <span className="font-medium text-santaran-teal">Santaran Art Sanctuary:</span> Nestled in the vibrant heart of Chittagong, 
                our studio is where artistic visions take form and community connections flourish. 
                Schedule a visit to experience the living energy of our creative space.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Collaboration Vision Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center mb-4">
                  <Heart className="text-santaran-terracotta mr-2" />
                  <span className="uppercase tracking-wider text-sm font-medium text-santaran-amber">
                    Collaborative Spirit
                  </span>
                </div>
                <h2 className="heading-md text-santaran-teal mb-6">Join Hands in Creation</h2>
                <div className="w-20 h-1 bg-santaran-terracotta mb-6"></div>
              </motion.div>
              
              <motion.p
                className="text-lg mb-6 text-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                We believe that the most powerful artistic expressions emerge when diverse voices combine 
                in harmony. Whether you're an artist, educator, community leader, or simply someone who 
                resonates with our vision, there's a place for you in our circle.
              </motion.p>
              
              <motion.p
                className="text-lg mb-8 text-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Through collaborative projects, workshops, and cultural exchanges, we create spaces 
                where tradition and innovation dance together, and where every participant becomes 
                both teacher and student.
              </motion.p>
              
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="flex items-start">
                  <div className="mr-3 mt-1 text-santaran-jade">
                    <Feather size={18} />
                  </div>
                  <p>Artist residencies that bridge traditional and contemporary practices</p>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-3 mt-1 text-santaran-jade">
                    <Feather size={18} />
                  </div>
                  <p>Community workshops that make art accessible to all</p>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-3 mt-1 text-santaran-jade">
                    <Feather size={18} />
                  </div>
                  <p>Cultural documentation projects to preserve indigenous knowledge</p>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-3 mt-1 text-santaran-jade">
                    <Feather size={18} />
                  </div>
                  <p>Environmental art initiatives that honor our connection to nature</p>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200" 
                  alt="Artists collaborating on a project" 
                  className="w-full h-full object-cover rounded-lg shadow-xl"
                />
              </div>
              
              <motion.div 
                className="absolute -bottom-6 -right-6 z-0"
                animate={{ 
                  rotate: [0, 5, 0, -5, 0],
                  transition: { duration: 10, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <div className="bg-santaran-terracotta/10 w-full h-full absolute inset-0 rounded-lg"></div>
                <img 
                  src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=400" 
                  alt="Close-up of artistic materials" 
                  className="w-48 h-48 object-cover rounded-lg border-4 border-white shadow-lg"
                />
              </motion.div>
              
              <motion.div 
                className="absolute -top-8 -left-8 z-0 overflow-hidden"
                animate={{ 
                  rotate: [0, -3, 0, 3, 0],
                  transition: { duration: 12, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <div className="bg-santaran-jade/10 w-full h-full absolute inset-0 rounded-lg"></div>
                <img 
                  src="https://images.unsplash.com/photo-1492037766660-2a56f9eb3fcb?q=80&w=400" 
                  alt="Traditional artisan working" 
                  className="w-40 h-40 object-cover rounded-lg border-4 border-white shadow-lg"
                />
              </motion.div>
              
              <motion.div
                className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full"
                animate={{ 
                  scale: [1, 1.05, 1],
                  transition: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <div className="w-full h-full bg-santaran-amber/5 rounded-full blur-3xl"></div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Community Testimonial */}
      <section className="py-16 bg-santaran-cream/20 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute -top-10 -left-10 text-santaran-terracotta/10">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.9 1.05C6.45 1.05 1.95 5.55 1.95 11C1.95 13.1 2.75 15.1 4.05 16.65C3.95 17.65 3.45 18.55 2.95 19.45C2.75 19.85 2.95 20.35 3.45 20.45C5.55 20.85 7.65 20.05 9.05 18.75C9.95 18.95 10.95 19.05 11.95 19.05C17.45 19.05 21.95 14.55 21.95 9.1C21.95 3.55 17.45 1.05 11.9 1.05Z"/>
              </svg>
            </div>
            
            <div className="absolute -bottom-10 -right-10 text-santaran-jade/10 transform rotate-180">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.9 1.05C6.45 1.05 1.95 5.55 1.95 11C1.95 13.1 2.75 15.1 4.05 16.65C3.95 17.65 3.45 18.55 2.95 19.45C2.75 19.85 2.95 20.35 3.45 20.45C5.55 20.85 7.65 20.05 9.05 18.75C9.95 18.95 10.95 19.05 11.95 19.05C17.45 19.05 21.95 14.55 21.95 9.1C21.95 3.55 17.45 1.05 11.9 1.05Z"/>
              </svg>
            </div>
            
            <div className="mb-8 flex justify-center">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-santaran-terracotta p-1">
                <img 
                  src="https://images.unsplash.com/photo-1560329072-17f59dcd30a4?q=80&w=100" 
                  alt="Community Member" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            
            <p className="text-xl md:text-2xl italic text-gray-700 mb-6">
              "Working with Santaran has been a transformative journey. Their approach to art isn't just about creating 
              beautiful objects—it's about weaving community connections, honoring ancestral wisdom, and reimagining 
              our relationship with the natural world."
            </p>
            
            <div>
              <p className="font-medium text-santaran-teal">Amina Rahman</p>
              <p className="text-gray-600">Community Arts Leader, Chittagong</p>
            </div>
            
            <div className="mt-10 flex justify-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-santaran-terracotta"></span>
              <span className="w-3 h-3 rounded-full bg-santaran-teal/30"></span>
              <span className="w-3 h-3 rounded-full bg-santaran-teal/30"></span>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Closing Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Users className="text-santaran-teal mx-auto mb-4" size={36} />
            <h2 className="heading-md text-santaran-teal mb-4">Begin Your Artistic Journey With Us</h2>
            <p className="text-lg max-w-2xl mx-auto mb-8 text-gray-700">
              Whether you're seeking to collaborate, participate, or simply learn more about our work,
              we welcome your voice in our artistic dialogue. Reach out today and let's create together.
            </p>
            <a 
              href="#contact-form" 
              className="inline-block bg-gradient-to-r from-santaran-teal to-santaran-jade px-8 py-3 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Connect With Us
            </a>
          </motion.div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
