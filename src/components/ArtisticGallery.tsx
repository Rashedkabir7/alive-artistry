
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ArtisticArrow from './ArtisticArrow';

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

interface ArtisticGalleryProps {
  images: GalleryImage[];
  autoPlay?: boolean;
  interval?: number;
  className?: string;
}

const ArtisticGallery: React.FC<ArtisticGalleryProps> = ({
  images,
  autoPlay = true,
  interval = 5000,
  className = '',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isReady, setIsReady] = useState(false);

  // Ensure the component is fully mounted before animations begin
  useEffect(() => {
    setIsReady(true);
    
    if (!autoPlay) return;
    
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);
    
    return () => clearInterval(timer);
  }, [autoPlay, interval, images.length]);

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Simplified variants to avoid complex calculations that might cause errors
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  // If not ready or no images, show a placeholder
  if (!isReady || images.length === 0) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <div className="aspect-[16/9] rounded-lg overflow-hidden bg-gray-200 animate-pulse"></div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="aspect-[16/9] rounded-lg overflow-hidden relative">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: 'tween', duration: 0.5 }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              {images[currentIndex].caption && (
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-white p-6 font-medium"
                >
                  {images[currentIndex].caption}
                </motion.p>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation buttons */}
      {images.length > 1 && (
        <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 transform -translate-y-1/2 pointer-events-none">
          <button 
            onClick={goToPrevious}
            className="p-2 rounded-full bg-white/80 hover:bg-white shadow-lg transform transition-transform hover:scale-110 pointer-events-auto"
            aria-label="Previous image"
          >
            <ArtisticArrow direction="left" size="sm" />
          </button>
          <button 
            onClick={goToNext}
            className="p-2 rounded-full bg-white/80 hover:bg-white shadow-lg transform transition-transform hover:scale-110 pointer-events-auto"
            aria-label="Next image"
          >
            <ArtisticArrow direction="right" size="sm" />
          </button>
        </div>
      )}

      {/* Dots indicator */}
      {images.length > 1 && (
        <div className="flex justify-center space-x-2 mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                currentIndex === index 
                  ? 'bg-santaran-vermilion w-6' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ArtisticGallery;
