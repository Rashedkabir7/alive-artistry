
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 pb-12 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-santaran-terracotta/20 animate-float blur-2xl"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-santaran-teal/20 animate-float blur-3xl" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-36 h-36 rounded-full bg-santaran-gold/20 animate-float blur-2xl" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="heading-xl mb-6">
              <span className="text-santaran-terracotta">Art</span> for 
              <span className="text-santaran-teal"> Dignifying </span> 
              <span className="text-santaran-brown">Life</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto lg:mx-0">
              Santaran means swimming in Bengali. As a group of artists, Santaran has been continuing its journey since 1998, 
              creating a bridge between Indigenous knowledge, human ecology, art, culture, mythology, and spirituality.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#programs" 
                className="bg-santaran-terracotta hover:bg-santaran-terracotta/90 text-white px-6 py-3 rounded-full transition-colors text-lg"
              >
                Explore Programs
              </a>
              <a 
                href="#about" 
                className="bg-transparent border-2 border-santaran-teal text-santaran-teal hover:bg-santaran-teal hover:text-white px-6 py-3 rounded-full transition-colors text-lg"
              >
                Learn More
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Tree image with animation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="/public/lovable-uploads/e04b0dc7-2eda-4b22-b81d-9d2151bc534f.png"
                  alt="Yanbriksha - Banyan tree of knowledge"
                  className="w-full h-auto object-contain drop-shadow-xl animate-float"
                />
              </div>
              
              {/* Circular background with rotation */}
              <div className="absolute inset-0 -z-10 flex items-center justify-center">
                <div className="w-4/5 h-4/5 rounded-full bg-santaran-gold/10 animate-spin-slow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
