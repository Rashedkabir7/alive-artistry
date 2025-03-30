
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
          <span className="font-display text-2xl font-bold text-santaran-terracotta">Santaran</span>
          <span className="font-display text-xl text-santaran-teal">Art</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-2">
          <Link to="/" className="nav-link active">Home</Link>
          <Link to="/#about" className="nav-link">About</Link>
          <Link to="/#programs" className="nav-link">Programs</Link>
          <Link to="/#projects" className="nav-link">Projects</Link>
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
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg absolute top-full left-0 right-0 p-4 animate-fade-in-up">
          <div className="flex flex-col space-y-2">
            <Link to="/" className="nav-link active" onClick={toggleMobileMenu}>Home</Link>
            <Link to="/#about" className="nav-link" onClick={toggleMobileMenu}>About</Link>
            <Link to="/#programs" className="nav-link" onClick={toggleMobileMenu}>Programs</Link>
            <Link to="/#projects" className="nav-link" onClick={toggleMobileMenu}>Projects</Link>
            <Link to="/#contact" className="nav-link" onClick={toggleMobileMenu}>Contact</Link>
            <a 
              href="#donate" 
              className="mt-2 bg-santaran-terracotta hover:bg-santaran-terracotta/90 text-white px-5 py-2 rounded-full transition-colors text-center"
              onClick={toggleMobileMenu}
            >
              Support Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
