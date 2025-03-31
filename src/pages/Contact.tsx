
import React from 'react';
import { motion } from 'framer-motion';
import ContactSection from '../components/ContactSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-santaran-cream/30">
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <motion.section 
        className="relative py-20 overflow-hidden bg-gradient-to-b from-santaran-cream/30 to-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-center"
          >
            <h1 className="heading-xl text-santaran-teal mb-4 font-serif">Contact Us</h1>
            <div className="w-24 h-1 bg-santaran-terracotta mx-auto"></div>
            <p className="mt-6 text-lg max-w-2xl mx-auto text-gray-700">
              We'd love to hear from you. Reach out to us with questions about our programs, 
              collaboration opportunities, or to learn more about our artistic initiatives.
            </p>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-santaran-jade/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-santaran-terracotta/5 rounded-full blur-3xl"></div>
      </motion.section>
      
      {/* Contact Form Section */}
      <ContactSection />
      
      {/* Map Section */}
      <section className="py-16 bg-gradient-to-b from-white to-santaran-cream/30">
        <div className="container mx-auto px-4">
          <motion.div 
            className="bg-white/80 p-6 rounded-lg shadow-lg backdrop-blur-sm overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="heading-md text-santaran-terracotta mb-6 font-serif">Visit Our Studio</h3>
            <div className="aspect-[16/9] w-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118085.23298754766!2d91.7285884738315!3d22.330297886521507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8a64095dfd3%3A0x5015cc5bcb6905d9!2sChittagong%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1697642181220!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-md"
                title="Santaran Art Organization Location"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
