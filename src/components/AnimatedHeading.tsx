
import React from 'react';
import { motion } from 'framer-motion';

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type AnimationType = 'letter-by-letter' | 'wave' | 'fade' | 'slide' | 'scale' | 'typewriter' | 'rotate' | 'paint';

interface AnimatedHeadingProps {
  text: string;
  tag: HeadingTag;
  className?: string;
  color?: string;
  animation?: AnimationType;
  staggerDelay?: number;
  duration?: number;
}

const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({
  text,
  tag = 'h2',
  className = '',
  color = 'text-santaran-teal',
  animation = 'letter-by-letter',
  staggerDelay = 0.03,
  duration = 0.5
}) => {
  // Variants for letter animations
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * staggerDelay,
        duration: duration,
        ease: "easeOut"
      }
    })
  };

  // Variants for wave animation
  const waveVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * staggerDelay,
        duration: duration,
        ease: "easeOut"
      }
    }),
    hover: (i: number) => ({
      y: [-2, -10, -2],
      transition: {
        duration: 0.5,
        delay: i * 0.05,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    })
  };

  // Variants for fade animation
  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: duration * 1.5,
        ease: "easeOut"
      }
    }
  };

  // Variants for slide animation
  const slideVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: duration,
        ease: "easeOut"
      }
    }
  };

  // Variants for scale animation
  const scaleVariants = {
    hidden: { opacity: 0, scale: 0.7 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: duration,
        ease: "easeOut"
      }
    }
  };

  // Variants for typewriter animation
  const typewriterVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: {
      width: "100%",
      opacity: 1,
      transition: {
        duration: duration * 2,
        ease: "easeOut"
      }
    }
  };

  // Variants for rotate animation
  const rotateVariants = {
    hidden: { opacity: 0, rotateX: 90 },
    visible: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: duration,
        ease: "easeOut"
      }
    }
  };

  // Variants for paint animation
  const paintVariants = {
    hidden: { opacity: 0, pathLength: 0 },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: duration * 2,
        ease: "easeInOut"
      }
    }
  };

  // Get the appropriate variants based on animation type
  const getVariants = () => {
    switch(animation) {
      case 'wave':
        return waveVariants;
      case 'fade':
        return fadeVariants;
      case 'slide': 
        return slideVariants;
      case 'scale':
        return scaleVariants;
      case 'typewriter':
        return typewriterVariants;
      case 'rotate':
        return rotateVariants;
      case 'paint':
        return paintVariants;
      case 'letter-by-letter':
      default:
        return letterVariants;
    }
  };

  // Split text into words and then letters for staggered animations
  const words = text.split(' ');
  
  // Render tag with appropriate variants
  const renderAnimatedHeading = () => {
    const variants = getVariants();
    
    // For animations that animate the entire text block
    if (animation === 'fade' || animation === 'slide' || animation === 'scale' || animation === 'typewriter' || animation === 'rotate') {
      return React.createElement(
        tag,
        { className: `${className} ${color}` },
        <motion.span
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variants}
          style={{ display: 'inline-block', overflow: animation === 'typewriter' ? 'hidden' : 'visible' }}
        >
          {text}
        </motion.span>
      );
    }
    
    // For paint animation (SVG-based)
    if (animation === 'paint') {
      return React.createElement(
        tag,
        { className: `${className} ${color}` },
        <svg
          width="100%"
          height="auto"
          viewBox={`0 0 ${text.length * 20} 40`}
          style={{ overflow: 'visible', maxWidth: '100%' }}
        >
          <motion.text
            x="10"
            y="30"
            fill="currentColor"
            fontSize="24"
            fontFamily="inherit"
            fontWeight="inherit"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={paintVariants}
            stroke="currentColor"
            strokeWidth="1"
            strokeLinejoin="round"
          >
            {text}
          </motion.text>
        </svg>
      );
    }
    
    // For letter-by-letter or wave animations
    return React.createElement(
      tag,
      { className: `${className} ${color}` },
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="inline-block overflow-hidden"
      >
        {words.map((word, wordIndex) => (
          <span key={`word-${wordIndex}`} className="inline-block">
            {word.split('').map((letter, letterIndex) => (
              <motion.span
                key={`letter-${wordIndex}-${letterIndex}`}
                custom={(wordIndex * 10) + letterIndex} // Custom value for staggered animations
                variants={variants}
                whileHover={animation === 'wave' ? "hover" : undefined}
                className="inline-block"
                style={{ display: 'inline-block' }}
              >
                {letter}
              </motion.span>
            ))}
            {wordIndex !== words.length - 1 && <span>&nbsp;</span>}
          </span>
        ))}
      </motion.span>
    );
  };

  return renderAnimatedHeading();
};

export default AnimatedHeading;
