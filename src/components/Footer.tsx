
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-santaran-teal text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Column */}
          <div>
            <h3 className="font-display text-2xl mb-4">Santaran Art Organization</h3>
            <p className="mb-4 text-white/80">
              "Art for Dignifying Life" is the vision of Santaran Art Organization. 
              Continuing its journey since 1998 from Chittagong, Bangladesh.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-santaran-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="hover:text-santaran-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" className="hover:text-santaran-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-display text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/#about" className="hover:text-santaran-gold transition-colors">About Us</Link></li>
              <li><Link to="/#programs" className="hover:text-santaran-gold transition-colors">Our Programs</Link></li>
              <li><Link to="/#projects" className="hover:text-santaran-gold transition-colors">Projects</Link></li>
              <li><Link to="/gallery" className="hover:text-santaran-gold transition-colors">Gallery</Link></li>
              <li><Link to="/#contact" className="hover:text-santaran-gold transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-display text-xl mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Chittagong, Bangladesh</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>+880 123 456 7890</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>contact@santaranart.org</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} Santaran Art Organization. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
