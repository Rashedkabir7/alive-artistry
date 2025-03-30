
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUpRight 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-santaran-teal text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <div className="flex items-end mb-4">
              <h2 className="font-display text-3xl font-bold text-white">Santaran</h2>
              <span className="font-display text-xl text-santaran-gold ml-1">Art</span>
            </div>
            <p className="text-white/80 mb-6">
              Santaran Art Organization is a nonprofit artist-run organization from Chittagong, 
              Bangladesh, focusing on art, culture, indigenous knowledge, and human ecology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-santaran-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-santaran-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-santaran-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-santaran-gold transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-santaran-gold">Explore</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-colors inline-flex items-center">
                  <span>About Us</span>
                  <ArrowUpRight size={14} className="ml-1" />
                </Link>
              </li>
              <li>
                <Link to="/exhibitions" className="text-white/80 hover:text-white transition-colors inline-flex items-center">
                  <span>Exhibitions</span>
                  <ArrowUpRight size={14} className="ml-1" />
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-white/80 hover:text-white transition-colors inline-flex items-center">
                  <span>Gallery</span>
                  <ArrowUpRight size={14} className="ml-1" />
                </Link>
              </li>
              <li>
                <Link to="/#programs" className="text-white/80 hover:text-white transition-colors inline-flex items-center">
                  <span>Programs</span>
                  <ArrowUpRight size={14} className="ml-1" />
                </Link>
              </li>
              <li>
                <Link to="/#contact" className="text-white/80 hover:text-white transition-colors inline-flex items-center">
                  <span>Contact</span>
                  <ArrowUpRight size={14} className="ml-1" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-santaran-gold">Programs</h3>
            <ul className="space-y-3">
              <li>
                <a href="#harith" className="text-white/80 hover:text-white transition-colors">Harith</a>
              </li>
              <li>
                <a href="#kalpapuri" className="text-white/80 hover:text-white transition-colors">Kalpapuri</a>
              </li>
              <li>
                <a href="#shikar" className="text-white/80 hover:text-white transition-colors">Shikar</a>
              </li>
              <li>
                <a href="#artfactory" className="text-white/80 hover:text-white transition-colors">Art Factory</a>
              </li>
              <li>
                <a href="#donate" className="bg-santaran-terracotta/90 hover:bg-santaran-terracotta text-white px-4 py-2 rounded-full transition-colors inline-block mt-2">
                  Support Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-santaran-gold">Contact Us</h3>
            <address className="not-italic">
              <div className="flex items-start mb-4">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <p className="text-white/80">
                  123 Agrabad Commercial Area,<br />
                  Chittagong, Bangladesh
                </p>
              </div>
              <div className="flex items-center mb-4">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <p className="text-white/80">+880 123 456 7890</p>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <a href="mailto:info@santaran.org" className="text-white/80 hover:text-white transition-colors">
                  info@santaran.org
                </a>
              </div>
            </address>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/20 text-center text-white/60 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Santaran Art Organization. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <a href="#privacy" className="hover:text-white mr-6 transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-white transition-colors">Terms of Use</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
