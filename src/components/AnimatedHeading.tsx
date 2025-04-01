
import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedHeadingProps {
  text: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
  color?: string;
  animation?: 'wave' | 'paint' | 'rotate' | 'scale' | 'typewriter';
  once?: boolean;
}

const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({
  text,
  tag = 'h2',
  className = '',
  color = 'text-santaran-teal',
  animation = 'wave',
  once = true
}) => {
  const letterVariants = {
    wave: {
      hidden: { opacity: 0, y: 20 },
      visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: i * 0.05,
          duration: 0.6,
          type: "spring",
          stiffness: 100,
          damping: 12
        },
      }),
      hover: (i: number) => ({
        y: [0, -8, 0],
        color: ["#2A7D6A", "#D96941", "#F9A826", "#2A7D6A"],
        scale: [1, 1.2, 1],
        transition: {
          duration: 0.8,
          delay: i * 0.03,
          repeat: 0,
          repeatType: "mirror" as const,
          ease: "easeInOut"
        }
      })
    },
    paint: {
      hidden: { opacity: 0 },
      visible: (i: number) => ({
        opacity: 1,
        transition: {
          delay: i * 0.1,
          duration: 1
        }
      }),
      hover: {
        y: [0, -5, 0],
        transition: {
          duration: 0.3
        }
      }
    },
    rotate: {
      hidden: { opacity: 0, rotateY: 90 },
      visible: (i: number) => ({
        opacity: 1,
        rotateY: 0,
        transition: {
          delay: i * 0.07,
          duration: 0.8,
          type: "spring",
          stiffness: 100,
          damping: 10
        }
      }),
      hover: (i: number) => ({
        rotateY: [0, 180, 0],
        transition: {
          duration: 1.2,
          delay: i * 0.05,
        }
      })
    },
    scale: {
      hidden: { opacity: 0, scale: 0.5 },
      visible: (i: number) => ({
        opacity: 1,
        scale: 1,
        transition: {
          delay: i * 0.04,
          duration: 0.5
        }
      }),
      hover: {
        scale: 1.2,
        color: ["#2A7D6A", "#D96941", "#F9A826", "#2A7D6A"],
        transition: {
          duration: 0.4
        }
      }
    },
    typewriter: {
      hidden: { opacity: 0, width: 0 },
      visible: {
        opacity: 1,
        width: "100%",
        transition: {
          delay: 0.2,
          duration: 1.5,
          ease: "easeInOut",
        }
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  };

  const renderTypewriterHeading = () => {
    return (
      <motion.div
        className="relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once }}
      >
        <motion.span 
          className={`${className} ${color} inline-block`}
          variants={letterVariants.typewriter}
        >
          {text}
        </motion.span>
        <motion.div 
          className="absolute right-0 top-0 h-full w-1 bg-santaran-vermilion"
          animate={{ 
            opacity: [1, 0, 1],
            transition: { duration: 1, repeat: Infinity }
          }}
        />
      </motion.div>
    );
  };

  const renderLetterByLetter = () => {
    return (
      <motion.div 
        className={`overflow-hidden inline-block ${className} ${color}`}
        style={{ perspective: "800px" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once }}
        variants={containerVariants}
      >
        {text.split('').map((letter, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={letterVariants[animation]}
            whileHover="hover"
            className="inline-block cursor-pointer"
            style={{ 
              display: "inline-block",
              transformOrigin: "center",
              transformStyle: "preserve-3d"
            }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  const HeadingTag = ({ children }: { children: React.ReactNode }) => {
    switch (tag) {
      case 'h1': return <h1>{children}</h1>;
      case 'h2': return <h2>{children}</h2>;
      case 'h3': return <h3>{children}</h3>;
      case 'h4': return <h4>{children}</h4>;
      case 'h5': return <h5>{children}</h5>;
      case 'h6': return <h6>{children}</h6>;
      default: return <h2>{children}</h2>;
    }
  };

  return (
    <HeadingTag>
      {animation === 'typewriter' ? renderTypewriterHeading() : renderLetterByLetter()}
    </HeadingTag>
  );
};

export default AnimatedHeading;
