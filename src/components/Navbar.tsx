
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-2 bg-white/90 backdrop-blur-md shadow-md' 
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <motion.span 
            className="font-display text-2xl font-bold text-santaran-terracotta"
            whileHover={{ scale: 1.05 }}
          >
            Santaran
          </motion.span>
          <motion.span 
            className="font-display text-xl text-santaran-teal"
            whileHover={{ scale: 1.05 }}
          >
            Art
          </motion.span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-2">
          <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
          <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>About</Link>
          <Link to="/exhibitions" className={`nav-link ${isActive('/exhibitions') ? 'active' : ''}`}>Exhibitions</Link>
          <Link to="/gallery" className={`nav-link ${isActive('/gallery') ? 'active' : ''}`}>Gallery</Link>
          <Link to="/#programs" className="nav-link">Programs</Link>
          <Link to="/#contact" className="nav-link">Contact</Link>
          <a 
            href="#donate" 
            className="ml-4 bg-santaran-terracotta hover:bg-santaran-terracotta/90 text-white px-5 py-2 rounded-full transition-colors"
          >
            Support Us
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-santaran-teal p-2"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white/95 backdrop-blur-md shadow-lg absolute top-full left-0 right-0 p-4"
        >
          <div className="flex flex-col space-y-2">
            <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`} onClick={toggleMobileMenu}>Home</Link>
            <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`} onClick={toggleMobileMenu}>About</Link>
            <Link to="/exhibitions" className={`nav-link ${isActive('/exhibitions') ? 'active' : ''}`} onClick={toggleMobileMenu}>Exhibitions</Link>
            <Link to="/gallery" className={`nav-link ${isActive('/gallery') ? 'active' : ''}`} onClick={toggleMobileMenu}>Gallery</Link>
            <Link to="/#programs" className="nav-link" onClick={toggleMobileMenu}>Programs</Link>
            <Link to="/#contact" className="nav-link" onClick={toggleMobileMenu}>Contact</Link>
            <a 
              href="#donate" 
              className="mt-2 bg-santaran-terracotta hover:bg-santaran-terracotta/90 text-white px-5 py-2 rounded-full transition-colors text-center"
              onClick={toggleMobileMenu}
            >
              Support Us
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
